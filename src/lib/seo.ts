export const siteConfig = {
  title: "SYNTROXI | AI Employees for Real Operations",
  description:
    "SYNTROXI deploys autonomous AI Employees into your business systems so work gets finished, not just discussed.",
  url: "https://syntroxi.com",
  image: "/logo.svg",
  themeColor: "#0b1020",
  locale: "en_US",
};

export function buildPageTitle(title?: string) {
  return title ? `${title} | SYNTROXI` : siteConfig.title;
}
