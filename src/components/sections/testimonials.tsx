import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    quote:
      "My daughter's WAEC Maths jumped two grades in one term. The ScholarBoard updates meant I finally knew how she was really doing.",
    name: "Parent, Lagos",
    role: "SS3 parent",
  },
  {
    quote:
      "Our students get focused exam prep after hours at no cost to the school. Attendance and results speak for themselves.",
    name: "Principal",
    role: "Partner school, Abuja",
  },
  {
    quote:
      "The JAMB CBT practice felt exactly like the real exam. I walked in calm and came out with the score I needed.",
    name: "Tola",
    role: "JAMB candidate",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-brand-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Proof"
          title="Parents and schools see the difference"
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="card">
              {i === 0 && (
                <Image
                  src="/parent-avatar.jpeg"
                  alt={t.name}
                  width={48}
                  height={48}
                  className="mb-3 h-12 w-12 rounded-full object-cover"
                />
              )}
              <Quote className="h-6 w-6 text-brand-300" />
              <blockquote className="mt-3 text-ink-soft">"{t.quote}"</blockquote>
              <figcaption className="mt-5">
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="text-sm text-ink-muted">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
