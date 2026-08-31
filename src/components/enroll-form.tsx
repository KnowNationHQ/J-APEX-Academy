"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const classes = {
  label: "block text-sm font-medium text-ink-soft",
  field:
    "mt-1.5 w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100",
};

export function EnrollForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-600" />
        <h3 className="mt-3 font-display text-lg font-semibold">
          Thank you — we've received your details
        </h3>
        <p className="mt-2 text-sm text-ink-muted">
          A J-APEX advisor will reach out within 24 hours to confirm the next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={classes.label}>
            Parent / guardian name
          </label>
          <input id="name" name="name" required className={classes.field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className={classes.label}>
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" required className={classes.field} placeholder="080..." />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={classes.label}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={classes.field} placeholder="you@example.com" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="student" className={classes.label}>
            Student name
          </label>
          <input id="student" name="student" required className={classes.field} placeholder="Student name" />
        </div>
        <div>
          <label htmlFor="class" className={classes.label}>
            Class
          </label>
          <select id="class" name="class" required className={classes.field} defaultValue="SS1">
            <option value="SS1">SS1</option>
            <option value="SS2">SS2</option>
            <option value="SS3">SS3</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="exam" className={classes.label}>
          Exam focus
        </label>
        <select id="exam" name="exam" required className={classes.field} defaultValue="WAEC">
          <option value="WAEC">WAEC</option>
          <option value="NECO">NECO</option>
          <option value="JAMB">JAMB</option>
          <option value="Post-UTME">Post-UTME</option>
        </select>
      </div>
      <div>
        <label htmlFor="msg" className={classes.label}>
          Message (optional)
        </label>
        <textarea id="msg" name="msg" rows={3} className={classes.field} placeholder="Anything we should know?" />
      </div>
      <button type="submit" className="btn-primary w-full">
        Request enrollment
      </button>
      <p className="text-center text-xs text-ink-muted">
        For schools: mention "partner school" in your message and we'll send the partnership pack.
      </p>
    </form>
  );
}
