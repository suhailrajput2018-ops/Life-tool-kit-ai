import Script from "next/script";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lifetoolkit.ai"),
  title: {
    default: "Life Toolkit AI - 40+ Free Daily Web Tools & Calculators",
    template: "%s | Life Toolkit AI",
  },
  description:
    "Free online suite of 40+ daily utilities: Currency Converter, BMI, PDF Merge, Password Generator, QR Code Maker, Loan EMI, and Developer tools.",
  keywords: [
    "free online tools",
    "daily calculators",
    "currency converter",
    "bmi calculator",
    "password generator",
    "pdf tools",
    "qr code generator",
    "emi loan calculator",
  ],
  authors: [{ name: "Life Toolkit AI Engineering" }],
  openGraph: {
    title: "Life Toolkit AI - 40+ Free Daily Web Utilities",
    description: "Fast, accurate, 100% free online calculators, developer converters, image tools, and security utilities.",
    url: "https://lifetoolkit.ai",
    siteName: "Life Toolkit AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Toolkit AI - 40+ Free Daily Web Tools",
    description: "Client-side privacy, accurate math, real-time live rates, and modern developer utilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Life Toolkit AI",
    url: "https://lifetoolkit.ai",
    logo: "https://lifetoolkit.ai/favicon.ico",
    description: "High-precision daily calculators, file converters, and developer utilities.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="GOOGLE_VERIFICATION_PLACEHOLDER_KEY" /> 
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5554704158829427"
     crossorigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-white transition-colors duration-150">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
