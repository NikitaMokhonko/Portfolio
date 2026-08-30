import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. Case studies now live under /work/$slug. */
export const Route = createFileRoute("/portfolio")({
  beforeLoad: () => {
    throw redirect({
      to: "/work/$slug",
      params: { slug: "portfolio" },
      replace: true,
    });
  },
});
