import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL. Case studies now live under /work/$slug. */
export const Route = createFileRoute("/novabank")({
  beforeLoad: () => {
    throw redirect({
      to: "/work/$slug",
      params: { slug: "novabank" },
      replace: true,
    });
  },
});
