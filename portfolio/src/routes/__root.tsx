import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <h1>
        Hello Zodiak Font! RRLLLZZGG
      </h1>
      <Outlet />
    </>
  ),
});
