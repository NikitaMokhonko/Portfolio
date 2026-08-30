import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. Case studies now live under /work/$slug. */
export const Route = createFileRoute("/home-entertainment")({
  beforeLoad: () => {
    throw redirect({
      to: "/work/$slug",
      params: { slug: "home-entertainment" },
      replace: true,
    });
  },
});
