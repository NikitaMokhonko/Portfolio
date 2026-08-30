import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. Case studies now live under /work/$slug. */
export const Route = createFileRoute("/skinsmart")({
  beforeLoad: () => {
    throw redirect({
      to: "/work/$slug",
      params: { slug: "skinsmart" },
      replace: true,
    });
  },
});
