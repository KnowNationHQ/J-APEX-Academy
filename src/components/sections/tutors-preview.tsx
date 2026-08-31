import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Banner } from "@/components/banner";

const tutors = [
  { name: "Dr. A. Bello", school: "UNILAG", subject: "Mathematics", initials: "AB" },
  { name: "Mrs. C. Okafor", school: "OAU", subject: "English", initials: "CO" },
  { name: "Mr. E. Adeyemi", school: "UNILAG", subject: "Physics", initials: "EA" },
  { name: "Mr. T. Ogunleye", school: "OAU", subject: "Chemistry", initials: "TO" },
];

export function TutorsPreview() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="The people"
          title="Taught by tutors from UNILAG & OAU"
          description="Every J-APEX coach is a subject specialist who has helped students clear the exact exams your child is facing."
          align="center"
        />
        <Banner
          src="/toolder-banner.jpeg"
          alt="A J-APEX tutor studying at home with her toddler"
          ratio="21/9"
          className="mt-10"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tutors.map((t) => (
            <div key={t.name} className="card text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-100 font-display text-lg font-bold text-brand-700">
                {t.initials}
              </div>
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <p className="text-sm text-ink-muted">{t.subject}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                {t.school}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/tutors" className="btn-outline">
            Meet the tutors
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
