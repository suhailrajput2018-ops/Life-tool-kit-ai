"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/toolsData";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = ALL_TOOLS.filter((t) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      t.name.toLowerCase().includes(q) ||
      t.shortDescription.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      t.categoryName.toLowerCase().includes(q)
    );
  }).slice(0, 8);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search all 40 tools (e.g., BMI, QR Code, Currency, PDF Merge)..."
            className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-base"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-slate-400 hover:text-slate-600 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/50">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm">No tools found matching &quot;{query}&quot;</p>
              <p className="text-xs text-slate-400 mt-1">Try keywords like PDF, loan, password, image, or word counter.</p>
            </div>
          ) : (
            filtered.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                onClick={onClose}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/70 dark:hover:bg-emerald-950/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {tool.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {tool.categoryName}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {tool.shortDescription}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            40+ Daily Utilities Available
          </span>
          <span className="text-[11px] text-slate-400">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
