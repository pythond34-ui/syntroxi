import { PageHero } from "@/components/site/page-hero";
import { Section, SectionHeading } from "@/components/site/primitives";
import { WorkforceBuilder } from "@/components/site/workforce-builder";
import { TeamBuilderWizard } from "@/components/site/team-builder-wizard";
import { RoiCalculator } from "@/components/site/roi-calculator";
import { FinalCta } from "@/components/site/final-cta";

function BuilderPage() {
  return (
    <>
      <PageHero
        eyebrow="Workforce builder"
        title="Build the team before you hire it."
        description="Pick the roles, see coverage and cost, then take the modelled plan straight to checkout."
      />

      <Section>
        <SectionHeading
          eyebrow="Build your AI team"
          title="Five steps to a staffed function."
          description="Select your company size, choose departments, pick AI Employees and connect systems. We calculate everything instantly."
          align="center"
          className="mb-14"
        />
        <TeamBuilderWizard />
        <div className="mt-20">
          <WorkforceBuilder />
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="ROI calculator"
          title="What this replaces, in money."
          align="center"
          className="mb-14"
        />
        <RoiCalculator />
      </Section>

      <FinalCta />
    </>
  );
}

export default BuilderPage;
