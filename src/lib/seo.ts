export const siteConfig = {
  siteName: "SYNTROXI",
  title: "SYNTROXI | AI Business Operating System for Modern Teams",
  description:
    "SYNTROXI helps businesses deploy AI Employees, workflow automation, and AI business operating systems for sales, support, finance, and operations.",
  url: "https://syntroxi.com",
  image: "https://syntroxi.com/og-image.svg",
  imageAlt: "SYNTROXI AI employee platform overview",
  themeColor: "#0b1020",
  locale: "en_US",
  twitterHandle: "@syntroxi",
  email: "business@syntroxi.com",
  phone: "+91 9024892308",
  address: {
    streetAddress: "Jaipur",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
};

export type SeoPage = {
  title: string;
  description: string;
  robots: string;
  path: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
  canonical?: string;
  image?: string;
  imageAlt?: string;
  author?: string;
  category?: string;
};

const fallbackMetadata: Record<string, SeoPage> = {
  "/": {
    title: "SYNTROXI | AI Business Operating System for Growth Teams",
    description:
      "SYNTROXI is an AI Business Operating System that deploys AI Employees, workflow automation, and AI workforce solutions for high-growth businesses.",
    robots: "index, follow",
    path: "/",
    type: "website",
  },
  "/about": {
    title: "About SYNTROXI | AI Workforce Platform",
    description:
      "Learn how SYNTROXI builds AI Employees and an AI business operating system that automates high-value work across sales, support, finance, and operations.",
    robots: "index, follow",
    path: "/about",
    type: "website",
  },
  "/ai-employees": {
    title: "AI Employees | SYNTROXI",
    description:
      "Explore AI Employees for sales, support, marketing, finance, and operations. Discover AI agents built for real business workflows and measurable outcomes.",
    robots: "index, follow",
    path: "/ai-employees",
    type: "website",
  },
  "/case-studies": {
    title: "Case Studies | SYNTROXI",
    description:
      "See how businesses use SYNTROXI AI Employees, workflow automation, and AI workforce orchestration to improve operations and revenue outcomes.",
    robots: "index, follow",
    path: "/case-studies",
    type: "website",
  },
  "/connected-systems": {
    title: "Connected Systems | AI Business Operating System",
    description:
      "Connect your CRM, ERP, helpdesk, and business tools into one governed AI business operating system powered by SYNTROXI.",
    robots: "index, follow",
    path: "/connected-systems",
    type: "website",
  },
  "/contact": {
    title: "Contact SYNTROXI | Book a Demo",
    description:
      "Talk to SYNTROXI about AI Employees, AI automation, and workflow automation for your business. Book a demo or request a custom pilot.",
    robots: "index, follow",
    path: "/contact",
    type: "website",
  },
  "/industries": {
    title: "AI for SMEs & Enterprise | SYNTROXI",
    description:
      "SYNTROXI supports healthcare, finance, SaaS, retail, education, and operations teams with AI employees and business automation software.",
    robots: "index, follow",
    path: "/industries",
    type: "website",
  },
  "/pricing": {
    title: "Pricing | AI Employees & Workflow Automation",
    description:
      "Explore AI workforce plans and pricing for AI Employees, AI automation, and AI business operating system features across teams.",
    robots: "index, follow",
    path: "/pricing",
    type: "product",
  },
  "/resources": {
    title: "Resources | AI Automation Insights and Guides",
    description:
      "Explore resources, use cases, and operational learnings around AI automation, AI workforce design, and business AI adoption.",
    robots: "index, follow",
    path: "/resources",
    type: "article",
  },
  "/workforce-builder": {
    title: "Workforce Builder | Design Your AI Team",
    description:
      "Design your AI workforce with SYNTROXI. Match AI employees to sales, support, finance, marketing, and operations roles.",
    robots: "index, follow",
    path: "/workforce-builder",
    type: "product",
  },
  "/auth": {
    title: "Sign In | SYNTROXI",
    description: "Secure sign in for SYNTROXI customers and team members.",
    robots: "noindex, nofollow",
    path: "/auth",
    type: "website",
  },
  "/dashboard": {
    title: "Dashboard | SYNTROXI",
    description: "Operational dashboard for AI Employees and business workflow performance.",
    robots: "noindex, nofollow",
    path: "/dashboard",
    type: "website",
  },
  "/checkout": {
    title: "Checkout | SYNTROXI",
    description: "Secure checkout for SYNTROXI AI workforce plans and subscriptions.",
    robots: "noindex, nofollow",
    path: "/checkout",
    type: "website",
  },
};

export function buildPageTitle(title?: string) {
  return title ? `${title} | SYNTROXI` : siteConfig.title;
}

export function getPageSeo(pathname: string): SeoPage {
  const normalizedPath = pathname.split("?")[0].split("#")[0] || "/";
  const direct = fallbackMetadata[normalizedPath];

  if (direct) return direct;

  if (normalizedPath.startsWith("/ai-employees/")) {
    return {
      title: "AI Employee | SYNTROXI",
      description:
        "Explore AI Employees built for workflow automation, business operations, and measurable growth.",
      robots: "index, follow",
      path: normalizedPath,
      type: "product",
      keywords: ["AI employee", "workflow automation", "AI workforce", "SYNTROXI"],
      canonical: `${siteConfig.url}${normalizedPath}`,
      image: `${siteConfig.url}/og-image.svg`,
      imageAlt: "SYNTROXI AI employee overview",
      author: "SYNTROXI",
      category: "Business software",
    };
  }

  if (normalizedPath.startsWith("/resources/")) {
    return {
      title: "AI Operations Resource | SYNTROXI",
      description: "Read practical insights, playbooks, and operating guidance for AI-first business teams.",
      robots: "index, follow",
      path: normalizedPath,
      type: "article",
      keywords: ["AI operations", "AI playbook", "digital workforce", "SYNTROXI"],
      canonical: `${siteConfig.url}${normalizedPath}`,
      image: `${siteConfig.url}/og-image.svg`,
      imageAlt: "SYNTROXI resource preview",
      author: "SYNTROXI",
      category: "AI resources",
    };
  }

  if (normalizedPath.startsWith("/case-studies/")) {
    return {
      title: "Customer Success Story | SYNTROXI",
      description: "Explore real business outcomes from AI employee deployments and connected systems transformations.",
      robots: "index, follow",
      path: normalizedPath,
      type: "article",
      keywords: ["case study", "AI automation ROI", "SYNTROXI results"],
      canonical: `${siteConfig.url}${normalizedPath}`,
      image: `${siteConfig.url}/og-image.svg`,
      imageAlt: "SYNTROXI case study preview",
      author: "SYNTROXI",
      category: "Case study",
    };
  }

  const baseSeo = fallbackMetadata["/"];
  return {
    ...baseSeo,
    keywords: [
      "AI workforce",
      "AI employees",
      "AI business operating system",
      "workflow automation",
      "SYNTROXI",
    ],
    canonical: `${siteConfig.url}${normalizedPath}`,
    image: `${siteConfig.url}/og-image.svg`,
    imageAlt: "SYNTROXI AI Business Operating System",
    author: "SYNTROXI",
    category: "Business software",
  };
}

export function buildBreadcrumbs(pathname: string) {
  const normalizedPath = pathname.split("?")[0].split("#")[0] || "/";
  if (normalizedPath === "/") return [];

  const segments = normalizedPath
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.replace(/-/g, " "));

  return segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    return {
      name: segment
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      item: `${siteConfig.url}${path}`,
    };
  });
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SYNTROXI",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description:
      "SYNTROXI builds AI Employees and business automation systems for modern operations teams.",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    sameAs: [
      "https://www.linkedin.com",
      "https://www.facebook.com",
      "https://x.com",
    ],
    areaServed: "Worldwide",
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SYNTROXI",
    url: siteConfig.url,
    description:
      "AI Business Operating System for AI Employees, workflow automation, and digital workforce orchestration.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SYNTROXI AI Business Operating System",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      category: "Paid subscription",
    },
    description:
      "AI Employees, workflow automation, and AI workforce orchestration platform for modern businesses.",
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: "SYNTROXI",
    },
  };
}

export function buildProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SYNTROXI AI Business Operating System",
    description:
      "Deploy AI Employees and workflow automation that complete real business work across revenue, support, finance, and operations.",
    brand: {
      "@type": "Brand",
      name: "SYNTROXI",
    },
    category: "Business software",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing`,
    },
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        question: "How is an AI Employee priced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each AI Employee includes role-specific orchestration, system integrations, guardrails, and support. Pricing depends on the number of employees and the level of automation required.",
        },
      },
      {
        "@type": "Question",
        question: "How long does deployment take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most teams deploy their first AI Employee in two weeks with system mapping, supervised operation, and rollout planning.",
        },
      },
      {
        "@type": "Question",
        question: "Can SYNTROXI work with existing business systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SYNTROXI connects to your CRM, ERP, helpdesk, messaging, and workflow tools so AI Employees work in the systems your business already runs on.",
        },
      },
    ],
  };
}

export function buildBreadcrumbSchema(pathname: string) {
  const breadcrumbs = buildBreadcrumbs(pathname);
  if (!breadcrumbs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}
