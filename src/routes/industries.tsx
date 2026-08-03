import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/primitives";
import { IndustryCards } from "@/components/site/industry-cards";
import { FinalCta } from "@/components/site/final-cta";

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for operations that cannot afford to be wrong."
        description="The same platform, configured to the compliance, volume and language of your sector."
      />
      <Section>
        <IndustryCards />
      </Section>
      <FinalCta />
    </>
  );
}

export default Industries;
