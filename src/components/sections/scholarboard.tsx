import { LineChart, Bell, CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Banner } from "@/components/banner";

const features = [
  {
    icon: LineChart,
    title: "Live progress tracking",
    text: "Attendance, classwork and mock scores updated after every session.",
  },
  {
    icon: Bell,
    title: "Parent & school alerts",
    text: "Automatic updates when a student improves, or needs attention.",
  },
  {
    icon: CheckCircle2,
    title: "Termly report cards",
    text: "Clear, readable summaries partner schools can share with staff and parents.",
  },
  {
    icon: ShieldCheck,
    title: "Private & safe",
    text: "Only the student's parent and partner school see their ScholarBoard.",
  },
];

export function ScholarBoard() {
  return (
    <section id="scholarboard" className="section bg-brand-950 text-brand-50">
      <div className="container-x">
        <Banner
          src="/scholarboard-banner.jpeg"
          alt="An SS3 student showing their parent exam progress on the J-APEX ScholarBoard tablet"
          ratio="21/9"
          className="mb-12"
        />
      </div>
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow bg-brand-500/20 text-brand-100">
            ScholarBoard
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            A results system parents and schools actually trust
          </h2>
          <p className="mt-4 text-brand-100/80">
            ScholarBoard turns classroom activity into insight. Parents watch their
            child improve in real time; partner schools get the evidence that after school
            prep is working, with zero admin on their side.
          </p>
          <ul className="mt-8 grid gap-4">
            {features.map((f) => (
              <li key={f.title} className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/20 text-brand-200">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="text-sm text-brand-100/70">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card bg-white text-ink">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold">ScholarBoard · SS3</h3>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Term 2
            </span>
          </div>
          <div className="mt-6 space-y-4">
            {[
              { subject: "Mathematics", score: 82, trend: "+9" },
              { subject: "English", score: 76, trend: "+4" },
              { subject: "Physics", score: 88, trend: "+12" },
              { subject: "Chemistry", score: 71, trend: "+2" },
            ].map((r) => (
              <div key={r.subject}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{r.subject}</span>
                  <span className="text-brand-700">{r.score}% · {r.trend}</span>
                </div>
                <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-brand-50">
                  <div
                    className="h-full rounded-full bg-brand-500"
                    style={{ width: `${r.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-gold-50 px-4 py-3 text-sm text-gold-700">
            Attendance: 96% · 3 mock exams completed this term
          </p>
        </div>
      </div>
    </section>
  );
}
