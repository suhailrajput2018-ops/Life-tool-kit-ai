"use client";

import { useState } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/toolsData";
import { Wrench, Mail, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMsg(data.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMsg(data.error || "Subscription failed.");
      }
    } catch {
      setStatus("error");
      setMsg("Subscription failed.");
    }
  };

  const topTools = ALL_TOOLS.slice(0, 10);

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition-colors">
      {/* Top Value Banner */}
      <div className="border-b border-slate-100 dark:border-slate-900 bg-slate-50/70 dark:bg-slate-900/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                100% Client-Side Privacy & High Precision
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Calculations and file transformations run securely on your device. Zero sensitive file uploads.
              </p>
            </div>
          </div>

          {/* Newsletter Box */}
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for utility tips..."
                className="w-full sm:w-72 pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm disabled:opacity-50"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
        {status === "success" && (
          <p className="text-xs text-emerald-600 dark:text-emerald-400 text-center mt-2 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> {msg}
          </p>
        )}
      </div>

      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs">
        {/* Col 1: Brand Info */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              <Wrench className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base text-slate-900 dark:text-white">
              Life Toolkit <span className="text-orange-500">AI</span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
            Life Toolkit AI provides 40+ professional, ad-supported, 100% free daily utilities, calculators, and developer converters engineered for high accuracy, speed, and privacy.
          </p>
          <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400">
            <span>Built with Next.js, TypeScript & Tailwind</span>
          </div>
        </div>

        {/* Col 2: Popular Tools */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">
            Popular Tools
          </h4>
          <ul className="space-y-2">
            {topTools.slice(0, 5).map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: More Tools */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">
            File & Calc Tools
          </h4>
          <ul className="space-y-2">
            {topTools.slice(5, 10).map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Trust & Policies */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-3">
            Legal & Trust
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                Contact & Feedback
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Compliance Strip */}
      <div className="border-t border-slate-100 dark:border-slate-900 py-6 px-4 sm:px-6 lg:px-8 text-center text-[11px] text-slate-400 dark:text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Life Toolkit AI. All rights reserved. Calculations are provided for educational and utility purposes.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-orange-500 fill-orange-500" />
            <span>for users worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
