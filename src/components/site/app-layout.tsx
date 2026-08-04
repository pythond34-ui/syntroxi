import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { SkipLink } from "./skip-link";
import { Toaster } from "@/components/ui/sonner";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import LoadingPage from "../../routes/loading";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildProductSchema,
  buildSoftwareApplicationSchema,
  buildWebsiteSchema,
  getPageSeo,
  siteConfig,
} from "@/lib/seo";

function SeoHead() {
  const location = useLocation();
  const pathname = location.pathname;
  const seo = getPageSeo(pathname);
  const canonical = `${siteConfig.url}${pathname === "/" ? "" : pathname}`;
  const currentUrl = `${siteConfig.url}${pathname}`;

  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = "en";

    const setMeta = (name: string, content: string, attr = "name") => {
      let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let tag = document.head.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", href);
    };

    setMeta("description", seo.description);
    setMeta("robots", seo.robots);
    setMeta("keywords", (seo.keywords ?? []).join(", "));
    setMeta("author", seo.author ?? siteConfig.siteName);
    setMeta("theme-color", siteConfig.themeColor, "name");
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", seo.title, "name");
    setMeta("twitter:description", seo.description, "name");
    setMeta("twitter:image", seo.image ?? siteConfig.image, "name");
    setMeta("og:title", seo.title, "property");
    setMeta("og:description", seo.description, "property");
    setMeta("og:type", seo.type ?? "website", "property");
    setMeta("og:url", currentUrl, "property");
    setMeta("og:image", seo.image ?? siteConfig.image, "property");
    setMeta("og:site_name", siteConfig.siteName, "property");
    setMeta("og:locale", siteConfig.locale, "property");
    setMeta("article:publisher", siteConfig.siteName, "property");
    setLink("canonical", canonical);
    setLink("icon", "/favicon.png");
    setLink("shortcut icon", "/favicon.png");
    setLink("manifest", "/site.webmanifest");

    const existingJsonLd = document.head.querySelector('script[data-seo-jsonld="true"]');
    if (existingJsonLd) existingJsonLd.remove();

    const schema = [
      buildOrganizationSchema(),
      buildWebsiteSchema(),
      buildSoftwareApplicationSchema(),
      buildProductSchema(),
      buildFaqSchema(),
      buildBreadcrumbSchema(pathname),
    ].filter(Boolean);

    const jsonLdScript = document.createElement("script");
    jsonLdScript.type = "application/ld+json";
    jsonLdScript.setAttribute("data-seo-jsonld", "true");
    jsonLdScript.textContent = JSON.stringify({ "@graph": schema }, null, 0);
    document.head.appendChild(jsonLdScript);
  }, [pathname, seo]);

  return null;
}

export function AppLayout() {
  const location = useLocation();
  useSmoothScroll(location.pathname);
  const bare = location.pathname.startsWith("/auth");

  useEffect(() => {
    const root = document.scrollingElement ?? document.documentElement;
    root.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, [location.pathname]);

  return (
    <>
      <SeoHead />
      <SkipLink />
      {bare ? null : <Navbar />}
      <main id="main-content" className={bare ? "" : "min-h-screen"}>
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </main>
      {bare ? null : <Footer />}
      <Toaster position="bottom-right" />
    </>
  );
}
