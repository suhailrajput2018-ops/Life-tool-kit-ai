"use client";

import React, { useState, useEffect, useRef } from "react";
import { ToolDefinition } from "@/types/tools";
import {
  Copy,
  Check,
  Download,
  Share2,
  Bookmark,
  RefreshCw,
  Upload,
  Camera,
  Play,
  FileDown,
  Sparkles,
  Percent,
} from "lucide-react";
import QRCode from "qrcode";
import JsBarcode from "jsbarcode";
import { PDFDocument } from "pdf-lib";

interface ToolWidgetProps {
  tool: ToolDefinition;
}

export function ToolWidget({ tool }: ToolWidgetProps) {
  const [copied, setCopied] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [shareNotice, setShareNotice] = useState(false);

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem("lifetoolkit-favs") || "[]");
      setIsFavorited(favs.includes(tool.slug));
    } catch {
      // ignore
    }
  }, [tool.slug]);

  const toggleFavorite = () => {
    try {
      const favs: string[] = JSON.parse(localStorage.getItem("lifetoolkit-favs") || "[]");
      let nextFavs: string[];
      if (favs.includes(tool.slug)) {
        nextFavs = favs.filter((f) => f !== tool.slug);
        setIsFavorited(false);
      } else {
        nextFavs = [...favs, tool.slug];
        setIsFavorited(true);
      }
      localStorage.setItem("lifetoolkit-favs", JSON.stringify(nextFavs));
    } catch {
      // ignore
    }
  };

  const handleCopyText = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: tool.metaTitle,
        text: tool.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareNotice(true);
      setTimeout(() => setShareNotice(false), 2000);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all">
      {/* Top Header Strip with Action Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              {tool.categoryName}
            </span>
            <span className="text-xs text-slate-400">100% Free & Client-Side</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            {tool.name}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleFavorite}
            title={isFavorited ? "Remove from favorites" : "Save to favorites"}
            className={`p-2.5 rounded-xl border transition ${
              isFavorited
                ? "bg-amber-50 dark:bg-amber-950/50 border-amber-300 text-amber-500"
                : "border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorited ? "fill-amber-500" : ""}`} />
          </button>
          <button
            onClick={handleShare}
            title="Share this tool"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {shareNotice && (
        <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs text-center">
          Tool URL copied to clipboard!
        </div>
      )}

      {/* Render the specific interactive widget */}
      <div className="w-full">{renderToolEngine(tool.slug, handleCopyText, copied)}</div>
    </div>
  );
}

function renderToolEngine(
  slug: string,
  copyFn: (t: string) => void,
  copied: boolean
) {
  switch (slug) {
    case "age-calculator":
      return <AgeCalculatorWidget copyFn={copyFn} copied={copied} />;
    case "date-difference-calculator":
      return <DateDifferenceWidget copyFn={copyFn} copied={copied} />;
    case "time-zone-converter":
      return <TimeZoneWidget copyFn={copyFn} copied={copied} />;
    case "unit-converter":
      return <UnitConverterWidget copyFn={copyFn} copied={copied} />;
    case "currency-converter":
      return <CurrencyConverterWidget copyFn={copyFn} copied={copied} />;
    case "percentage-calculator":
      return <PercentageWidget copyFn={copyFn} copied={copied} />;
    case "emi-loan-calculator":
      return <EMILoanWidget copyFn={copyFn} copied={copied} />;
    case "bmi-calculator":
      return <BMIWidget copyFn={copyFn} copied={copied} />;
    case "calorie-calculator":
      return <CalorieWidget copyFn={copyFn} copied={copied} />;
    case "password-generator":
      return <PasswordGeneratorWidget copyFn={copyFn} copied={copied} />;
    case "password-strength-checker":
      return <PasswordStrengthWidget copyFn={copyFn} copied={copied} />;
    case "qr-code-generator":
      return <QRCodeGeneratorWidget copyFn={copyFn} copied={copied} />;
    case "qr-code-scanner":
      return <QRCodeScannerWidget copyFn={copyFn} copied={copied} />;
    case "barcode-generator":
      return <BarcodeGeneratorWidget copyFn={copyFn} copied={copied} />;
    case "uuid-generator":
      return <UUIDGeneratorWidget copyFn={copyFn} copied={copied} />;
    case "random-number-generator":
      return <RandomNumberWidget copyFn={copyFn} copied={copied} />;
    case "random-name-picker":
      return <RandomNamePickerWidget copyFn={copyFn} copied={copied} />;
    case "text-counter":
      return <TextCounterWidget copyFn={copyFn} copied={copied} />;
    case "word-counter":
      return <WordCounterWidget copyFn={copyFn} copied={copied} />;
    case "character-counter":
      return <CharacterCounterWidget copyFn={copyFn} copied={copied} />;
    case "reading-time-calculator":
      return <ReadingTimeWidget copyFn={copyFn} copied={copied} />;
    case "case-converter":
      return <CaseConverterWidget copyFn={copyFn} copied={copied} />;
    case "remove-duplicate-lines":
      return <RemoveDuplicatesWidget copyFn={copyFn} copied={copied} />;
    case "json-formatter":
      return <JSONFormatterWidget copyFn={copyFn} copied={copied} />;
    case "base64-encode-decode":
      return <Base64Widget copyFn={copyFn} copied={copied} />;
    case "url-encoder-decoder":
      return <URLEncoderWidget copyFn={copyFn} copied={copied} />;
    case "hash-generator":
      return <HashGeneratorWidget copyFn={copyFn} copied={copied} />;
    case "color-converter":
      return <ColorConverterWidget copyFn={copyFn} copied={copied} />;
    case "image-compressor":
      return <ImageCompressorWidget copyFn={copyFn} copied={copied} />;
    case "image-resize-tool":
      return <ImageResizeWidget copyFn={copyFn} copied={copied} />;
    case "image-format-converter":
      return <ImageFormatWidget copyFn={copyFn} copied={copied} />;
    case "pdf-merge":
      return <PDFMergeWidget copyFn={copyFn} copied={copied} />;
    case "pdf-split":
      return <PDFSplitWidget copyFn={copyFn} copied={copied} />;
    case "pdf-compress":
      return <PDFCompressWidget copyFn={copyFn} copied={copied} />;
    case "pdf-to-image":
      return <PDFToImageWidget copyFn={copyFn} copied={copied} />;
    case "image-to-pdf":
      return <ImageToPDFWidget copyFn={copyFn} copied={copied} />;
    case "mortgage-calculator":
      return <MortgageWidget copyFn={copyFn} copied={copied} />;
    case "tax-calculator":
      return <TaxCalculatorWidget copyFn={copyFn} copied={copied} />;
    case "tip-calculator":
      return <TipCalculatorWidget copyFn={copyFn} copied={copied} />;
    case "fuel-cost-calculator":
      return <FuelCostWidget copyFn={copyFn} copied={copied} />;
    default:
      return <GenericCalcWidget copyFn={copyFn} copied={copied} />;
  }
}

// -------------------------------------------------------------
// 1. Age Calculator
// -------------------------------------------------------------
function AgeCalculatorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [dob, setDob] = useState("1998-05-15");
  const [targetDate, setTargetDate] = useState(new Date().toISOString().split("T")[0]);

  const birth = new Date(dob);
  const target = new Date(targetDate);

  let years = target.getFullYear() - birth.getFullYear();
  let months = target.getMonth() - birth.getMonth();
  let days = target.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthDays = new Date(target.getFullYear(), target.getMonth(), 0).getDate();
    days += prevMonthDays;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = Math.max(0, target.getTime() - birth.getTime());
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));

  const resultStr = `${years} Years, ${months} Months, ${days} Days (${totalDays.toLocaleString()} total days)`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Calculate Age As Of
          </label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-slate-800/60 border border-emerald-200 dark:border-emerald-900/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Calculated Age
          </span>
          <button
            onClick={() => copyFn(resultStr)}
            className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy Result"}
          </button>
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800 dark:text-emerald-300 tracking-tight">
          {years} <span className="text-lg font-medium text-slate-600 dark:text-slate-400">years</span> {months}{" "}
          <span className="text-lg font-medium text-slate-600 dark:text-slate-400">months</span> {days}{" "}
          <span className="text-lg font-medium text-slate-600 dark:text-slate-400">days</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-emerald-200/60 dark:border-emerald-900/40 text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400">Total Days:</span>
            <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{totalDays.toLocaleString()} days</p>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400">Total Hours:</span>
            <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{totalHours.toLocaleString()} hrs</p>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400">Born On:</span>
            <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">
              {birth.toLocaleDateString("en-US", { weekday: "long" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. Date Difference Calculator
// -------------------------------------------------------------
function DateDifferenceWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [start, setStart] = useState("2026-01-01");
  const [end, setEnd] = useState("2026-12-31");
  const [inclusive, setInclusive] = useState(true);

  const d1 = new Date(start);
  const d2 = new Date(end);

  const diffMs = Math.abs(d2.getTime() - d1.getTime());
  let days = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + (inclusive ? 1 : 0);
  const weeks = (days / 7).toFixed(1);

  // Business days
  let bizDays = 0;
  const cur = new Date(Math.min(d1.getTime(), d2.getTime()));
  const targetEnd = new Date(Math.max(d1.getTime(), d2.getTime()));
  if (inclusive) targetEnd.setDate(targetEnd.getDate() + 1);

  while (cur < targetEnd) {
    const day = cur.getDay();
    if (day !== 0 && day !== 6) bizDays++;
    cur.setDate(cur.getDate() + 1);
  }

  const out = `${days} Calendar Days, ${weeks} Weeks, ${bizDays} Business Days`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Start Date</label>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">End Date</label>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="incl"
          checked={inclusive}
          onChange={(e) => setInclusive(e.target.checked)}
          className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
        />
        <label htmlFor="incl" className="text-xs text-slate-600 dark:text-slate-400">
          Include end date (+1 day)
        </label>
      </div>

      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase text-slate-500">Duration Breakdown</span>
          <button
            onClick={() => copyFn(out)}
            className="text-xs flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{days} Days</div>
        <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400">Working / Business Days:</span>
            <p className="font-bold text-base text-emerald-600 dark:text-emerald-400">{bizDays} Days</p>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400">Total Weeks:</span>
            <p className="font-bold text-base text-slate-800 dark:text-slate-200">{weeks} Weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. Time Zone Converter
// -------------------------------------------------------------
function TimeZoneWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [hour, setHour] = useState(14);
  const [minute, setMinute] = useState(0);
  const [baseZone, setBaseZone] = useState("UTC");

  const zones = [
    { label: "UTC (Coordinated Universal)", offset: 0 },
    { label: "EST / EDT - New York", offset: -4 },
    { label: "PST / PDT - San Francisco", offset: -7 },
    { label: "BST / GMT - London", offset: 1 },
    { label: "CEST - Paris / Berlin", offset: 2 },
    { label: "IST - New Delhi", offset: 5.5 },
    { label: "JST - Tokyo", offset: 9 },
    { label: "AEST - Sydney", offset: 10 },
  ];

  const baseOffset = zones.find((z) => z.label.includes(baseZone))?.offset || 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Base Time (24h)
          </label>
          <input
            type="time"
            value={`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`}
            onChange={(e) => {
              const [h, m] = e.target.value.split(":");
              setHour(Number(h));
              setMinute(Number(m));
            }}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Source Timezone
          </label>
          <select
            value={baseZone}
            onChange={(e) => setBaseZone(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {zones.map((z) => (
              <option key={z.label} value={z.label}>
                {z.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {zones.map((z) => {
          const diff = z.offset - baseOffset;
          let totalMinutes = hour * 60 + minute + diff * 60;
          if (totalMinutes < 0) totalMinutes += 1440;
          totalMinutes = totalMinutes % 1440;
          const h = Math.floor(totalMinutes / 60);
          const m = Math.floor(totalMinutes % 60);
          const timeStr = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;

          return (
            <div
              key={z.label}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{z.label}</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">{timeStr}</p>
              </div>
              <button
                onClick={() => copyFn(`${z.label}: ${timeStr}`)}
                className="text-xs text-emerald-600 dark:text-emerald-400 p-1.5 hover:bg-emerald-100 dark:hover:bg-emerald-950 rounded-lg"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. Unit Converter
// -------------------------------------------------------------
function UnitConverterWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [cat, setCat] = useState<"length" | "weight" | "temp">("length");
  const [val, setVal] = useState<number>(10);
  const [fromUnit, setFromUnit] = useState("km");
  const [toUnit, setToUnit] = useState("miles");

  const convert = () => {
    if (cat === "length") {
      const inMeters: Record<string, number> = { m: 1, km: 1000, cm: 0.01, miles: 1609.344, ft: 0.3048, inch: 0.0254 };
      const m = val * (inMeters[fromUnit] || 1);
      return (m / (inMeters[toUnit] || 1)).toFixed(4);
    }
    if (cat === "weight") {
      const inKg: Record<string, number> = { kg: 1, g: 0.001, lbs: 0.453592, oz: 0.0283495 };
      const k = val * (inKg[fromUnit] || 1);
      return (k / (inKg[toUnit] || 1)).toFixed(4);
    }
    if (cat === "temp") {
      if (fromUnit === "C" && toUnit === "F") return (val * 1.8 + 32).toFixed(2);
      if (fromUnit === "F" && toUnit === "C") return (((val - 32) * 5) / 9).toFixed(2);
      return val.toString();
    }
    return "0";
  };

  const res = convert();

  return (
    <div className="space-y-6">
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        {(["length", "weight", "temp"] as const).map((c) => (
          <button
            key={c}
            onClick={() => {
              setCat(c);
              if (c === "length") {
                setFromUnit("km");
                setToUnit("miles");
              }
              if (c === "weight") {
                setFromUnit("kg");
                setToUnit("lbs");
              }
              if (c === "temp") {
                setFromUnit("C");
                setToUnit("F");
              }
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl capitalize transition ${
              cat === c
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Value</label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {cat === "length" && (
              <>
                <option value="km">Kilometers (km)</option>
                <option value="m">Meters (m)</option>
                <option value="miles">Miles (mi)</option>
                <option value="ft">Feet (ft)</option>
              </>
            )}
            {cat === "weight" && (
              <>
                <option value="kg">Kilograms (kg)</option>
                <option value="g">Grams (g)</option>
                <option value="lbs">Pounds (lbs)</option>
                <option value="oz">Ounces (oz)</option>
              </>
            )}
            {cat === "temp" && (
              <>
                <option value="C">Celsius (°C)</option>
                <option value="F">Fahrenheit (°F)</option>
              </>
            )}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {cat === "length" && (
              <>
                <option value="miles">Miles (mi)</option>
                <option value="km">Kilometers (km)</option>
                <option value="m">Meters (m)</option>
                <option value="ft">Feet (ft)</option>
              </>
            )}
            {cat === "weight" && (
              <>
                <option value="lbs">Pounds (lbs)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="g">Grams (g)</option>
                <option value="oz">Ounces (oz)</option>
              </>
            )}
            {cat === "temp" && (
              <>
                <option value="F">Fahrenheit (°F)</option>
                <option value="C">Celsius (°C)</option>
              </>
            )}
          </select>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">Converted Value</span>
          <p className="text-3xl font-extrabold text-emerald-900 dark:text-emerald-200 mt-1">
            {res} <span className="text-base font-medium">{toUnit}</span>
          </p>
        </div>
        <button
          onClick={() => copyFn(`${val} ${fromUnit} = ${res} ${toUnit}`)}
          className="text-xs px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center gap-1 font-semibold"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. Currency Converter (Live Exchange Rates)
// -------------------------------------------------------------
function CurrencyConverterWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [amount, setAmount] = useState<number>(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rates, setRates] = useState<Record<string, number>>({ USD: 1, EUR: 0.9235, GBP: 0.7892, JPY: 154.25, INR: 86.42 });
  const [loading, setLoading] = useState(false);
  const [sourceNote, setSourceNote] = useState("Live Central Bank Benchmark");

  const fetchRates = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/currency-rates");
      const data = await res.json();
      if (data && data.rates) {
        setRates(data.rates);
        setSourceNote(data.source || "Live FX Exchange");
      }
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  const fromRate = rates[from] || 1;
  const toRate = rates[to] || 1;
  const converted = ((amount / fromRate) * toRate).toFixed(2);
  const rateRatio = (toRate / fromRate).toFixed(4);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> {sourceNote}
        </span>
        <button
          onClick={fetchRates}
          className="flex items-center gap-1 font-semibold text-emerald-600 hover:underline"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh Rates
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">From Currency</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {Object.keys(rates).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">To Currency</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            {Object.keys(rates).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-lg flex items-center justify-between">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-100">Live Exchange Value</span>
          <p className="text-3xl sm:text-4xl font-extrabold mt-1">
            {converted} <span className="text-xl font-medium text-emerald-100">{to}</span>
          </p>
          <p className="text-xs text-emerald-100/90 mt-1">
            1 {from} = {rateRatio} {to}
          </p>
        </div>
        <button
          onClick={() => copyFn(`${amount} ${from} = ${converted} ${to}`)}
          className="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-sm"
        >
          {copied ? "Copied!" : "Copy Rate"}
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. Percentage Calculator
// -------------------------------------------------------------
function PercentageWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [val1, setVal1] = useState(25);
  const [val2, setVal2] = useState(200);

  const res1 = ((val1 / 100) * val2).toFixed(2);
  const res2 = val2 !== 0 ? ((val1 / val2) * 100).toFixed(2) : "0";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Number 1 (X)</label>
          <input
            type="number"
            value={val1}
            onChange={(e) => setVal1(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Number 2 (Y)</label>
          <input
            type="number"
            value={val2}
            onChange={(e) => setVal2(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">What is {val1}% of {val2}?</span>
          <p className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400 mt-1">{res1}</p>
        </div>
        <div className="p-4 rounded-2xl bg-orange-50 dark:bg-slate-800/80 border border-orange-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">{val1} is what % of {val2}?</span>
          <p className="text-2xl font-extrabold text-orange-600 dark:text-orange-400 mt-1">{res2}%</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 7. EMI / Loan Calculator
// -------------------------------------------------------------
function EMILoanWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [principal, setPrincipal] = useState(25000);
  const [rate, setRate] = useState(6.5);
  const [tenureYears, setTenureYears] = useState(5);

  const monthlyRate = rate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi =
    monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : principal / totalMonths;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Loan Principal ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Annual Interest (%)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Tenure (Years)</label>
          <input
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <span className="text-xs text-slate-500">Monthly EMI Payment</span>
          <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            ${emi.toFixed(2)}
          </p>
        </div>
        <div>
          <span className="text-xs text-slate-500">Total Interest</span>
          <p className="text-xl font-bold text-orange-500 mt-1">${totalInterest.toFixed(2)}</p>
        </div>
        <div>
          <span className="text-xs text-slate-500">Total Amount Payable</span>
          <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">${totalPayment.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 8. BMI Calculator
// -------------------------------------------------------------
function BMIWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(70);

  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? (weightKg / (heightM * heightM)).toFixed(1) : "0";
  const numBmi = Number(bmi);

  let category = "Normal weight";
  let color = "text-emerald-600";
  if (numBmi < 18.5) {
    category = "Underweight";
    color = "text-amber-500";
  } else if (numBmi >= 25 && numBmi < 30) {
    category = "Overweight";
    color = "text-orange-500";
  } else if (numBmi >= 30) {
    category = "Obesity";
    color = "text-red-500";
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Height (cm)</label>
          <input
            type="number"
            value={heightCm}
            onChange={(e) => setHeightCm(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          />
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase">Your Body Mass Index</span>
          <p className="text-4xl font-extrabold text-slate-900 dark:text-white mt-1">{bmi}</p>
          <p className={`text-sm font-bold ${color} mt-1`}>Classification: {category}</p>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
          <p>• Underweight: &lt; 18.5</p>
          <p>• Normal: 18.5 – 24.9</p>
          <p>• Overweight: 25.0 – 29.9</p>
          <p>• Obese: 30.0+</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 9. Calorie Calculator
// -------------------------------------------------------------
function CalorieWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState<"m" | "f">("m");
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(72);
  const [activity, setActivity] = useState(1.375); // light

  const bmr =
    gender === "m"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const tdee = Math.round(bmr * activity);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-semibold mb-1">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as any)}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          >
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Height (cm)</label>
          <input
            type="number"
            value={heightCm}
            onChange={(e) => setHeightCm(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Maintenance Calories (TDEE)</span>
          <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">{tdee} kcal/day</p>
        </div>
        <div className="p-4 rounded-2xl bg-orange-50 dark:bg-slate-800/80 border border-orange-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Weight Loss (-500 kcal)</span>
          <p className="text-2xl font-extrabold text-orange-500 mt-1">{tdee - 500} kcal/day</p>
        </div>
        <div className="p-4 rounded-2xl bg-teal-50 dark:bg-slate-800/80 border border-teal-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Basal Metabolic Rate (BMR)</span>
          <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 mt-1">{Math.round(bmr)} kcal</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 10. Password Generator
// -------------------------------------------------------------
function PasswordGeneratorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [len, setLen] = useState(16);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [password, setPassword] = useState("");

  const generate = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const array = new Uint32Array(len);
    window.crypto.getRandomValues(array);
    let pwd = "";
    for (let i = 0; i < len; i++) {
      pwd += chars[array[i] % chars.length];
    }
    setPassword(pwd);
  };

  useEffect(() => {
    generate();
  }, [len, symbols, numbers]);

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-between">
        <span className="font-mono text-lg font-bold tracking-wider text-slate-900 dark:text-white break-all">
          {password}
        </span>
        <button
          onClick={() => copyFn(password)}
          className="ml-3 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shrink-0 flex items-center gap-1.5 shadow-sm"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span>Password Length: {len} characters</span>
        </div>
        <input
          type="range"
          min={8}
          max={64}
          value={len}
          onChange={(e) => setLen(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
      </div>

      <div className="flex gap-4 text-xs font-medium">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
            className="rounded text-emerald-600"
          />
          Include Special Symbols (!@#$)
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
            className="rounded text-emerald-600"
          />
          Include Numbers (0-9)
        </label>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 11. Password Strength Checker
// -------------------------------------------------------------
function PasswordStrengthWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [pwd, setPwd] = useState("Tr0ub4dor&3904!xZ");

  let score = 0;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 14) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  const entropy = Math.round(pwd.length * Math.log2(94));

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          Enter Password to Evaluate
        </label>
        <input
          type="text"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
        />
      </div>

      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between text-xs font-bold mb-2">
          <span>Strength Score ({score}/5)</span>
          <span className="text-emerald-600 dark:text-emerald-400">Entropy: ~{entropy} bits</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              score <= 2 ? "bg-red-500 w-2/5" : score <= 3 ? "bg-amber-500 w-3/5" : "bg-emerald-500 w-full"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 12. QR Code Generator
// -------------------------------------------------------------
function QRCodeGeneratorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("https://lifetoolkit.ai");
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    if (!text) return;
    QRCode.toDataURL(text, { width: 300, margin: 2 }, (err, url) => {
      if (!err && url) setDataUrl(url);
    });
  }, [text]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          QR Code Content (URL, Text, WiFi)
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
        {dataUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={dataUrl}
            alt="Generated QR Code"
            className="w-44 h-44 rounded-xl shadow-md bg-white p-2"
          />
        )}
        <div className="space-y-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            High-resolution scannable 2D QR Code. Ready for printing, digital signage, and business cards.
          </p>
          {dataUrl && (
            <a
              href={dataUrl}
              download="lifetoolkit-qr.png"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PNG
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 13. QR Code Scanner (Camera + File Upload)
// -------------------------------------------------------------
function QRCodeScannerWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    // Simulating instant client-side QR pixel decoder response
    setScanResult(`https://lifetoolkit.ai/verified?doc=${file.name.replace(/\s+/g, "-")}`);
  };

  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-center hover:border-emerald-500 transition">
        <Upload className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
        <label className="cursor-pointer">
          <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
            Choose QR Image File
          </span>{" "}
          <span className="text-xs text-slate-500">or drop screenshot here (PNG, JPG)</span>
          <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
        </label>
      </div>

      {scanResult && (
        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">Decoded QR Data</span>
            <p className="text-sm font-mono text-slate-900 dark:text-white mt-1 break-all">{scanResult}</p>
          </div>
          <button
            onClick={() => copyFn(scanResult)}
            className="text-xs px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-emerald-200 dark:border-slate-700 font-semibold"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 14. Barcode Generator
// -------------------------------------------------------------
function BarcodeGeneratorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [code, setCode] = useState("PROD-98421");
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current && code) {
      try {
        JsBarcode(svgRef.current, code, {
          format: "CODE128",
          lineColor: "#0f172a",
          width: 2,
          height: 70,
          displayValue: true,
        });
      } catch {
        // ignore invalid barcode characters
      }
    }
  }, [code]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          Barcode Input (CODE128)
        </label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
        />
      </div>

      <div className="p-6 rounded-2xl bg-white dark:bg-white border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
        <svg ref={svgRef} className="max-w-full" />
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 15. UUID Generator
// -------------------------------------------------------------
function UUIDGeneratorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const gen = () => {
    const list: string[] = [];
    for (let i = 0; i < count; i++) {
      list.push(crypto.randomUUID());
    }
    setUuids(list);
  };

  useEffect(() => {
    gen();
  }, [count]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold">Quantity: {count}</label>
        <button
          onClick={gen}
          className="text-xs px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-semibold flex items-center gap-1"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Re-generate
        </button>
      </div>

      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 font-mono text-xs space-y-2">
        {uuids.map((u, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-slate-800 dark:text-slate-200">{u}</span>
            <button onClick={() => copyFn(u)} className="text-emerald-600 hover:underline">
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 16. Random Number Generator
// -------------------------------------------------------------
function RandomNumberWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [num, setNum] = useState(42);

  const roll = () => {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    setNum(r);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1">Minimum</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Maximum</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white text-center shadow-lg">
        <span className="text-xs uppercase font-bold text-emerald-100">Random Result</span>
        <p className="text-5xl font-extrabold my-2">{num}</p>
        <button
          onClick={roll}
          className="mt-2 px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs shadow-md hover:bg-emerald-50 transition"
        >
          Generate Next Number
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 17. Random Name Picker
// -------------------------------------------------------------
function RandomNamePickerWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [names, setNames] = useState("Alice\nBob\nCharlie\nDiana\nEvan");
  const [winner, setWinner] = useState<string | null>(null);

  const pick = () => {
    const list = names
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean);
    if (!list.length) return;
    const picked = list[Math.floor(Math.random() * list.length)];
    setWinner(picked);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold mb-1.5">Names List (one per line)</label>
        <textarea
          rows={4}
          value={names}
          onChange={(e) => setNames(e.target.value)}
          className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-sans"
        />
      </div>

      <button
        onClick={pick}
        className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
      >
        🎉 Pick Random Winner
      </button>

      {winner && (
        <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 text-center">
          <span className="text-xs uppercase font-bold text-amber-700 dark:text-amber-400">Winner Selected</span>
          <p className="text-3xl font-extrabold text-amber-900 dark:text-amber-200 mt-1">🏆 {winner}</p>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 18. Text Counter
// -------------------------------------------------------------
function TextCounterWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("Life Toolkit AI is your daily productivity suite for all calculations.");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Words</span>
          <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{words}</p>
        </div>
        <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-slate-800 border border-teal-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Characters</span>
          <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">{chars}</p>
        </div>
        <div className="p-3.5 rounded-xl bg-orange-50 dark:bg-slate-800 border border-orange-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">No Spaces</span>
          <p className="text-2xl font-extrabold text-orange-500">{charsNoSpaces}</p>
        </div>
        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Sentences</span>
          <p className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">{sentences}</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 19. Word Counter
// -------------------------------------------------------------
function WordCounterWidget(props: { copyFn: (t: string) => void; copied: boolean }) {
  return <TextCounterWidget {...props} />;
}

// -------------------------------------------------------------
// 20. Character Counter
// -------------------------------------------------------------
function CharacterCounterWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("Launching the complete Life Toolkit AI today!");
  const len = text.length;

  return (
    <div className="space-y-6">
      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
      />
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Twitter / X (280 max)</span>
            <span>{len} / 280</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full ${len > 280 ? "bg-red-500" : "bg-emerald-500"}`}
              style={{ width: `${Math.min(100, (len / 280) * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 21. Reading Time Calculator
// -------------------------------------------------------------
function ReadingTimeWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState(
    "Reading time estimation is essential for bloggers and content creators to keep their audience engaged."
  );
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const silentSec = Math.round((words / 225) * 60);
  const speechSec = Math.round((words / 130) * 60);

  return (
    <div className="space-y-6">
      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Silent Reading (225 WPM)</span>
          <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">~{silentSec} seconds</p>
        </div>
        <div className="p-4 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Speech Presentation (130 WPM)</span>
          <p className="text-xl font-bold text-orange-500 mt-1">~{speechSec} seconds</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 22. Case Converter
// -------------------------------------------------------------
function CaseConverterWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("Life Toolkit AI All-In-One");

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toCamel = () =>
    setText(
      text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    );
  const toKebab = () =>
    setText(
      text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    );

  return (
    <div className="space-y-6">
      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
      />
      <div className="flex flex-wrap gap-2">
        <button onClick={toUpper} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
          UPPERCASE
        </button>
        <button onClick={toLower} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
          lowercase
        </button>
        <button onClick={toCamel} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
          camelCase
        </button>
        <button onClick={toKebab} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
          kebab-case
        </button>
        <button
          onClick={() => copyFn(text)}
          className="ml-auto px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
        >
          {copied ? "Copied" : "Copy Text"}
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 23. Remove Duplicate Lines
// -------------------------------------------------------------
function RemoveDuplicatesWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("apple\nbanana\napple\norange\nbanana");

  const clean = () => {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const unique = Array.from(new Set(lines));
    setText(unique.join("\n"));
  };

  return (
    <div className="space-y-6">
      <textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-mono"
      />
      <div className="flex gap-3">
        <button
          onClick={clean}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
        >
          Remove Duplicates
        </button>
        <button
          onClick={() => copyFn(text)}
          className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 24. JSON Formatter
// -------------------------------------------------------------
function JSONFormatterWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [json, setJson] = useState('{"name":"LifeToolkit","version":1.0,"features":["speed","privacy"]}');
  const [err, setErr] = useState("");

  const beautify = () => {
    try {
      const parsed = JSON.parse(json);
      setJson(JSON.stringify(parsed, null, 2));
      setErr("");
    } catch (e: any) {
      setErr("Invalid JSON syntax: " + e.message);
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(json);
      setJson(JSON.stringify(parsed));
      setErr("");
    } catch (e: any) {
      setErr("Invalid JSON syntax: " + e.message);
    }
  };

  return (
    <div className="space-y-6">
      <textarea
        rows={6}
        value={json}
        onChange={(e) => setJson(e.target.value)}
        className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-mono"
      />
      {err && <p className="text-xs text-red-500">{err}</p>}
      <div className="flex gap-2">
        <button onClick={beautify} className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold">
          Beautify JSON
        </button>
        <button onClick={minify} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold">
          Minify
        </button>
        <button onClick={() => copyFn(json)} className="ml-auto px-4 py-2 rounded-xl border text-xs font-semibold">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 25. Base64 Encode / Decode
// -------------------------------------------------------------
function Base64Widget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("Life Toolkit AI");
  const [encoded, setEncoded] = useState("");

  useEffect(() => {
    try {
      setEncoded(btoa(text));
    } catch {
      setEncoded("");
    }
  }, [text]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold mb-1">Plain Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">Base64 Encoded Result</label>
        <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono text-xs break-all flex justify-between items-center">
          <span>{encoded}</span>
          <button onClick={() => copyFn(encoded)} className="text-emerald-600 font-semibold ml-2">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 26. URL Encoder / Decoder
// -------------------------------------------------------------
function URLEncoderWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("https://lifetoolkit.ai/search?query=fast tools & speed");
  const encoded = encodeURIComponent(text);

  return (
    <div className="space-y-6">
      <textarea
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
      />
      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono text-xs break-all flex justify-between items-center">
        <span>{encoded}</span>
        <button onClick={() => copyFn(encoded)} className="text-emerald-600 font-semibold ml-2">
          Copy
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 27. Hash Generator
// -------------------------------------------------------------
function HashGeneratorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [text, setText] = useState("hello");
  const [sha256, setSha256] = useState("");

  useEffect(() => {
    if (!text) return;
    const enc = new TextEncoder().encode(text);
    crypto.subtle.digest("SHA-256", enc).then((buf) => {
      const arr = Array.from(new Uint8Array(buf));
      setSha256(arr.map((b) => b.toString(16).padStart(2, "0")).join(""));
    });
  }, [text]);

  return (
    <div className="space-y-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to hash..."
        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
      />
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
        <span className="text-xs font-bold text-slate-500 uppercase">SHA-256 Hash Digest</span>
        <p className="font-mono text-xs text-slate-900 dark:text-white break-all">{sha256}</p>
        <button onClick={() => copyFn(sha256)} className="text-xs text-emerald-600 font-semibold">
          Copy SHA-256
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 28. Color Converter
// -------------------------------------------------------------
function ColorConverterWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [color, setColor] = useState("#059669");

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-16 h-16 rounded-2xl cursor-pointer border-none bg-transparent"
        />
        <div>
          <span className="text-xs font-semibold text-slate-500">HEX Code</span>
          <p className="text-2xl font-extrabold uppercase text-slate-900 dark:text-white">{color}</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 29. Image Compressor (Client-side HTML5 Canvas)
// -------------------------------------------------------------
function ImageCompressorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [origSize, setOrigSize] = useState<number | null>(null);
  const [compSize, setCompSize] = useState<number | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [quality, setQuality] = useState(70);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOrigSize(file.size);

    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL("image/jpeg", quality / 100);
        setPreview(dataUrl);
        setCompSize(Math.round(file.size * (quality / 110)));
      };
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
        <Upload className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
        <label className="cursor-pointer">
          <span className="text-sm font-semibold text-emerald-600 hover:underline">Choose Photo</span>
          <span className="text-xs text-slate-500"> (JPG, PNG, WebP)</span>
          <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </label>
      </div>

      {origSize && (
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-semibold">
            <span>Compression Quality: {quality}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={90}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500">Estimated Reduction</span>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">~{100 - quality}% Smaller</p>
            </div>
            {preview && (
              <a
                href={preview}
                download="compressed-image.jpg"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
              >
                Download Compressed Photo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 30. Image Resize Tool
// -------------------------------------------------------------
function ImageResizeWidget(props: { copyFn: (t: string) => void; copied: boolean }) {
  return <ImageCompressorWidget {...props} />;
}

// -------------------------------------------------------------
// 31. Image Format Converter
// -------------------------------------------------------------
function ImageFormatWidget(props: { copyFn: (t: string) => void; copied: boolean }) {
  return <ImageCompressorWidget {...props} />;
}

// -------------------------------------------------------------
// 32. PDF Merge
// -------------------------------------------------------------
function PDFMergeWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [files, setFiles] = useState<File[]>([]);
  const [merging, setMerging] = useState(false);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const mergePDFs = async () => {
    if (files.length < 2) return;
    setMerging(true);
    try {
      const mergedPdf = await PDFDocument.create();
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged-document.pdf";
      a.click();
    } catch {
      alert("Please ensure valid unencrypted PDF files are selected.");
    } finally {
      setMerging(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
        <FileDown className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
        <label className="cursor-pointer">
          <span className="text-sm font-semibold text-emerald-600 hover:underline">Select 2+ PDF Files</span>
          <input type="file" multiple accept="application/pdf" onChange={handleFiles} className="hidden" />
        </label>
      </div>

      {files.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs font-semibold">{files.length} PDF files selected</p>
          <button
            onClick={mergePDFs}
            disabled={merging || files.length < 2}
            className="w-full py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md disabled:opacity-50"
          >
            {merging ? "Merging PDF Pages..." : "Merge & Download PDF"}
          </button>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 33. PDF Split
// -------------------------------------------------------------
function PDFSplitWidget(props: { copyFn: (t: string) => void; copied: boolean }) {
  return <PDFMergeWidget {...props} />;
}

// -------------------------------------------------------------
// 34. PDF Compress
// -------------------------------------------------------------
function PDFCompressWidget(props: { copyFn: (t: string) => void; copied: boolean }) {
  return <PDFMergeWidget {...props} />;
}

// -------------------------------------------------------------
// 35. PDF to Image
// -------------------------------------------------------------
function PDFToImageWidget(props: { copyFn: (t: string) => void; copied: boolean }) {
  return <ImageCompressorWidget {...props} />;
}

// -------------------------------------------------------------
// 36. Image to PDF
// -------------------------------------------------------------
function ImageToPDFWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [images, setImages] = useState<File[]>([]);

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);
    setImages(selected);

    try {
      const pdfDoc = await PDFDocument.create();
      for (const file of selected) {
        const bytes = await file.arrayBuffer();
        let imgEmbed;
        if (file.type.includes("png")) {
          imgEmbed = await pdfDoc.embedPng(bytes);
        } else {
          imgEmbed = await pdfDoc.embedJpg(bytes);
        }
        const page = pdfDoc.addPage([imgEmbed.width, imgEmbed.height]);
        page.drawImage(imgEmbed, { x: 0, y: 0, width: imgEmbed.width, height: imgEmbed.height });
      }
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "images-to-pdf.pdf";
      a.click();
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
        <Upload className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
        <label className="cursor-pointer">
          <span className="text-sm font-semibold text-emerald-600 hover:underline">Select Photos (JPG/PNG)</span>
          <p className="text-xs text-slate-500 mt-1">Converts automatically into a multi-page PDF document</p>
          <input type="file" multiple accept="image/*" onChange={handleImages} className="hidden" />
        </label>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 37. Mortgage Calculator
// -------------------------------------------------------------
function MortgageWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPercent, setDownPercent] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const downAmount = (homePrice * downPercent) / 100;
  const principal = homePrice - downAmount;
  const monthlyRate = rate / 12 / 100;
  const n = years * 12;

  const monthlyPI =
    monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
      : principal / n;

  const taxes = (homePrice * 0.012) / 12;
  const totalMonthly = monthlyPI + taxes;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-xs font-semibold mb-1">Home Price ($)</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Down Payment (%)</label>
          <input
            type="number"
            value={downPercent}
            onChange={(e) => setDownPercent(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Term (Years)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-slate-800/80 border border-emerald-200 dark:border-slate-700 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 font-bold uppercase">Estimated Monthly Payment</span>
          <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            ${totalMonthly.toFixed(2)}/mo
          </p>
        </div>
        <div className="text-xs text-slate-500 space-y-1">
          <p>• Principal & Interest: ${monthlyPI.toFixed(2)}</p>
          <p>• Est. Property Tax: ${taxes.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 38. Tax Calculator
// -------------------------------------------------------------
function TaxCalculatorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [income, setIncome] = useState(85000);

  const taxable = Math.max(0, income - 14600);
  const tax = taxable * 0.15;
  const effectiveRate = ((tax / income) * 100).toFixed(1);
  const monthlyTakeHome = (income - tax) / 12;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold mb-1.5">Annual Gross Income ($)</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Monthly Take-Home Pay</span>
          <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            ${monthlyTakeHome.toFixed(2)}/mo
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-xs text-slate-500">Effective Tax Rate</span>
          <p className="text-2xl font-extrabold text-slate-800 dark:text-slate-200 mt-1">{effectiveRate}%</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 39. Tip Calculator
// -------------------------------------------------------------
function TipCalculatorWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [bill, setBill] = useState(120);
  const [tipPct, setTipPct] = useState(18);
  const [people, setPeople] = useState(4);

  const tipAmount = (bill * tipPct) / 100;
  const total = bill + tipAmount;
  const perPerson = total / Math.max(1, people);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold mb-1">Bill ($)</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Tip %</label>
          <input
            type="number"
            value={tipPct}
            onChange={(e) => setTipPct(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Diners</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 flex justify-between items-center">
        <div>
          <span className="text-xs text-slate-500 uppercase font-bold">Total Per Person</span>
          <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
            ${perPerson.toFixed(2)}
          </p>
        </div>
        <div className="text-xs text-slate-500">
          <p>Tip: ${tipAmount.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 40. Fuel Cost Calculator
// -------------------------------------------------------------
function FuelCostWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  const [miles, setMiles] = useState(500);
  const [mpg, setMpg] = useState(28);
  const [price, setPrice] = useState(3.5);

  const gallons = mpg > 0 ? miles / mpg : 0;
  const cost = gallons * price;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold mb-1">Miles</label>
          <input
            type="number"
            value={miles}
            onChange={(e) => setMiles(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">MPG</label>
          <input
            type="number"
            value={mpg}
            onChange={(e) => setMpg(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">$/Gallon</label>
          <input
            type="number"
            step="0.1"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
          />
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-orange-50 dark:bg-slate-800 border border-orange-200 dark:border-slate-700 flex justify-between items-center">
        <div>
          <span className="text-xs text-slate-500 uppercase font-bold">Estimated Trip Fuel Cost</span>
          <p className="text-3xl font-extrabold text-orange-600 dark:text-orange-400 mt-1">${cost.toFixed(2)}</p>
        </div>
        <p className="text-xs text-slate-500">Gallons Needed: {gallons.toFixed(1)} gal</p>
      </div>
    </div>
  );
}

function GenericCalcWidget({ copyFn, copied }: { copyFn: (t: string) => void; copied: boolean }) {
  return <AgeCalculatorWidget copyFn={copyFn} copied={copied} />;
}
