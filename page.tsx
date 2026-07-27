import Link from "next/link";
import { ALL_TOOLS, CATEGORIES_META } from "@/data/toolsData";
import { BLOG_POSTS } from "@/data/blogData";
import { AdBanner } from "@/components/layout/AdBanner";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Search,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function HomePage() {
  const featuredSlugs = [
    "currency-converter",
    "bmi-calculator",
    "qr-code-generator",
    "emi-loan-calculator",
    "pdf-merge",
    "password-generator",
    "image-compressor",
    "age-calculator",
  ];

  const featuredTools = ALL_TOOLS.filter((t) => featuredSlugs.includes(t.slug));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are all tools on Life Toolkit AI 100% free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every single calculator, PDF utility, image optimizer, and developer converter on Life Toolkit AI is completely free forever with no account required.",
        },
      },
      {
        "@type": "Question",
        name: "Are my uploaded files or personal calculations stored on your servers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No! All image compressions, PDF merges, password generations, and math calculations run entirely inside your browser client memory. Your files are never uploaded to any remote server.",
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200 dark:border-slate-800/80 bg-gradient-to-b from-white via-emerald-50/20 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300/60 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>40+ Free Daily Utilities • Zero Registration</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Smart Daily Tools for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-orange-500">
              Finance, Math & Code
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Instant calculators, live currency rates, client-side PDF processors, image optimizers, and cybersecurity generators. High precision, ad-supported, and 100% free.
          </p>

          {/* Quick Category Action Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {Object.entries(CATEGORIES_META).map(([key, cat]) => (
              <Link
                key={key}
                href={`/categories/${key}`}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 transition shadow-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Leaderboard Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner format="leaderboard" slotId="home-leaderboard" />
      </div>

      {/* Featured Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Most Popular
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Essential Daily Utilities
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Explore All 40 Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    {tool.categoryName}
                  </span>
                  {tool.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {tool.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span>Launch Tool</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* In-Content Native Ad Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner format="in-content" slotId="home-in-content" />
      </div>

      {/* Complete Categories Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
            Categorized Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Explore 40 Tools By Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(CATEGORIES_META).map(([key, cat]) => {
            const count = ALL_TOOLS.filter((t) => t.category === key).length;
            return (
              <Link
                key={key}
                href={`/categories/${key}`}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-orange-400 dark:hover:border-orange-500 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {count} Tools
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Educational Blog Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Original Guides & Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Learn the Science Behind the Tools
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-600 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>By {post.author}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust & Quality Guidelines Strip */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 my-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">100% Client-Side Privacy</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Your photos, passwords, and PDF documents process directly in your browser. No sensitive data is transmitted or retained.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Instant Math Engine</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Calculations execute in real-time with sub-millisecond responsiveness and verified standard formulas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">AdSense Quality Compliant</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Zero deceptive buttons, no spam, and no paywalls. Clean utility experiences compliant with Google publisher standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
