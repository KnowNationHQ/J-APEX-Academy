import { Reveal } from "@/components/reveal";
import { Hero } from "@/components/sections/hero";
import { Programs } from "@/components/sections/programs";
import { ScholarBoard } from "@/components/sections/scholarboard";
import { TutorsPreview } from "@/components/sections/tutors-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { SchoolsCta } from "@/components/sections/schools-cta";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <Programs />
      </Reveal>
      <Reveal>
        <ScholarBoard />
      </Reveal>
      <Reveal>
        <TutorsPreview />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <SchoolsCta />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
    </>
  );
}
