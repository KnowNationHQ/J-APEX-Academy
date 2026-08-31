import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="section bg-brand-50">
      <div className="container-x">
        <div className="rounded-3xl border border-brand-100 bg-white px-8 py-12 text-center shadow-soft">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to give your child the J-APEX advantage?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            Enroll for live classes, or bring J-APEX to your school. It takes two minutes
            to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Enroll your child
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/schools" className="btn-outline">
              Partner as a school
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
