import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/primitives";
import { SxButton } from "@/components/site/sx-button";

function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page isn’t available"
        description="The link may be outdated or the page may have moved. You can return home or browse the most useful SYNTROXI pages."
      >
        <div className="flex flex-wrap items-center gap-3">
          <SxButton to="/">Return home</SxButton>
          <Link to="/ai-employees" className="inline-flex items-center gap-2 text-sm font-medium text-electric">
            <Search className="h-4 w-4" /> Explore AI employees
          </Link>
        </div>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-card p-8 text-center shadow-soft">
          <p className="text-sm font-medium text-muted-foreground">Error code</p>
          <p className="mt-3 text-5xl font-semibold tracking-tight text-navy">404</p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-3 text-sm font-medium text-navy transition-colors hover:border-electric hover:text-electric"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export default NotFound;
