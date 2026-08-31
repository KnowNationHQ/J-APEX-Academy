"use client";

import { useEffect, useState } from "react";
import { Settings, Facebook, Instagram, MessageCircle, ArrowUp } from "lucide-react";

// ponytail: replace these placeholder handles/numbers with the real ones
const SOCIAL = {
  whatsapp: "https://wa.me/2348000000000",
  facebook: "https://facebook.com/japexacademy",
  instagram: "https://instagram.com/japexacademy",
};

export function SocialFloat() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: SOCIAL.whatsapp, label: "Chat on WhatsApp", Icon: MessageCircle, bg: "#25D366" },
    { href: SOCIAL.facebook, label: "J-APEX Academy on Facebook", Icon: Facebook, bg: "#1877F2" },
    { href: SOCIAL.instagram, label: "J-APEX Academy on Instagram", Icon: Instagram, bg: "#E4405F" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={it.label}
            title={it.label}
            onClick={() => setOpen(false)}
            className="grid h-11 w-11 place-items-center rounded-full text-white shadow-lift transition hover:scale-105"
            style={{ backgroundColor: it.bg }}
          >
            <it.Icon className="h-5 w-5" />
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open social links"
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-lift transition hover:scale-105"
      >
        <Settings className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
      </button>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lift transition hover:scale-105 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
