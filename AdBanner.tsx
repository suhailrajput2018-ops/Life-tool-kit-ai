"use client";

import React from "react";

interface AdBannerProps {
  slotId?: string;
  format?: "leaderboard" | "rectangle" | "in-content" | "sidebar";
  className?: string;
}

export function AdBanner({ slotId = "default-slot", format = "leaderboard", className = "" }: AdBannerProps) {
  const getDimensions = () => {
    switch (format) {
      case "rectangle":
        return "min-h-[250px] max-w-[336px]";
      case "sidebar":
        return "min-h-[600px] max-w-[300px]";
      case "in-content":
        return "min-h-[120px] max-w-4xl";
      case "leaderboard":
      default:
        return "min-h-[90px] max-w-5xl";
    }
  };

  return (
    <aside
      aria-label="Advertisement"
      className={`w-full my-6 flex flex-col items-center justify-center ${className}`}
    >
      <div className="w-full max-w-5xl px-2">
        <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase px-1 mb-1.5">
          <span>Advertisement</span>
          <span className="text-[10px] text-slate-400/70">AdSense Space</span>
        </div>
        <div
          className={`w-full ${getDimensions()} mx-auto rounded-xl border border-dashed border-slate-300/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 ad-slot-container flex flex-col items-center justify-center p-4 text-center transition-all`}
        >
          {/* Real Google AdSense Tag placeholder if publisher ID is configured */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-0000000000000000"
            data-ad-slot={slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" />
            <span className="font-medium">Life Toolkit AI • Verified Sponsor & Utilities</span>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 max-w-sm">
            Ad-supported to keep all 40+ calculations 100% free forever.
          </p>
        </div>
      </div>
    </aside>
  );
}
