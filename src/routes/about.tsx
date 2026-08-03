import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading, Reveal, Stagger, StaggerItem } from "@/components/site/primitives";
import { Counter } from "@/components/site/counter";
import { FinalCta } from "@/components/site/final-cta";

const principles = [
  { t: "Outcomes over output", d: "An employee is judged on completed work, not tokens generated." },
  { t: "Context is the product", d: "Correctness comes from the graph, not the prompt." },
  { t: "Autonomy is earned", d: "Permissions widen only as accuracy proves itself." },
  { t: "Boring reliability", d: "Enterprise work needs uptime, audits and predictability." },
];

const timeline = [
  { year: "2023", t: "Founded", d: "Started as an internal automation team inside a logistics operator." },
  { year: "2024", t: "Context graph v1", d: "Shipped the governed data layer that everything now runs on." },
  { year: "2025", t: "Employee marketplace", d: "Six roles generally available across five industries." },
  { year: "2026", t: "Workforce Builder", d: "Self-serve modelling and deployment for mid-market teams." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We are building the operating layer for digital labour."
        description="SYNTROXI exists because software told teams what to do for thirty years. It should do the work instead."
      />

      <Section>
        <Stagger className="grid gap-8 border-b border-border pb-16 md:grid-cols-4">
          {[
            { v: <Counter to={41} suffix="M+" />, l: "Outcomes delivered" },
            { v: <Counter to={68} />, l: "Enterprise deployments" },
            { v: <Counter to={19} />, l: "Countries served" },
            { v: <Counter to={99} suffix=".98%" />, l: "Platform uptime" },
          ].map((s, i) => (
            <StaggerItem key={i}>
              <p className="font-display text-3xl font-semibold text-navy">{s.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h3 className="text-lg font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Timeline" title="How we got here." className="mb-14" />
        <ol className="border-l border-border pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06}>
              <li className="relative pb-10">
                <span className="absolute -left-[2.35rem] mt-1 h-3 w-3 rounded-full border-2 border-electric bg-background" />
                <p className="font-display text-sm font-semibold text-electric">{t.year}</p>
                <p className="mt-1 text-base font-semibold text-navy">{t.t}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{t.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <FinalCta />
    </>
  );
}

export default About;
