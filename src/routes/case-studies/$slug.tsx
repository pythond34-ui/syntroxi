import { useParams } from "react-router-dom";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/primitives";
import { FinalCta } from "@/components/site/final-cta";
import { caseStudies } from "@/lib/site-data";

function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <Section>
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
          <p className="text-sm text-muted-foreground">Case study not found.</p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={`${study.company} • ${study.industry}`}
        title={study.headline}
        description={study.quote}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>{study.person}</span>
        </div>
      </PageHero>

      <Section>
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-12">
          <dl className="grid gap-5 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-border bg-secondary p-5">
                <dd className="text-2xl font-semibold text-navy">{metric.value}</dd>
                <dt className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mt-10 space-y-6 text-sm leading-8 text-foreground">
            <p>
              The project started with a clear objective: reduce operational bottlenecks without adding
              more manual process. SYNTROXI mapped the existing workflow, connected the operational
              systems, and deployed an AI employee aligned to the daily execution path.
            </p>
            <p>
              Within weeks, the team moved from reactive handling to proactive coverage. The AI
              employee monitored requests, prioritized exceptions, and completed routine work with
              human review only where risk or ambiguity required it.
            </p>
            <p>
              The result was a measurable reduction in manual touches, faster turnaround, and a
              stronger operating rhythm across teams. The business gained velocity without disrupting
              the existing service model.
            </p>
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}

export default CaseStudyDetail;
