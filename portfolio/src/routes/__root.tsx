import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet, createRootRoute } from "@tanstack/react-router";


export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
});
