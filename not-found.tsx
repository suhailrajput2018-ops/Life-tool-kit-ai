import Link from "next/link";
import { ArrowLeft, LayoutGrid } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <span className="text-4xl font-extrabold text-emerald-600">404</span>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
        Tool or Page Not Found
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
        The requested URL could not be located. Browse all 40 active tools below.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href="/"
          className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
        >
          Return Home
        </Link>
        <Link
          href="/tools"
          className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold"
        >
          Browse All Tools
        </Link>
      </div>
    </div>
  );
}
