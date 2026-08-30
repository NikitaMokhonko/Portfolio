import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { featuredProjects, projectBySlug, projects } from "./projects";

/**
 * The whole site is generated from this one file, so a typo here is a broken
 * page rather than a broken component. These check the invariants the
 * rendering code assumes but never validates: unique slugs, images that
 * actually exist in `public/`, and a featured set that fills the landing
 * showcase.
 */
const publicPath = (src: string) => new URL(`../../public${src}`, import.meta.url);

describe("projects", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("resolves every slug", () => {
    for (const project of projects) {
      expect(projectBySlug(project.slug)).toBe(project);
    }
  });

  it("features exactly four projects for the landing showcase", () => {
    expect(featuredProjects).toHaveLength(4);
  });

  it("points every cover and gallery image at a file that exists", () => {
    for (const project of projects) {
      for (const src of [project.cover, ...(project.gallery ?? [])]) {
        expect(existsSync(publicPath(src)), `${project.slug}: ${src}`).toBe(
          true,
        );
      }
    }
  });

  it("fills in the copy each case study renders", () => {
    for (const project of projects) {
      for (const field of [
        "title",
        "tagline",
        "intro",
        "role",
        "year",
        "team",
        "timeline",
        "context",
        "approach",
      ] as const) {
        expect(project[field].trim(), `${project.slug}.${field}`).not.toBe("");
      }
      expect(project.stack.length, project.slug).toBeGreaterThan(0);
      expect(project.did.length, project.slug).toBeGreaterThan(0);
    }
  });

  it("only links out over https", () => {
    for (const project of projects) {
      for (const link of project.links) {
        expect(link.href, project.slug).toMatch(/^https:\/\//);
      }
    }
  });
});
