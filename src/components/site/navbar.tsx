import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { SxButton } from "./sx-button";
import { cn } from "@/lib/utils";

const links = [
  { label: "AI Employees", to: "/ai-employees" },
  { label: "Connected Systems", to: "/connected-systems" },
  { label: "Workforce Builder", to: "/workforce-builder" },
  { label: "Industries", to: "/industries" },
  { label: "Pricing", to: "/pricing" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Resources", to: "/resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useLocation().pathname;

  const resetScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const root = document.scrollingElement ?? document.documentElement;
    if (root) root.scrollTop = 0;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 w-[95%] max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          onClick={resetScroll}
          className="mr-8 flex shrink-0 items-center lg:mr-10"
          aria-label="SYNTROXI home"
        >
          <Logo />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={resetScroll}
              className={cn(
                "whitespace-nowrap rounded-full px-2 py-2 text-[15px] font-medium text-navy-soft transition-colors hover:text-electric",
                pathname.startsWith(l.to) && "text-electric",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
          <SxButton to="/auth" variant="ghost" size="sm" className="whitespace-nowrap">
            Sign in
          </SxButton>
          <SxButton to="/contact" size="sm" className="whitespace-nowrap">
            Book a demo
          </SxButton>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="hairline flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => {
                setOpen(false);
                resetScroll();
              }}
              className="rounded-xl px-3 py-3 text-sm font-medium text-navy hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-2">
            <SxButton to="/auth" variant="outline" size="sm" className="flex-1">
              Sign in
            </SxButton>
            <SxButton to="/contact" size="sm" className="flex-1">
              Book a demo
            </SxButton>
          </div>
        </div>
      </div>
    </header>
  );
}
