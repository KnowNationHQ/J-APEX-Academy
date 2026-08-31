import Link from "next/link";
import { Check, FileCheck2, BookOpen, GraduationCap, Target } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Banner } from "@/components/banner";

const programs = [
  {
    icon: FileCheck2,
    name: "WAEC",
    text: "Full coverage of WASSCE subjects with past question drills and marking scheme feedback.",
    points: [
      "All core and elective subjects",
          "Past question drills",
          "Marking scheme feedback",
    ],
  },
  {
    icon: BookOpen,
    name: "NECO",
    text: "SSCE preparation aligned to the NECO syllabus, with weekly mock exams.",
    points: [
      "Syllabus-aligned lessons",
      "Weekly mock exams",
      "Science and commercial tracks",
    ],
  },
  {
    icon: GraduationCap,
    name: "JAMB",
    text: "UTME readiness: speed, accuracy and the CBT environment students will face.",
    points: [
      "Real CBT practice environment",
      "Speed and accuracy drills",
      "UTME past questions",
    ],
  },
  {
    icon: Target,
    name: "Post-UTME",
    text: "School specific Post-UTME coaching for UNILAG, OAU and other universities.",
    points: [
      "UNILAG and OAU papers",
      "School specific coaching",
      "Campus exam preparation",
    ],
  },
];

export function Programs() {
  return (
    <section id="programs" className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we teach"
          title="One platform for every exam that matters"
          description="Structured tracks for SS1 to SS3 students, each mapped to the official Nigerian syllabus and taught by tutors who know the exams."
          align="center"
        />
        <Banner
          src="/what-we-teach.jpeg"
          alt="An SS3 student's desk with WAEC, NECO, JAMB and Post-UTME study books"
          ratio="21/9"
          className="mt-10"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.name} className="card flex flex-col transition hover:shadow-lift">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-100 text-gold-700">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{p.text}</p>
              <ul className="mt-4 space-y-2 border-t border-brand-100 pt-4">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-primary">
            See the class schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
