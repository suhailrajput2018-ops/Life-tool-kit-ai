import { BlogPost } from "@/types/tools";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-calculate-bmi-correctly",
    title: "How to Calculate BMI Correctly: Formulas, Accuracy & Health Insights",
    excerpt: "Learn how the Body Mass Index (BMI) is calculated, how to interpret WHO classifications, and why muscle mass and body composition matter.",
    category: "Health & Fitness",
    readTime: "6 min read",
    publishedAt: "March 2026",
    author: "Dr. Evelyn Reed, Health Sciences",
    coverGradient: "from-emerald-600 to-teal-700",
    content: `
## What is Body Mass Index (BMI)?

Body Mass Index (BMI) is a widely used screening metric developed in the 19th century by the Belgian mathematician Adolphe Quetelet. It measures body weight relative to height and provides a quick, standardized estimate of whether an individual's weight falls within a healthy statistical range.

### The Mathematical Formula

The calculation depends on whether you use the metric or imperial measurement system:

- **Metric System Formula:**
  $$\\text{BMI} = \\frac{\\text{Weight (kg)}}{[\\text{Height (m)}]^2}$$

- **Imperial System Formula:**
  $$\\text{BMI} = 703 \\times \\frac{\\text{Weight (lbs)}}{[\\text{Height (inches)}]^2}$$

### Understanding World Health Organization (WHO) Categories

1. **Underweight:** BMI below 18.5
2. **Normal / Healthy Weight:** BMI between 18.5 and 24.9
3. **Overweight:** BMI between 25.0 and 29.9
4. **Obese Class I:** BMI between 30.0 and 34.9
5. **Obese Class II / Severe:** BMI 35.0 or above

### Limitations of BMI

While BMI is an effective population-level screening tool, it does not distinguish between **fat mass** and **lean muscle mass**. Highly athletic individuals or weightlifters may register as "overweight" or "obese" despite having very low body fat percentages. For individual assessments, combining BMI with waist circumference and body fat percentage provides the most accurate health picture.
    `,
  },
  {
    slug: "what-makes-a-strong-password",
    title: "What Makes a Strong Password in 2026: Modern Cybersecurity Guidelines",
    excerpt: "Discover the latest NIST cybersecurity standards for password length, entropy, passphrases, and multi-factor authentication defenses.",
    category: "Security & Tech",
    readTime: "7 min read",
    publishedAt: "March 2026",
    author: "Alex Rivera, Security Engineer",
    coverGradient: "from-orange-600 to-amber-700",
    content: `
## Rethinking Password Security in 2026

For decades, internet users were told to invent complex, short passwords like \`P@$$w0rd12!\` and change them every 30 days. Today, modern cybersecurity standards—specifically the National Institute of Standards and Technology (NIST Special Publication 800-63B)—have completely revised this advice.

### Why Length Beats Complexity

Modern brute-force cracking rigs can test billions of hash combinations per second. What slows attackers down isn't necessarily replacing an 'a' with an '@', but **pure character length and cryptographic entropy**.

- An 8-character complex password can often be cracked in hours or days.
- A 16-character passphrase (e.g., \`correct-horse-battery-staple-2026\`) would take modern supercomputers billions of years to crack.

### Best Practices for Ironclad Passwords

1. **Aim for at least 14 to 20 characters.**
2. **Use unique passwords for every single service.** Never reuse passwords across banking, email, or social media.
3. **Adopt a Passphrase structure:** Combine 4 to 5 random, unrelated dictionary words.
4. **Enable Multi-Factor Authentication (MFA):** Authenticator apps (TOTP) or hardware security keys add a critical layer of defense even if a password is leaked in a third-party data breach.
    `,
  },
  {
    slug: "how-currency-conversion-works",
    title: "How Currency Conversion Works: Live Exchange Rates & Forex Spreads",
    excerpt: "Understand how foreign exchange markets establish currency valuation, the difference between mid-market rates and retail bank spreads.",
    category: "Finance & Economy",
    readTime: "8 min read",
    publishedAt: "March 2026",
    author: "Marcus Vance, Financial Analyst",
    coverGradient: "from-emerald-700 to-teal-800",
    content: `
## The Mechanics of Global Foreign Exchange (Forex)

The foreign exchange market (Forex) is the largest and most liquid financial market in the world, with trillions of dollars traded daily across global banking hubs from London and New York to Tokyo and Singapore.

### What is the Mid-Market Exchange Rate?

The **mid-market rate** (also known as the interbank rate) is the exact midpoint between the buy (bid) price and sell (ask) price of two global currencies. It represents the real rate at which banks and institutional traders exchange currencies with one another.

### Why Retail Rates Differ from Live Rates

When you exchange money at an airport kiosk, credit card terminal, or commercial bank, you rarely receive the pure mid-market rate. Providers add a **markup or spread** (typically 1.5% to 4%) on top of the base conversion rate to cover transaction costs and generate profit.

Using an independent online currency converter lets you see the true un-skewed mid-market rate so you know exactly how much value you are receiving.
    `,
  },
  {
    slug: "how-qr-codes-work",
    title: "How QR Codes Work: Matrix Encoding, Error Correction & Best Practices",
    excerpt: "An engineer's breakdown of 2D Quick Response codes: how data is encoded, the role of Reed-Solomon error correction, and design tips.",
    category: "Engineering",
    readTime: "5 min read",
    publishedAt: "March 2026",
    author: "Sarah Chen, Principal Systems Architect",
    coverGradient: "from-teal-600 to-emerald-800",
    content: `
## The Origin of the Quick Response (QR) Code

Invented in 1994 by Masahiro Hara at the Japanese company Denso Wave, the QR code was originally designed to track automotive parts during manufacturing. Unlike traditional 1D barcodes that store data only horizontally, a 2D QR code stores information both horizontally and vertically.

### How Does a QR Code Store Data?

A QR code matrix contains several functional patterns:

1. **Position Detection Patterns:** The three large squares located at the corners allow scanners and smartphone cameras to recognize the code's orientation from any 360-degree angle.
2. **Timing Patterns:** Alternating black and white modules that establish the grid coordinates.
3. **Data Modules:** The binary pixels (black = 1, white = 0) that encode the actual payload.

### Reed-Solomon Error Correction

One of the most powerful features of QR codes is built-in **Reed-Solomon error correction**. This allows a QR code to remain completely readable even if up to 30% of the graphic surface is smudged, torn, or overlaid with a brand logo!
    `,
  },
  {
    slug: "understanding-loan-amortization",
    title: "Understanding Loan Amortization: How Principal & Interest Change Over Time",
    excerpt: "Demystify your mortgage or auto loan: learn how monthly payments are divided between interest charges and principal reduction.",
    category: "Personal Finance",
    readTime: "7 min read",
    publishedAt: "March 2026",
    author: "Marcus Vance, Financial Analyst",
    coverGradient: "from-amber-600 to-orange-700",
    content: `
## What is Loan Amortization?

Amortization refers to the process of spreading out a loan into a series of equal monthly payments over a set period. Although your total monthly payment remains constant for fixed-rate loans, the internal proportion going toward **interest** versus **principal reduction** shifts dramatically over the life of the loan.

### The Front-Loaded Interest Phenomenon

During the early years of a 30-year mortgage or 5-year auto loan:

- Most of your monthly payment goes directly toward paying off the **accrued monthly interest** on the large outstanding principal balance.
- Only a small fraction chips away at the principal.

As the principal gradually shrinks each month, the interest charge for the subsequent month decreases. Consequently, a larger percentage of your fixed payment goes toward principal reduction, accelerating your equity growth.
    `,
  },
  {
    slug: "understanding-image-compression",
    title: "Understanding Image Compression: Lossless vs Lossy Optimization",
    excerpt: "Learn how image compression algorithms work, how to balance visual quality with file size, and why WebP is dominating modern web performance.",
    category: "Developer & Media",
    readTime: "6 min read",
    publishedAt: "March 2026",
    author: "Sarah Chen, Principal Systems Architect",
    coverGradient: "from-emerald-600 to-lime-700",
    content: `
## Why Image Compression Matters

Images make up over 60% of the total byte weight of average web pages. Optimizing photos and graphic assets directly improves page load times, boosts Google Core Web Vitals, and minimizes cellular data consumption.

### Lossless vs Lossy Compression

- **Lossless Compression (e.g., PNG):** Shrinks file size by eliminating redundant metadata and using efficient dictionary encoding (like DEFLATE). The decompressed pixel data is 100% bit-for-bit identical to the original.
- **Lossy Compression (e.g., JPEG, WebP):** Discards high-frequency visual information that the human eye is least sensitive to. This achieves dramatic 70% to 90% file size reductions while maintaining high perceived visual quality.

Modern browser image tools use HTML5 Canvas to optimize quality sliders client-side, giving you full control over size versus visual fidelity before downloading.
    `,
  },
];
