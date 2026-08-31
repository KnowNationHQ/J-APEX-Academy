import Link from "next/link";
import { ArrowRight, School, Handshake } from "lucide-react";
import { Banner } from "@/components/banner";

export function SchoolsCta() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl bg-brand-600 px-8 py-12 text-white sm:px-12">
          <Banner
            src="/principal-tutor-handshake.jpeg"
            alt="A school principal and a J-APEX tutor shaking hands"
            ratio="21/9"
            className="mb-10 ring-1 ring-white/20"
          />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Handshake className="h-4 w-4" /> For partner schools
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Give your students exam prep — at no cost or risk to your school
              </h2>
              <p className="mt-4 text-brand-50/90">
                J-APEX runs structured after-school classes for your SS1–SS3 students,
                outside school hours. We handle tutoring, scheduling and reporting through
                ScholarBoard. You get better results and happier parents.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <School className="mt-0.5 h-5 w-5" />
                <p className="text-sm text-brand-50/90">
                  No fees, no staffing, no infrastructure from your side.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <School className="mt-0.5 h-5 w-5" />
                <p className="text-sm text-brand-50/90">
                  Termly ScholarBoard reports straight to your school leadership.
                </p>
              </div>
              <Link
                href="/schools"
                className="btn-gold mt-2 w-full sm:w-auto"
              >
                Become a partner school
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
