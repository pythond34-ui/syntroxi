import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { SkipLink } from "./skip-link";
import { Toaster } from "@/components/ui/sonner";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function AppLayout() {
  useSmoothScroll();
  const location = useLocation();
  const bare = location.pathname.startsWith("/auth");

  useEffect(() => {
    const titleMap: Record<string, string> = {
      "/": "AI Employees for Real Operations",
      "/about": "About SYNTROXI",
      "/ai-employees": "AI Employees",
      "/case-studies": "Case Studies",
      "/connected-systems": "Connected Systems",
      "/contact": "Contact SYNTROXI",
      "/industries": "Industries",
      "/pricing": "Pricing",
      "/resources": "Resources",
      "/workforce-builder": "Workforce Builder",
    };

    const title = titleMap[location.pathname] ?? "SYNTROXI";
    document.title = `${title} | SYNTROXI`;
    document.documentElement.lang = "en";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SYNTROXI deploys autonomous AI Employees into your business systems so work gets finished, not just discussed.",
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://syntroxi.com${location.pathname}`);
    }
  }, [location.pathname]);

  return (
    <>
      <SkipLink />
      {bare ? null : <Navbar />}
      <main id="main-content" className={bare ? "" : "min-h-screen"}>
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" /> }>
          <Outlet />
        </Suspense>
      </main>
      {bare ? null : <Footer />}
      <Toaster position="bottom-right" />
    </>
  );
}
