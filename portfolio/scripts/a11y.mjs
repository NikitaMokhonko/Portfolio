/**
 * WCAG 2.2 AA audit across every route, in both themes.
 *
 *   npm run a11y                 # against http://localhost:3000
 *   BASE=http://localhost:3001 npm run a11y
 *
 * Exits non-zero if anything fails, so it can gate a deploy.
 */
import { AxePuppeteer } from "@axe-core/puppeteer";
import puppeteer from "puppeteer";
import { readFileSync } from "node:fs";

// Slugs are read from the data file rather than listed here: a project added
// to the site but forgotten in this array would simply never be audited.
const slugs = [
  ...readFileSync(new URL("../src/data/projects.ts", import.meta.url), "utf8")
    .matchAll(/^\s{4}slug: "([^"]+)"/gm),
].map((m) => m[1]);


const BASE = process.env.BASE ?? "http://localhost:3000";

const ROUTES = [
  "/",
  "/projects",
  "/about",
  "/contact",
  ...slugs.map((slug) => `/work/${slug}`),
];

const TAGS = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
];

const THEMES = ["light", "dark"];

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 900 },
];

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox"],
});

let failures = 0;
const seen = new Map();

for (const viewport of VIEWPORTS) {
  for (const theme of THEMES) {
    const page = await browser.newPage();
    await page.setViewport(viewport);
    // Set the theme before any app script runs, the same way a returning
    // visitor would have it.
    await page.evaluateOnNewDocument((value) => {
      localStorage.setItem("nm-theme", value);
    }, theme);

    for (const route of ROUTES) {
      await page.goto(BASE + route, { waitUntil: "networkidle0" });
      // Let reveal transitions settle so nothing is measured mid-fade.
      await new Promise((r) => setTimeout(r, 400));

      const results = await new AxePuppeteer(page).withTags(TAGS).analyze();

      for (const violation of results.violations) {
        failures += violation.nodes.length;
        const key = `${violation.id}::${violation.nodes[0]?.target?.join(" ")}`;
        if (seen.has(key)) {
          seen.get(key).where.push(`${viewport.name}/${theme}${route}`);
          continue;
        }
        seen.set(key, {
          id: violation.id,
          impact: violation.impact,
          help: violation.help,
          nodes: violation.nodes,
          where: [`${viewport.name}/${theme}${route}`],
        });
      }
    }
    await page.close();
  }
}

await browser.close();

const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
const found = [...seen.values()].sort(
  (a, b) => (order[a.impact] ?? 9) - (order[b.impact] ?? 9),
);

console.log(
  `\nWCAG 2.2 AA · ${ROUTES.length} routes × ${THEMES.length} themes × ${VIEWPORTS.length} viewports\n`,
);

if (found.length === 0) {
  console.log("No violations.\n");
  process.exit(0);
}

for (const v of found) {
  console.log(`[${v.impact}] ${v.id} — ${v.help}`);
  console.log(`  seen on: ${v.where.slice(0, 4).join(", ")}`);
  for (const node of v.nodes.slice(0, 3)) {
    console.log(`  target: ${node.target.join(" ")}`);
    const detail = (node.failureSummary ?? "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .slice(1, 3)
      .join(" | ");
    if (detail) console.log(`  why:    ${detail}`);
  }
  console.log();
}

console.log(`${found.length} distinct issues, ${failures} node instances.\n`);
process.exit(1);
