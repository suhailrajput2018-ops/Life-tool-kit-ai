"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchModal } from "@/components/ui/SearchModal";
import {
  Wrench,
  Search,
  Menu,
  X,
  Sparkles,
  BookOpen,
  LayoutGrid,
  Shield,
  HeartHandshake,
} from "lucide-react";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Life Toolkit <span className="text-orange-500 text-sm font-bold bg-orange-100 dark:bg-orange-950/60 px-1.5 py-0.2 rounded-md">AI</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase -mt-0.5">
                40+ Free Daily Utilities
              </span>
            </div>
          </Link>

          {/* Center Search Bar Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 text-sm max-w-sm w-full transition shadow-sm"
          >
            <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="flex-1 text-left text-xs sm:text-sm truncate">Search 40+ free tools...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link
              href="/tools"
              className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              <LayoutGrid className="w-4 h-4" />
              All Tools
            </Link>
            <Link
              href="/categories"
              className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              Categories
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              <BookOpen className="w-4 h-4" />
              Blog & Guides
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search tools"
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Search className="w-5 h-5" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-5 space-y-2">
            <Link
              href="/tools"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              <LayoutGrid className="w-4 h-4 text-emerald-600" />
              All 40 Tools
            </Link>
            <Link
              href="/categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              Tool Categories
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              <BookOpen className="w-4 h-4 text-teal-600" />
              Educational Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              <Shield className="w-4 h-4 text-emerald-600" />
              About & Mission
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              <HeartHandshake className="w-4 h-4 text-orange-500" />
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
