import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const groups = [
  {
    title: "Programs",
    links: [
      { href: "/#programs", label: "WAEC" },
      { href: "/#programs", label: "NECO" },
      { href: "/#programs", label: "JAMB" },
      { href: "/#programs", label: "Post-UTME" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/tutors", label: "Tutors" },
      { href: "/schools", label: "For Schools" },
      { href: "/#scholarboard", label: "ScholarBoard" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-950 text-brand-50">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center">
            <span className="relative block h-14 w-24 overflow-hidden md:h-16 md:w-28">
              <Image
                src="/logo.png"
                alt="J-APEX Academy"
                fill
                className="object-contain"
                sizes="240px"
              />
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-brand-100/80">
            Nigeria's online after-school platform helping SS1–SS3 students excel in
            WAEC, NECO, JAMB and Post-UTME at no cost or risk to partner schools.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-brand-100/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@japexacademy.ng
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +234 800 000 0000
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Partnering with schools nationwide
            </li>
          </ul>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-200">
              {g.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-brand-100/80 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-brand-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} J-APEX Academy. All rights reserved.</p>
          <p>Expert tutors from UNILAG & OAU · ScholarBoard results tracking</p>
        </div>
      </div>
    </footer>
  );
}
