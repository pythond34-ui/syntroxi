import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading, Reveal, Stagger, StaggerItem } from "@/components/site/primitives";
import { SxButton } from "@/components/site/sx-button";

const principles = [
  { t: "AI Employees, not AI Tools", d: "Software waits for instructions. Employees own outcomes." },
  { t: "One Brain. Many Specialists.", d: "Sales, HR, Finance and Support share the same business memory instead of working in isolation." },
  { t: "Automation with Accountability", d: "Every decision is logged, traceable and explainable for enterprise teams." },
  { t: "Built Around Outcomes", d: "Success is measured by completed work, not prompts or tokens." },
];

const timeline = [
  { year: "2026", t: "Syntroxi Founded", d: "Started with one belief: software should execute work—not assign it." },
  { year: "Phase 1", t: "AI Sales Workforce", d: "Built autonomous Sales Employees capable of finding leads, reaching prospects, qualifying opportunities and booking meetings." },
  { year: "Phase 2", t: "Business Memory", d: "Created a shared CRM memory allowing every AI Employee to understand customers, conversations and company knowledge." },
  { year: "Phase 3", t: "Workforce Orchestrator", d: "Developed an orchestration engine that coordinates specialized AI Employees into one intelligent workforce." },
  { year: "Next", t: "AI Business Operating System", d: "Expanding beyond sales into HR, Finance, Support and Operations." },
];

const values = [
  { t: "Execution over Conversation", d: "AI should finish work—not just generate text." },
  { t: "Shared Context", d: "Every employee should learn from every interaction." },
  { t: "Human Oversight", d: "Humans define objectives. AI executes." },
  { t: "Enterprise First", d: "Security, reliability and governance are built into every workflow." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We are building the operating system for AI employees."
        description="For decades, businesses bought software that organized work. We believe software should perform it. Syntroxi transforms business functions into intelligent AI Employees that collaborate, remember context and continuously improve across every customer interaction."
      />

      <Section>
        <Stagger className="grid gap-6 border-b border-border pb-16 md:grid-cols-4">
          {[
            { v: "5+", l: "AI Employees" },
            { v: "1", l: "Business OS" },
            { v: "100%", l: "Context Aware" },
            { v: "24/7", l: "Execution" },
          ].map((s, i) => (
            <StaggerItem key={i}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <p className="font-display text-3xl font-semibold text-navy">{s.v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
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

      <Section>
        <SectionHeading eyebrow="How Syntroxi Works" title="From intent to execution." className="mb-12" />
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-10">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-center md:gap-6">
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold">Business Goal</div>
            <div className="text-2xl text-muted-foreground">↓</div>
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold">Orchestrator</div>
            <div className="text-2xl text-muted-foreground">↓</div>
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold">Sales • Finance • Support • HR • Operations</div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-center md:flex-row md:justify-center md:gap-6">
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold">Business Memory</div>
            <div className="text-2xl text-muted-foreground">↓</div>
            <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold">CRM • WhatsApp • Email • ERP • Slack • Calendar</div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Every AI Employee specializes in one department while the Orchestrator coordinates work across your organization. Shared business memory ensures every decision is informed by the same context.
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Vision" title="Every business will have a digital workforce." className="mb-10" />
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          Just as every company hires human employees today, tomorrow every company will deploy AI Employees alongside their teams. Syntroxi is building the infrastructure that makes that future possible.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="What guides how we build." className="mb-12" />
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.t} delay={i * 0.06}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h3 className="text-lg font-semibold">{value.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-background p-10 text-center shadow-soft md:p-14">
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            The future workforce isn't human or AI.
          </h2>
          <p className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
            It's both, working together.
          </p>
          <div className="mt-8 flex justify-center">
            <SxButton to="/contact">Book a Demo</SxButton>
          </div>
        </div>
      </Section>
    </>
  );
}

export default About;
