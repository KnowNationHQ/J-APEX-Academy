import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SocialFloat } from "@/components/social-float";

export const metadata: Metadata = {
  title: {
    default: "J-APEX Academy — Nigeria's Online After-School Exam Prep Platform",
    template: "%s | J-APEX Academy",
  },
  description:
    "J-APEX Academy helps SS1–SS3 students excel in WAEC, NECO, JAMB & Post-UTME with live classes, expert tutors from UNILAG & OAU, and the ScholarBoard results system for parents and partner schools.",
  keywords: [
    "WAEC",
    "NECO",
    "JAMB",
    "Post-UTME",
    "Nigeria",
    "after-school",
    "SS1",
    "SS2",
    "SS3",
    "exam prep",
    "ScholarBoard",
  ],
  openGraph: {
    title: "J-APEX Academy — Nigeria's Online After-School Exam Prep Platform",
    description:
      "Structured live classes, expert tutors, and a results-tracking system that keeps parents and partner schools informed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#14793e" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#062315" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <SocialFloat />
      </body>
    </html>
  );
}
