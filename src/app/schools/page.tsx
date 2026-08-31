import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, School, LineChart, CalendarClock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Banner } from "@/components/banner";

const benefits = [
  "No cost, no risk to your school, we run the program.",
  "Structured after school classes that don't clash with your timetable.",
  "Termly ScholarBoard reports delivered to your school leadership.",
  "Better exam outcomes and stronger parent confidence.",
  "Tutors from UNILAG & OAU, vetted and trained by J-APEX.",
];

const steps = [
  { icon: School, title: "Partner with us", text: "A short agreement connects your SS1 to SS3 students to J-APEX." },
  { icon: CalendarClock, title: "We run the classes", text: "Live sessions after school hours, recorded for replay." },
  { icon: LineChart, title: "You see the results", text: "ScholarBoard keeps your school and parents informed every term." },
];

export const metadata = {
  title: "For Schools",
  description:
    "Partner with J-APEX Academy to give your SS1 to SS3 students focused WAEC, NECO, JAMB and Post-UTME prep, at no cost or risk to your school.",
};

export default function SchoolsPage() {
  return (
    <>
      <Reveal>
        <section className="relative overflow-hidden bg-brand-950 text-brand-50">
          <Image
            src="/students-entering.jpeg"
            alt="Students entering J-APEX Academy"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-950/70" />
          <div className="container-x relative py-20">
            <div className="max-w-2xl">
              <span className="eyebrow bg-brand-500/20 text-brand-100">For schools</span>
              <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                Bring exam prep to your students, at no cost to your school
              </h1>
              <p className="mt-4 text-brand-100/80">
                J-APEX Academy partners with secondary schools nationwide to deliver focused,
                after school exam preparation. Your students get expert tutoring; your school
                gets the credit and the proof.
              </p>
              <Link href="/contact" className="btn-gold mt-8">
                Become a partner school
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section bg-white">
          <div className="container-x">
            <Banner
              src="/students-studying.jpeg"
              alt="Students studying in a J-APEX Academy classroom"
              ratio="21/9"
              className="mb-12"
            />
          </div>
          <div className="container-x grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Why partner" title="What your school gets" />
              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-ink-soft">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="How it works" title="Three steps, zero burden" />
              <div className="mt-8 space-y-5">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex gap-4 rounded-2xl border border-brand-100 p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-brand-600">STEP {i + 1}</div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
