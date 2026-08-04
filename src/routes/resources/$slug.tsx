import { useParams } from "react-router-dom";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/primitives";
import { FinalCta } from "@/components/site/final-cta";
import { posts } from "@/lib/site-data";

function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <Section>
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
          <p className="text-sm text-muted-foreground">Resource not found.</p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.read}</span>
        </div>
      </PageHero>

      <Section>
        <article className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-12">
          <div className="prose prose-slate max-w-none text-sm leading-8 text-foreground">
            <p>
              SYNTROXI helps teams move from fragmented AI experiments to operational systems that
              complete real work. This guide covers how businesses can evaluate the right AI
              workforce model, map context across tools, and build governance before scale.
            </p>
            <h2>Why this matters</h2>
            <p>
              Most AI initiatives fail because they are measured by prompts or demos instead of
              business outcomes. The strongest digital workforces are built around outcomes, review
              points, and connected business context.
            </p>
            <h2>Build around ownership</h2>
            <p>
              AI Employees should be assigned goals, permissions, and operating guardrails just like
              human team members. That creates clarity on accountability and keeps every workflow
              measurable.
            </p>
            <h2>Connect the systems that matter</h2>
            <p>
              A reliable AI operating model requires unified access to CRM, ERP, support systems, and
              internal knowledge. The more connected the context graph, the more useful the AI employee
              becomes.
            </p>
            <h2>Measure the work</h2>
            <p>
              Success should be tracked through throughput, resolution rate, escalation quality, and
              cost per outcome. These metrics demonstrate whether the AI workforce is creating real
              leverage, not just generating content.
            </p>
          </div>
        </article>
      </Section>
      <FinalCta />
    </>
  );
}

export default ResourceDetail;
