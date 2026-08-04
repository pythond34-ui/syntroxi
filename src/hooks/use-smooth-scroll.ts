import { useLayoutEffect } from "react";
import Lenis from "lenis";

export function useSmoothScroll(pathname?: string) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.scrollingElement ?? document.documentElement;
    root.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.scrollTo(0, { immediate: true });

    const reset = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      if (root) root.scrollTop = 0;
    };

    reset();
    requestAnimationFrame(reset);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [pathname]);
}
