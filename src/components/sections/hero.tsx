import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/sections/hero-slider";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <HeroSlider
          className="absolute inset-0 h-full w-full"
          images={[
            {
              src: "/student-banner.jpeg",
              alt: "An SS3 student studying with the J-APEX Academy app on her smartphone",
            },
            {
              src: "/hero-second.jpeg",
              alt: "J-APEX students celebrating their exam results",
            },
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/65 to-brand-900/25" />

        <div className="container-x relative flex h-full items-end pb-16 sm:pb-20">
          <div className="max-w-2xl text-white drop-shadow">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white/90">
              Nigeria · SS1 – SS3
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-white drop-shadow sm:text-5xl lg:text-6xl">
              Excel in WAEC, NECO, JAMB & Post-UTME after school.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              J-APEX Academy is Nigeria's online after-school platform. Live classes with
              expert tutors from UNILAG and OAU, plus a ScholarBoard that keeps parents and
              partner schools informed every step of the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Enroll your child
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/schools"
                className="btn-outline border-white/60 bg-transparent text-white hover:bg-white/10"
              >
                Partner as a school
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/25 pt-8">
              <div>
                <dt className="font-display text-2xl font-bold text-white">4</dt>
                <dd className="text-sm text-white/75">Exams covered</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-bold text-white">2</dt>
                <dd className="text-sm text-white/75">Top universities</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-bold text-white">100%</dt>
                <dd className="text-sm text-white/75">Free to schools</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
