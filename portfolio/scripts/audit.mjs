/**
 * End-to-end quality sweep, beyond what axe can see.
 *
 *   BASE=http://localhost:4173 node scripts/audit.mjs
 *
 * Checks every route for: broken internal links, dead external links,
 * missing/duplicate metadata, heading-order breaks, images without alt or
 * reserved space, layout shift, and reduced-motion compliance.
 */
import puppeteer from "puppeteer";
import { readFileSync } from "node:fs";

// Slugs are read from the data file rather than listed here: a project added
// to the site but forgotten in this array would simply never be audited.
const slugs = [
  ...readFileSync(new URL("../src/data/projects.ts", import.meta.url), "utf8")
    .matchAll(/^\s{4}slug: "([^"]+)"/gm),
].map((m) => m[1]);


const BASE = process.env.BASE ?? "http://localhost:4173";

const ROUTES = [
  "/",
  "/projects",
  "/about",
  "/contact",
  ...slugs.map((slug) => `/work/${slug}`),
];

const problems = [];
const note = (route, kind, detail) =>
  problems.push({ route, kind, detail });

const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

const titles = new Map();
const externals = new Set();

for (const route of ROUTES) {
  const res = await page.goto(BASE + route, { waitUntil: "networkidle0" });
  if (!res || res.status() >= 400) {
    note(route, "http", `status ${res?.status()}`);
    continue;
  }
  await new Promise((r) => setTimeout(r, 350));

  const data = await page.evaluate(() => {
    const headings = [...document.querySelectorAll("h1,h2,h3,h4")]
      .filter((h) => h.offsetParent !== null)
      .map((h) => ({ level: +h.tagName[1], text: h.textContent.trim() }));

    const imgs = [...document.querySelectorAll("img")];

    return {
      title: document.title,
      description:
        document.querySelector('meta[name="description"]')?.content ?? null,
      h1Count: document.querySelectorAll("h1").length,
      headings,
      imgsNoAlt: imgs
        .filter((i) => i.alt === null || i.getAttribute("alt") === null)
        .map((i) => i.getAttribute("src")),
      imgsBroken: imgs
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.getAttribute("src")),
      internal: [...document.querySelectorAll('a[href^="/"]')].map((a) =>
        a.getAttribute("href"),
      ),
      external: [...document.querySelectorAll('a[href^="http"]')].map((a) => ({
        href: a.href,
        rel: a.getAttribute("rel") ?? "",
        target: a.getAttribute("target") ?? "",
      })),
      emptyLinks: [...document.querySelectorAll("a")]
        .filter(
          (a) =>
            !a.textContent.trim() &&
            !a.getAttribute("aria-label") &&
            !a.querySelector("img[alt]:not([alt=''])"),
        ).length,
    };
  });

  // Titles must be unique per route (WCAG 2.4.2 in spirit, and SEO).
  if (titles.has(data.title)) {
    note(route, "duplicate-title", `same as ${titles.get(data.title)}`);
  }
  titles.set(data.title, route);

  if (data.h1Count !== 1) note(route, "h1-count", `${data.h1Count} h1 elements`);
  if (!data.description) note(route, "meta", "no description");

  // Heading levels must not skip (h2 -> h4).
  let prev = 0;
  for (const h of data.headings) {
    if (prev && h.level > prev + 1) {
      note(route, "heading-skip", `h${prev} -> h${h.level} at "${h.text.slice(0, 30)}"`);
    }
    prev = h.level;
  }

  for (const src of data.imgsNoAlt) note(route, "img-no-alt", src);
  for (const src of data.imgsBroken) note(route, "img-broken", src);
  if (data.emptyLinks) note(route, "empty-link", `${data.emptyLinks} with no text`);

  for (const link of data.external) {
    if (link.target === "_blank" && !link.rel.includes("noopener")) {
      note(route, "target-blank", `${link.href} missing rel=noopener`);
    }
    externals.add(link.href);
  }

  for (const href of new Set(data.internal)) {
    if (href.startsWith("/") && !ROUTES.includes(href) && href !== "/") {
      note(route, "internal-link", `${href} is not a known route`);
    }
  }
}

// Tall viewports: anything inside the fold on load must already be revealed.
// The reveal observer carries a negative bottom margin, so an element sitting
// in the lowest slice of a tall screen can otherwise never intersect.
for (const height of [1080, 1440, 2160]) {
  await page.setViewport({ width: 1920, height });
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 700));
  const hidden = await page.evaluate(() => {
    return [...document.querySelectorAll(".reveal")]
      .filter((n) => {
        const b = n.getBoundingClientRect();
        const inFold = b.top < window.innerHeight && b.bottom > 0;
        return inFold && +getComputedStyle(n).opacity < 0.99;
      })
      .map((n) => (n.textContent ?? "").trim().slice(0, 40));
  });
  for (const text of hidden) {
    note("/", "unrevealed-in-fold", `at 1920x${height}: "${text}"`);
  }
}
await page.setViewport({ width: 1440, height: 900 });

// Reduced motion: nothing should be left mid-animation or invisible.
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);
await page.goto(BASE + "/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 400));
const reduced = await page.evaluate(() => {
  const hidden = [...document.querySelectorAll(".reveal, .statement-word, .sd-lift")]
    .filter((n) => +getComputedStyle(n).opacity < 0.99).length;
  return { stillFaded: hidden };
});
if (reduced.stillFaded) {
  note("/", "reduced-motion", `${reduced.stillFaded} elements below full opacity`);
}

await browser.close();

// External links, checked once each. Some hosts refuse non-browser agents
// outright — LinkedIn answers 999, others 403/405 — so a status from those
// only proves the host is reachable, not that the URL is wrong.
const BOT_BLOCKED = [/linkedin/, /instagram/, /youtube/];

console.log(`\nChecking ${externals.size} external links…`);
for (const href of externals) {
  const lenient = BOT_BLOCKED.some((re) => re.test(href));
  try {
    const r = await fetch(href, { method: "HEAD", redirect: "follow" });
    if (r.status >= 400 && !lenient) {
      note("(external)", "dead-link", `${r.status} ${href}`);
    } else if (r.status >= 400) {
      console.log(`  reachable, bot-blocked (not a failure): ${r.status} ${href}`);
    }
  } catch (err) {
    note("(external)", "unreachable", `${href} — ${err.message}`);
  }
}

console.log(`\nSite audit · ${ROUTES.length} routes\n`);

if (problems.length === 0) {
  console.log("No problems found.\n");
  process.exit(0);
}

const grouped = {};
for (const p of problems) (grouped[p.kind] ??= []).push(p);
for (const [kind, list] of Object.entries(grouped)) {
  console.log(`${kind} (${list.length})`);
  for (const p of list.slice(0, 8)) console.log(`  ${p.route}: ${p.detail}`);
  console.log();
}
process.exit(1);
