import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Cpu, Heart, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Life Toolkit AI - Mission & Technical Standards",
  description: "Learn about the engineering principles, mathematical accuracy benchmarks, and client-side privacy behind Life Toolkit AI.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Our Architecture & Mission
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
          About Life Toolkit AI
        </h1>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Why We Built Life Toolkit AI
          </h2>
          <p>
            The internet is flooded with slow, ad-cluttered websites full of fake download buttons, paywalls, and intrusive trackers. Life Toolkit AI was created to provide a fast, elegant, and 100% free collection of 40+ daily utilities that users across the globe can trust.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
              Zero Server Uploads
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Your confidential PDFs, images, and passwords never leave your browser. All processing is executed locally in client memory.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <Cpu className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
              High Mathematical Precision
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Formulas are verified against ISO, NIST, and central bank foreign exchange standards.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
