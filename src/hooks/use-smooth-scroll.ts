import { useLayoutEffect } from "react";

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

    let cancelled = false;
    let lenis: { raf: (time: number) => void; destroy: () => void; scrollTo: (value: number, options: { immediate: boolean }) => void } | null = null;

    const startSmoothScroll = async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis.scrollTo(0, { immediate: true });

      const reset = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        if (root) root.scrollTop = 0;
      };

      reset();
      requestAnimationFrame(reset);

      let frame = 0;
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(frame);
        lenis?.destroy();
      };
    };

    const teardown = startSmoothScroll();

    return () => {
      cancelled = true;
      if (typeof teardown === "function") teardown();
      else if (lenis) lenis.destroy();
    };
  }, [pathname]);
}
