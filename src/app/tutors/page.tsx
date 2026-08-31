import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Banner } from "@/components/banner";

const tutors = [
  { name: "Dr. A. Bello", school: "University of Lagos", subject: "Mathematics", initials: "AB", bio: "PhD, 12 years coaching WAEC & JAMB candidates." },
  { name: "Mrs. C. Okafor", school: "Obafemi Awolowo University", subject: "English Language", initials: "CO", bio: "Exam marker and specialist in comprehension & essay technique." },
  { name: "Mr. E. Adeyemi", school: "University of Lagos", subject: "Physics", initials: "EA", bio: "Makes formulas stick with live problem-solving sessions." },
  { name: "Mr. T. Ogunleye", school: "Obafemi Awolowo University", subject: "Chemistry", initials: "TO", bio: "Breaks down practical & theory for NECO and WAEC." },
  { name: "Ms. F. Balogun", school: "University of Lagos", subject: "Biology", initials: "FB", bio: "Builds exam confidence with weekly mock drills." },
  { name: "Mr. K. Nwachukwu", school: "Obafemi Awolowo University", subject: "Economics", initials: "KN", bio: "Clears the hardest JAMB theory questions, step by step." },
];

export const metadata = {
  title: "Tutors",
  description:
    "Meet the J-APEX Academy tutors — subject experts from UNILAG and OAU who coach SS1–SS3 students for WAEC, NECO, JAMB and Post-UTME.",
};

export default function TutorsPage() {
  return (
    <>
      <Reveal>
        <section className="bg-brand-50">
          <div className="container-x py-16">
            <SectionHeading
              eyebrow="Our tutors"
              title="Expert coaches from Nigeria's top universities"
              description="Every tutor is a vetted subject specialist with a track record of helping students clear WAEC, NECO, JAMB and Post-UTME."
            />
            <Banner
              src="/tutor-whiteboard.jpeg"
              alt="A J-APEX tutor explaining a maths formula at a whiteboard"
              ratio="21/9"
              className="mt-10"
            />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section bg-white">
          <div className="container-x">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tutors.map((t) => (
                <div key={t.name} className="card flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 font-display text-xl font-bold text-white shadow-sm">
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-tight text-ink">{t.name}</h3>
                      <span className="mt-1 inline-block rounded-full bg-gold-100 px-2.5 py-0.5 text-xs font-semibold text-gold-700">
                        {t.subject}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{t.bio}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-600">
                    <GraduationCap className="h-4 w-4" /> {t.school}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                { icon: Briefcase, label: "Vetted specialists", text: "Screened on subject mastery and teaching ability." },
                { icon: Star, label: "Exam insiders", text: "Familiar with current syllabi and marking schemes." },
                { icon: GraduationCap, label: "University-backed", text: "Drawn from UNILAG and OAU cohorts." },
              ].map((f) => (
                <div key={f.label} className="rounded-2xl border border-brand-100 bg-brand-50/40 p-5">
                  <f.icon className="h-5 w-5 text-brand-600" />
                  <h3 className="mt-3 font-semibold">{f.label}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact" className="btn-primary">
                Request a tutor for your child
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
