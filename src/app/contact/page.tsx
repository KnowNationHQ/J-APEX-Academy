import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { EnrollForm } from "@/components/enroll-form";
import { SectionHeading } from "@/components/section-heading";
import { Banner } from "@/components/banner";

export const metadata = {
  title: "Contact & Enroll",
  description:
    "Enroll your child in J-APEX Academy, or partner your school. Live exam prep for WAEC, NECO, JAMB and Post-UTME.",
};

export default function ContactPage() {
  return (
    <Reveal>
      <section className="section bg-brand-50">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get started"
              title="Enroll your child or partner your school"
              description="Tell us a little about the student and we'll take it from there. It takes two minutes and there's no obligation."
            />
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
                  <Mail className="h-4 w-4" />
                </span>
                hello@japexacademy.ng
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
                  <Phone className="h-4 w-4" />
                </span>
                +234 800 000 0000
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                Partnering with secondary schools nationwide
              </li>
            </ul>
          </div>
          <div>
            <Banner
              src="/contact-banner.jpeg"
              alt="A parent and two children enrolling together on a laptop"
              ratio="21/9"
              className="mb-8"
            />
            <EnrollForm />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
