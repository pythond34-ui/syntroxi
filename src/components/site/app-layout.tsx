import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Toaster } from "@/components/ui/sonner";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function AppLayout() {
  useSmoothScroll();
  const location = useLocation();
  const bare = location.pathname.startsWith("/auth");

  return (
    <>
      {bare ? null : <Navbar />}
      <main className={bare ? "" : "min-h-screen"}>
        <Outlet />
      </main>
      {bare ? null : <Footer />}
      <Toaster position="bottom-right" />
    </>
  );
}
