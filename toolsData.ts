import { ToolDefinition } from "@/types/tools";

export const CATEGORIES_META = {
  financial: {
    id: "financial",
    name: "Financial & Math",
    description: "Accurate financial planners, currency calculators, interest, mortgage, tax, and fuel estimators.",
    color: "from-emerald-500 to-teal-700",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },
  health: {
    id: "health",
    name: "Health & Fitness",
    description: "Scientifically backed health calculators including Body Mass Index (BMI) and daily Calorie needs.",
    color: "from-teal-500 to-emerald-700",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
  },
  datetime: {
    id: "datetime",
    name: "Date, Time & Units",
    description: "Precision age calculations, date differences, live international time zone converters, and metric/imperial unit engines.",
    color: "from-amber-500 to-orange-700",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  security: {
    id: "security",
    name: "Security & Generators",
    description: "Strong password generators, entropy strength checkers, QR code generators, scanners, barcodes, and UUID tools.",
    color: "from-orange-500 to-red-700",
    badge: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  },
  text: {
    id: "text",
    name: "Text & Writing Utilities",
    description: "Word counters, character limits, reading time calculators, case converters, duplicate line removers, and JSON formatters.",
    color: "from-lime-600 to-emerald-800",
    badge: "bg-lime-100 text-lime-800 dark:bg-lime-950 dark:text-lime-300",
  },
  developer: {
    id: "developer",
    name: "Developer & Code Tools",
    description: "Base64 encoders, URL decoders, cryptographic hash generators, and color space converter tools.",
    color: "from-cyan-600 to-blue-800",
    badge: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300",
  },
  media: {
    id: "media",
    name: "Image & PDF Tools",
    description: "Fast client-side file tools: image compression, resize, format conversion, PDF merge, PDF split, and image-to-PDF converters.",
    color: "from-emerald-600 to-orange-600",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },
};

export const ALL_TOOLS: ToolDefinition[] = [
  // 1. Age Calculator
  {
    id: "age-calculator",
    slug: "age-calculator",
    name: "Age Calculator",
    category: "datetime",
    categoryName: "Date, Time & Units",
    shortDescription: "Calculate exact chronological age in years, months, days, hours, and seconds with leap year precision.",
    metaTitle: "Age Calculator Online - Exact Chronological Age & Birthday Countdown",
    metaDescription: "Free online Age Calculator. Calculate your exact age in years, months, weeks, days, hours, and minutes with leap year adjustment.",
    iconName: "Calendar",
    badge: "Popular",
    tags: ["age", "birthday", "chronological age", "date of birth", "countdown"],
    explanation: "The Chronological Age Calculator computes the exact elapsed time between a specific birth date and either today or a target date. It accounts for leap years, variable calendar month lengths, and exact time-of-day offsets.",
    formula: "Age = Target Date - Date of Birth (normalized for leap years & varying month lengths: 28-31 days)",
    instructions: [
      "Select your date of birth using the calendar picker.",
      "Optionally select a target date (defaults to today).",
      "Click Calculate to view your age breakdown in years, months, days, and next birthday countdown.",
    ],
    examples: [
      {
        title: "Exact Age Example",
        input: "DOB: 1995-05-15, Target: 2026-03-30",
        output: "30 Years, 10 Months, 15 Days (Total Days: 11,277)",
        explanation: "Accounts for leap years in 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024.",
      },
    ],
    commonMistakes: [
      "Assuming all months have 30 days, which leads to cumulative errors.",
      "Forgetting leap year February 29th additions.",
    ],
    faqs: [
      {
        question: "How does this age calculator account for leap years?",
        answer: "Our calculator checks the Gregorian calendar leap year rule (years divisible by 4, except century years unless divisible by 400) to ensure exact day precision.",
      },
      {
        question: "Can I calculate my age on a future date?",
        answer: "Yes! You can adjust the 'As of Date' field to any past or future date.",
      },
    ],
    relatedSlugs: ["date-difference-calculator", "time-zone-converter", "reading-time-calculator"],
  },

  // 2. Date Difference Calculator
  {
    id: "date-difference-calculator",
    slug: "date-difference-calculator",
    name: "Date Difference Calculator",
    category: "datetime",
    categoryName: "Date, Time & Units",
    shortDescription: "Find the exact duration, total days, weeks, and business days between two dates.",
    metaTitle: "Date Difference Calculator - Days Between Dates & Business Days",
    metaDescription: "Calculate the exact number of days, weeks, months, and working business days between any two calendar dates.",
    iconName: "CalendarRange",
    tags: ["date difference", "days between dates", "work days", "calendar span"],
    explanation: "This tool calculates both total calendar days and business days (excluding weekends) between any start date and end date.",
    formula: "Calendar Days = End Date - Start Date; Business Days = Calendar Days - Weekends",
    instructions: [
      "Pick your start date and end date.",
      "Toggle whether to include the end date in the total count.",
      "View calendar days, weeks, business days, and breakdown.",
    ],
    examples: [
      {
        title: "Project Timeline",
        input: "Start: Oct 1, 2025 | End: Dec 31, 2025",
        output: "91 Calendar Days, 13 Weeks, 66 Business Days",
      },
    ],
    commonMistakes: [
      "Not clarifying if the end date is inclusive or exclusive.",
    ],
    faqs: [
      {
        question: "Does this tool exclude weekends?",
        answer: "Yes, the tool displays both Total Days and Business Days (Monday to Friday).",
      },
    ],
    relatedSlugs: ["age-calculator", "time-zone-converter"],
  },

  // 3. Time Zone Converter
  {
    id: "time-zone-converter",
    slug: "time-zone-converter",
    name: "Time Zone Converter",
    category: "datetime",
    categoryName: "Date, Time & Units",
    shortDescription: "Convert local time across global time zones (UTC, EST, PST, GMT, CET, IST, JST, AEST).",
    metaTitle: "Time Zone Converter - World Clock & International Meeting Planner",
    metaDescription: "Convert time across global timezones instantly with daylight saving time (DST) adjustments.",
    iconName: "Clock",
    tags: ["timezone", "world clock", "utc", "meeting planner", "est", "pst", "ist"],
    explanation: "Easily schedule meetings and convert timestamps across major global cities and UTC offsets with automatic Daylight Saving Time (DST) handling.",
    instructions: [
      "Select your source time and timezone.",
      "Add target timezones to compare side by side.",
      "See live local times and business hour overlaps.",
    ],
    examples: [
      {
        title: "New York to London",
        input: "09:00 AM EDT (UTC-4)",
        output: "02:00 PM BST (UTC+1)",
      },
    ],
    commonMistakes: [
      "Overlooking Daylight Saving Time transitions in spring and autumn.",
    ],
    faqs: [
      {
        question: "Are Daylight Saving Time (DST) rules automatically applied?",
        answer: "Yes, browser internationalization date APIs apply current DST offsets automatically.",
      },
    ],
    relatedSlugs: ["age-calculator", "date-difference-calculator"],
  },

  // 4. Unit Converter
  {
    id: "unit-converter",
    slug: "unit-converter",
    name: "Unit Converter",
    category: "datetime",
    categoryName: "Date, Time & Units",
    shortDescription: "Convert Length, Mass/Weight, Temperature, Volume, Area, Speed, and Digital Storage units.",
    metaTitle: "Unit Converter Online - Metric & Imperial Multi-Category Conversion",
    metaDescription: "Free multi-unit converter for length, weight, temperature, area, volume, speed, and digital bytes.",
    iconName: "Scale",
    tags: ["unit converter", "metric to imperial", "kg to lbs", "celsius to fahrenheit", "meters to feet"],
    explanation: "Comprehensive unit conversion engine supporting metric, imperial, SI units, and digital computing units.",
    instructions: [
      "Choose the measurement category (e.g., Length, Weight, Temperature).",
      "Enter the value and pick the 'From' and 'To' units.",
      "Get real-time converted results with conversion formulas.",
    ],
    examples: [
      {
        title: "Kilometers to Miles",
        input: "10 km",
        output: "6.21371 miles",
      },
    ],
    commonMistakes: [
      "Confusing Mass (kg/lbs) with Volume (liters/gallons).",
    ],
    faqs: [
      {
        question: "How accurate are the conversion constants?",
        answer: "Calculations use NIST and BIPM standard international conversion factors with up to 8 decimal digits precision.",
      },
    ],
    relatedSlugs: ["currency-converter", "fuel-cost-calculator"],
  },

  // 5. Currency Converter
  {
    id: "currency-converter",
    slug: "currency-converter",
    name: "Currency Converter",
    category: "financial",
    categoryName: "Financial & Math",
    shortDescription: "Live foreign exchange rates converter supporting 30+ major global currencies.",
    metaTitle: "Currency Converter - Live Foreign Exchange (FX) Rates",
    metaDescription: "Convert USD, EUR, GBP, JPY, CAD, AUD, INR, and other world currencies with accurate daily live rates.",
    iconName: "Coins",
    badge: "Live Data",
    tags: ["currency converter", "forex", "exchange rates", "usd to eur", "currency rates"],
    explanation: "Real-time foreign exchange converter calculating accurate exchange amounts across 30+ world fiat currencies.",
    formula: "Target Amount = Source Amount * (Target Currency Rate / Base Currency Rate)",
    instructions: [
      "Enter the amount to convert.",
      "Select your source currency and target currency.",
      "View the converted total and current exchange rate ratio.",
    ],
    examples: [
      {
        title: "USD to EUR",
        input: "$1,000 USD",
        output: "€924.50 EUR (at 1 USD = 0.9245 EUR)",
      },
    ],
    commonMistakes: [
      "Confusing mid-market exchange rates with retail bank spread rates.",
    ],
    faqs: [
      {
        question: "Where do the exchange rates come from?",
        answer: "Exchange rates are benchmarked against official central bank mid-market rates updated daily.",
      },
    ],
    relatedSlugs: ["percentage-calculator", "emi-loan-calculator", "tax-calculator"],
  },

  // 6. Percentage Calculator
  {
    id: "percentage-calculator",
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    category: "financial",
    categoryName: "Financial & Math",
    shortDescription: "Calculate percentage increase, percentage decrease, discounts, and percentage of a number.",
    metaTitle: "Percentage Calculator - 6 Modes for Increase, Decrease & Discounts",
    metaDescription: "Calculate what is X% of Y, percentage increase/decrease, discount savings, and ratio percentages easily.",
    iconName: "Percent",
    tags: ["percentage", "discount calculator", "percent increase", "percent change", "math"],
    explanation: "Solves 6 common percentage math problems instantly: finding X% of Y, finding what % X is of Y, percentage change, and retail discounts.",
    formula: "X% of Y = (X * Y) / 100 ; % Change = ((New - Old) / Old) * 100",
    instructions: [
      "Select the calculation mode from the tab bar.",
      "Enter your numbers.",
      "View instant result and step-by-step formula.",
    ],
    examples: [
      {
        title: "20% Discount on $150",
        input: "Original: $150, Discount: 20%",
        output: "Savings: $30.00, Final Price: $120.00",
      },
    ],
    commonMistakes: [
      "Mixing up percentage points with relative percentage change.",
    ],
    faqs: [
      {
        question: "How do I calculate percentage increase?",
        answer: "Subtract the original value from the new value, divide by the original value, then multiply by 100.",
      },
    ],
    relatedSlugs: ["tip-calculator", "tax-calculator", "emi-loan-calculator"],
  },

  // 7. EMI / Loan Calculator
  {
    id: "emi-loan-calculator",
    slug: "emi-loan-calculator",
    name: "EMI/Loan Calculator",
    category: "financial",
    categoryName: "Financial & Math",
    shortDescription: "Calculate monthly loan EMI, total interest payable, and amortization schedule for personal/auto loans.",
    metaTitle: "EMI Loan Calculator - Monthly Installment & Amortization Schedule",
    metaDescription: "Calculate Equated Monthly Installment (EMI), total interest cost, and monthly principal breakdown for any loan.",
    iconName: "Landmark",
    badge: "Popular",
    tags: ["emi calculator", "loan payment", "interest rate", "personal loan", "car loan"],
    explanation: "Calculates Equated Monthly Installments (EMI) using the standard reducing-balance amortization formula.",
    formula: "EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1] where P = Principal, r = monthly interest rate, n = tenure in months",
    instructions: [
      "Input the total loan principal amount.",
      "Enter the annual interest rate percentage.",
      "Select loan tenure in years or months.",
      "Review monthly payment, total interest, and the breakdown chart.",
    ],
    examples: [
      {
        title: "$25,000 Auto Loan at 6% for 5 Years",
        input: "Principal: $25,000, Rate: 6%, Tenure: 60 Months",
        output: "Monthly EMI: $483.32 | Total Interest: $3,999.20 | Total Payment: $28,999.20",
      },
    ],
    commonMistakes: [
      "Entering annual interest rate where monthly rate is required without dividing by 1200.",
    ],
    faqs: [
      {
        question: "What is an EMI?",
        answer: "An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.",
      },
    ],
    relatedSlugs: ["mortgage-calculator", "percentage-calculator", "currency-converter"],
  },

  // 8. BMI Calculator
  {
    id: "bmi-calculator",
    slug: "bmi-calculator",
    name: "BMI Calculator",
    category: "health",
    categoryName: "Health & Fitness",
    shortDescription: "Calculate Body Mass Index (BMI) and determine healthy weight ranges according to WHO guidelines.",
    metaTitle: "BMI Calculator Online - Body Mass Index & Healthy Weight Range",
    metaDescription: "Free Body Mass Index (BMI) calculator with metric and imperial units, WHO classification chart, and healthy weight target.",
    iconName: "Activity",
    badge: "Health",
    tags: ["bmi", "body mass index", "healthy weight", "fitness", "weight loss"],
    explanation: "Body Mass Index (BMI) is a screening metric used by the World Health Organization to categorize body weight relative to height.",
    formula: "Metric: BMI = weight (kg) / [height (m)]^2 ; Imperial: BMI = 703 * weight (lbs) / [height (in)]^2",
    instructions: [
      "Select Metric (kg/cm) or Imperial (lbs/feet-inches) units.",
      "Enter your height and weight.",
      "View your BMI score, WHO category (Underweight, Normal, Overweight, Obese), and ideal weight range.",
    ],
    examples: [
      {
        title: "Standard Adult BMI",
        input: "Height: 175 cm (5 ft 9 in), Weight: 70 kg (154 lbs)",
        output: "BMI: 22.86 (Normal Healthy Weight Range 18.5 - 24.9)",
      },
    ],
    commonMistakes: [
      "Using BMI alone for muscular athletes without considering lean body mass.",
    ],
    faqs: [
      {
        question: "What is considered a normal BMI score?",
        answer: "According to the World Health Organization (WHO), a BMI between 18.5 and 24.9 is classified as normal weight.",
      },
    ],
    relatedSlugs: ["calorie-calculator", "unit-converter"],
  },

  // 9. Calorie Calculator
  {
    id: "calorie-calculator",
    slug: "calorie-calculator",
    name: "Calorie Calculator",
    category: "health",
    categoryName: "Health & Fitness",
    shortDescription: "Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) for weight goals.",
    metaTitle: "Calorie Calculator - BMR, TDEE & Macro Nutrition Targets",
    metaDescription: "Calculate daily calorie requirements, BMR, TDEE, and macro breakdown for weight maintenance, weight loss, or muscle gain.",
    iconName: "Flame",
    tags: ["calories", "bmr", "tdee", "macro calculator", "weight loss calories", "diet"],
    explanation: "Uses the clinically validated Mifflin-St Jeor equation to estimate Basal Metabolic Rate (BMR) and adjusts for activity level to find Total Daily Energy Expenditure (TDEE).",
    formula: "Men: BMR = 10W + 6.25H - 5A + 5 ; Women: BMR = 10W + 6.25H - 5A - 161 (W in kg, H in cm, A in years)",
    instructions: [
      "Enter your age, gender, height, and weight.",
      "Select your weekly activity level.",
      "Review maintenance calories, deficit calories for weight loss, and surplus for muscle gain.",
    ],
    examples: [
      {
        title: "Active Adult Male",
        input: "30 yrs, Male, 180 cm, 78 kg, Moderate exercise (3-5 days/week)",
        output: "BMR: 1,760 kcal/day | TDEE: 2,728 kcal/day | Mild Weight Loss: 2,228 kcal/day",
      },
    ],
    commonMistakes: [
      "Overestimating physical activity level when choosing the activity multiplier.",
    ],
    faqs: [
      {
        question: "What is the difference between BMR and TDEE?",
        answer: "BMR is the energy burned at complete rest to keep organs functioning. TDEE includes daily movement and exercise.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "unit-converter"],
  },

  // 10. Password Generator
  {
    id: "password-generator",
    slug: "password-generator",
    name: "Password Generator",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Generate cryptographically secure random passwords and readable passphrases.",
    metaTitle: "Password Generator - Cryptographically Secure & Custom Passwords",
    metaDescription: "Generate secure, high-entropy passwords with custom length, symbols, numbers, and readable passphrases.",
    iconName: "Key",
    badge: "Security",
    tags: ["password generator", "secure password", "random string", "passphrase", "cybersecurity"],
    explanation: "Generates high-entropy passwords using the browser's native window.crypto.getRandomValues cryptographic RNG.",
    instructions: [
      "Adjust the password length slider (8 to 64 characters).",
      "Toggle character sets: uppercase, lowercase, numbers, and special symbols.",
      "Click Generate and copy your secure password with one click.",
    ],
    examples: [
      {
        title: "20 Character High-Security Password",
        input: "Length: 20, Symbols: On, Numbers: On",
        output: "k9#Vp!8$mQ2@zL9*xT4&",
      },
    ],
    commonMistakes: [
      "Using predictable dictionary words or personal birth years in passwords.",
    ],
    faqs: [
      {
        question: "Are generated passwords sent over the network?",
        answer: "No. All passwords are generated 100% locally in your browser using the Web Crypto API. Nothing is transmitted or saved.",
      },
    ],
    relatedSlugs: ["password-strength-checker", "hash-generator", "uuid-generator"],
  },

  // 11. Password Strength Checker
  {
    id: "password-strength-checker",
    slug: "password-strength-checker",
    name: "Password Strength Checker",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Test password entropy, crack time estimations, and detect common vulnerability patterns.",
    metaTitle: "Password Strength Checker - Entropy & Crack Time Estimator",
    metaDescription: "Evaluate password strength, entropy bit score, brute-force crack time estimates, and security recommendations.",
    iconName: "ShieldCheck",
    tags: ["password strength", "entropy checker", "crack time", "security test"],
    explanation: "Analyzes password complexity, character diversity, dictionary patterns, and calculates Shannon entropy bits.",
    instructions: [
      "Type or paste a password into the test box.",
      "View instant strength meter (Weak, Fair, Good, Strong, Very Strong).",
      "Read estimated brute-force crack times and improvement tips.",
    ],
    examples: [
      {
        title: "Strong Password Audit",
        input: "Tr0ub4dor&3904!xZ",
        output: "Entropy: 98.4 bits | Estimated Crack Time: 1.2 Billion Years",
      },
    ],
    commonMistakes: [
      "Assuming short passwords with a single symbol are secure.",
    ],
    faqs: [
      {
        question: "Is it safe to test my password here?",
        answer: "Yes, the test runs entirely client-side via JavaScript. No data is stored, logged, or transmitted.",
      },
    ],
    relatedSlugs: ["password-generator", "hash-generator"],
  },

  // 12. QR Code Generator
  {
    id: "qr-code-generator",
    slug: "qr-code-generator",
    name: "QR Code Generator",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Create high-resolution QR codes for URLs, WiFi networks, plain text, vCards, and emails.",
    metaTitle: "QR Code Generator - Custom Colors, High-Res PNG & SVG Download",
    metaDescription: "Free online QR code maker. Generate custom QR codes for websites, WiFi networks, phone numbers, and download high-res PNG/SVG.",
    iconName: "QrCode",
    badge: "Popular",
    tags: ["qr code generator", "qr maker", "wifi qr code", "vcard qr", "download qr code"],
    explanation: "Generates 2D Quick Response (QR) matrix codes with customizable error correction levels, color palettes, and instant PNG/SVG download.",
    instructions: [
      "Select your data type (URL, Plain Text, WiFi Network, Email).",
      "Enter your content and customize foreground/background colors.",
      "Click Download to save as high-resolution PNG or SVG image.",
    ],
    examples: [
      {
        title: "Website URL QR Code",
        input: "https://lifetoolkit.ai",
        output: "Scannable 2D Matrix QR Code with 30% error correction",
      },
    ],
    commonMistakes: [
      "Using low contrast colors (e.g. yellow on white) which make QR codes hard for cameras to scan.",
    ],
    faqs: [
      {
        question: "Do generated QR codes expire?",
        answer: "No. These are static QR codes that encode your data directly. They will work indefinitely with no expiration.",
      },
    ],
    relatedSlugs: ["qr-code-scanner", "barcode-generator"],
  },

  // 13. QR Code Scanner
  {
    id: "qr-code-scanner",
    slug: "qr-code-scanner",
    name: "QR Code Scanner",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Scan QR codes using your device camera or by uploading/dragging an image file.",
    metaTitle: "QR Code Scanner Online - Camera & Image File Decoder",
    metaDescription: "Scan and decode QR codes instantly from your webcam or by uploading image files (PNG, JPG, WebP).",
    iconName: "ScanLine",
    badge: "Interactive",
    tags: ["qr code scanner", "scan qr online", "decode qr code", "camera qr reader"],
    explanation: "Decodes 2D QR matrix codes client-side using device cameras or uploaded screenshot image files.",
    instructions: [
      "Click 'Start Camera' to scan with your webcam or click 'Upload Image' to attach a picture.",
      "The scanner detects and decodes the embedded text/URL instantly.",
      "Copy the decoded content or open web links directly.",
    ],
    examples: [
      {
        title: "Image Upload Scan",
        input: "Uploaded screenshot of a WiFi QR Code",
        output: "Decoded: WIFI:S:MyNetwork;T:WPA;P:SecretKey123;;",
      },
    ],
    commonMistakes: [
      "Scanning blurry images or in dark lighting conditions.",
    ],
    faqs: [
      {
        question: "Can I scan a QR code from a photo on my phone or PC?",
        answer: "Yes, simply drag & drop or upload any image file containing a QR code.",
      },
    ],
    relatedSlugs: ["qr-code-generator", "barcode-generator"],
  },

  // 14. Barcode Generator
  {
    id: "barcode-generator",
    slug: "barcode-generator",
    name: "Barcode Generator",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Generate standard 1D linear barcodes (CODE128, EAN-13, UPC-A, CODE39, ITF).",
    metaTitle: "Barcode Generator Online - CODE128, EAN-13, UPC-A & CODE39",
    metaDescription: "Generate scannable 1D barcodes for products, inventory, and retail. Download high quality PNG and SVG.",
    iconName: "Barcode",
    tags: ["barcode generator", "code128", "ean13", "upc barcode", "inventory barcode"],
    explanation: "Creates standard 1D linear barcodes compliant with retail and logistics standards.",
    instructions: [
      "Select the barcode format (CODE128, EAN-13, UPC, CODE39).",
      "Enter the numeric or alphanumeric data.",
      "Download your barcode in crisp SVG or PNG format.",
    ],
    examples: [
      {
        title: "Product CODE128 Barcode",
        input: "PROD-98421",
        output: "Standard CODE128 1D Barcode with scannable lines and text label",
      },
    ],
    commonMistakes: [
      "Entering letters into numeric-only barcode formats like EAN-13 or UPC.",
    ],
    faqs: [
      {
        question: "Which barcode format is best for general inventory?",
        answer: "CODE128 is the most versatile standard 1D barcode format because it supports letters, numbers, and punctuation.",
      },
    ],
    relatedSlugs: ["qr-code-generator", "uuid-generator"],
  },

  // 15. UUID Generator
  {
    id: "uuid-generator",
    slug: "uuid-generator",
    name: "UUID Generator",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Generate random Version 4 (v4) and Version 1 (v1) Universally Unique Identifiers (UUID / GUID).",
    metaTitle: "UUID / GUID Generator Online - RFC 4122 Compliant Bulk UUIDs",
    metaDescription: "Generate single or bulk RFC 4122 Version 4 UUIDs (GUIDs) with custom formatting, uppercase/lowercase, and hyphens.",
    iconName: "Fingerprint",
    tags: ["uuid generator", "guid generator", "uuid v4", "random uuid", "developer"],
    explanation: "Generates RFC 4122 compliant 128-bit Universally Unique Identifiers with 122 bits of cryptographic entropy.",
    instructions: [
      "Choose the quantity of UUIDs to generate (1 to 100).",
      "Select formatting options: Uppercase, Lowercase, with or without hyphens.",
      "Copy single UUIDs or all generated UUIDs to your clipboard.",
    ],
    examples: [
      {
        title: "Standard RFC 4122 v4 UUID",
        input: "Count: 1",
        output: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      },
    ],
    commonMistakes: [
      "Confusing UUID v4 (purely random) with UUID v1 (timestamp and MAC address based).",
    ],
    faqs: [
      {
        question: "What is the probability of a UUID collision?",
        answer: "With 122 random bits in UUID v4, the probability of generating a duplicate is approximately 1 in 2.71 quintillion.",
      },
    ],
    relatedSlugs: ["random-number-generator", "hash-generator"],
  },

  // 16. Random Number Generator
  {
    id: "random-number-generator",
    slug: "random-number-generator",
    name: "Random Number Generator",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Generate true random integers, decimals, lottery numbers, dice rolls, and coin flips.",
    metaTitle: "Random Number Generator - Custom Range, Unique Numbers & Dice Roll",
    metaDescription: "Generate cryptographically secure random numbers within any minimum and maximum range with duplicate filtering.",
    iconName: "Dices",
    tags: ["random number generator", "rng", "random integer", "dice roll", "lottery generator"],
    explanation: "High-precision random number engine powered by crypto-grade entropy sources.",
    instructions: [
      "Set your minimum and maximum range values.",
      "Choose how many numbers to generate and toggle allow/disallow duplicates.",
      "Click Generate to see instant results with stats (min, max, average).",
    ],
    examples: [
      {
        title: "Generate 5 Unique Numbers from 1 to 50",
        input: "Min: 1, Max: 50, Count: 5, Unique: Yes",
        output: "[7, 19, 28, 34, 42]",
      },
    ],
    commonMistakes: [
      "Setting Min greater than Max or requesting more unique numbers than the range allows.",
    ],
    faqs: [
      {
        question: "Is this RNG suitable for prize giveaways?",
        answer: "Yes, it uses Web Crypto randomness for fair, unbiased statistical distribution.",
      },
    ],
    relatedSlugs: ["random-name-picker", "uuid-generator"],
  },

  // 17. Random Name Picker
  {
    id: "random-name-picker",
    slug: "random-name-picker",
    name: "Random Name Picker",
    category: "security",
    categoryName: "Security & Generators",
    shortDescription: "Draw random winners, pick names from a list, or spin an interactive prize wheel.",
    metaTitle: "Random Name Picker - Winner Draw & List Item Selector",
    metaDescription: "Randomly pick names, contest winners, or raffle tickets from any list with elimination mode and confetti.",
    iconName: "Shuffle",
    tags: ["random name picker", "winner selector", "raffle picker", "giveaway tool"],
    explanation: "Picks random items from a custom list with optional elimination mode so previous winners are removed.",
    instructions: [
      "Paste your list of names (one per line).",
      "Choose how many winners to draw.",
      "Click Pick Winner to reveal results with celebratory animations.",
    ],
    examples: [
      {
        title: "Team Raffle",
        input: "Alice\nBob\nCharlie\nDiana",
        output: "Winner: Diana 🎉",
      },
    ],
    commonMistakes: [
      "Leaving accidental blank lines in the input list.",
    ],
    faqs: [
      {
        question: "Can I remove winners after each round?",
        answer: "Yes! Enable the 'Elimination Mode' toggle to remove selected names from future draws.",
      },
    ],
    relatedSlugs: ["random-number-generator", "remove-duplicate-lines"],
  },

  // 18. Text Counter
  {
    id: "text-counter",
    slug: "text-counter",
    name: "Text Counter",
    category: "text",
    categoryName: "Text & Writing Utilities",
    shortDescription: "Count words, characters, sentences, paragraphs, reading time, and speaking time in real time.",
    metaTitle: "Text Counter - Comprehensive Word, Character & Paragraph Counter",
    metaDescription: "Real-time text analytics tool counting words, characters with/without spaces, sentences, paragraphs, and reading duration.",
    iconName: "FileText",
    badge: "Popular",
    tags: ["text counter", "word count", "character count", "sentence counter", "paragraph counter"],
    explanation: "Complete text metrics engine providing instant character, word, sentence, line, and paragraph counts as you type.",
    instructions: [
      "Type or paste your text into the editor.",
      "Review the live analytics dashboard for words, characters, sentences, and estimated reading time.",
    ],
    examples: [
      {
        title: "Sample Paragraph Analysis",
        input: "Life Toolkit AI is your daily productivity companion.",
        output: "Words: 8 | Characters: 54 | Spaces: 7 | Reading Time: ~2 seconds",
      },
    ],
    commonMistakes: [
      "Confusing characters with spaces vs characters without spaces for assignment limits.",
    ],
    faqs: [
      {
        question: "How are sentences calculated?",
        answer: "Sentences are identified by punctuation terminators (. ! ?) followed by whitespace or line breaks.",
      },
    ],
    relatedSlugs: ["word-counter", "character-counter", "reading-time-calculator"],
  },

  // 19. Word Counter
  {
    id: "word-counter",
    slug: "word-counter",
    name: "Word Counter",
    category: "text",
    categoryName: "Text & Writing Utilities",
    shortDescription: "Count words and analyze keyword density, top repeated phrases, and vocabulary variety.",
    metaTitle: "Word Counter & Keyword Density Analyzer Online",
    metaDescription: "Accurate online word counter with top keyword frequency analysis, reading levels, and writing metrics.",
    iconName: "SpellCheck",
    tags: ["word counter", "keyword density", "essay word counter", "writing analysis"],
    explanation: "Analyzes text for word frequency, keyword density percentages, and reading levels for content writers and students.",
    instructions: [
      "Paste your article, essay, or blog post.",
      "Check total words, average word length, and the top keyword frequency table.",
    ],
    examples: [
      {
        title: "Keyword Density",
        input: "Search engine optimization improves search rankings.",
        output: "Total Words: 6 | Top Keyword: 'search' (2x, 33.3% density)",
      },
    ],
    commonMistakes: [
      "Overlooking stop words when evaluating keyword density.",
    ],
    faqs: [
      {
        question: "What is an ideal keyword density for SEO?",
        answer: "Most SEO guidelines recommend a natural keyword density between 1% and 2.5% to avoid keyword stuffing.",
      },
    ],
    relatedSlugs: ["text-counter", "character-counter", "reading-time-calculator"],
  },

  // 20. Character Counter
  {
    id: "character-counter",
    slug: "character-counter",
    name: "Character Counter",
    category: "text",
    categoryName: "Text & Writing Utilities",
    shortDescription: "Track character counts with live social media limits for X/Twitter, Instagram, LinkedIn, and SMS.",
    metaTitle: "Character Counter - Social Media Limit Checker (X, Threads, SMS)",
    metaDescription: "Count characters with and without spaces. Includes progress bars for Twitter/X (280 chars), SMS (160 chars), and meta descriptions.",
    iconName: "Hash",
    tags: ["character counter", "twitter character limit", "letter count", "sms counter"],
    explanation: "Counts exact unicode characters and compares length against character limits for popular social media and SEO platforms.",
    instructions: [
      "Type or paste your text.",
      "Watch the platform progress gauges (Twitter 280, Instagram bio 150, SEO Meta Description 160).",
    ],
    examples: [
      {
        title: "Twitter / X Post Check",
        input: "Excited to launch our new toolkit today! Check it out.",
        output: "54 / 280 characters (226 remaining, 19% used)",
      },
    ],
    commonMistakes: [
      "Counting emojis as 1 byte instead of multi-byte Unicode surrogate pairs.",
    ],
    faqs: [
      {
        question: "How do emojis affect character limits?",
        answer: "Modern social platforms count most emojis as 2 characters. Our tool accurately tracks standard Unicode character representations.",
      },
    ],
    relatedSlugs: ["text-counter", "word-counter"],
  },

  // 21. Reading Time Calculator
  {
    id: "reading-time-calculator",
    slug: "reading-time-calculator",
    name: "Reading Time Calculator",
    category: "text",
    categoryName: "Text & Writing Utilities",
    shortDescription: "Estimate reading duration and speech presentation time based on adjustable Words Per Minute (WPM).",
    metaTitle: "Reading Time Calculator - Silent Reading & Speech Duration",
    metaDescription: "Calculate silent reading time and speech presentation duration for speeches, scripts, and blog articles.",
    iconName: "Timer",
    tags: ["reading time", "speaking time", "speech duration", "words per minute", "wpm"],
    explanation: "Estimates how long it will take someone to read your text silently (average 200-250 WPM) or deliver it as a speech (average 130-150 WPM).",
    formula: "Reading Time = Total Words / Reading WPM ; Speaking Time = Total Words / Speaking WPM",
    instructions: [
      "Paste your speech, script, or article.",
      "Adjust the reading and speaking speed sliders if desired.",
      "Get minutes and seconds estimates for reading and presenting.",
    ],
    examples: [
      {
        title: "1,000 Word Article",
        input: "1,000 words at 225 WPM silent reading",
        output: "Reading Time: 4 minutes 26 seconds | Speaking Time (130 WPM): 7 minutes 41 seconds",
      },
    ],
    commonMistakes: [
      "Assuming spoken speech speed is the same as fast silent reading.",
    ],
    faqs: [
      {
        question: "What is the standard adult reading speed?",
        answer: "The average adult reads silently at approximately 200 to 250 words per minute (WPM).",
      },
    ],
    relatedSlugs: ["word-counter", "text-counter"],
  },

  // 22. Case Converter
  {
    id: "case-converter",
    slug: "case-converter",
    name: "Case Converter",
    category: "text",
    categoryName: "Text & Writing Utilities",
    shortDescription: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case, and PascalCase.",
    metaTitle: "Case Converter - UPPERCASE, lowercase, Title Case, camelCase & snake_case",
    metaDescription: "Convert text instantly into UPPERCASE, lowercase, Capitalized Words, Title Case, camelCase, kebab-case, and snake_case.",
    iconName: "Type",
    tags: ["case converter", "uppercase", "lowercase", "title case", "camelcase", "snake case"],
    explanation: "Transforms strings into different casing styles for copywriters, programmers, and document editors.",
    instructions: [
      "Paste your text into the input box.",
      "Click any case transformation button (e.g. Title Case, UPPERCASE, camelCase).",
      "Copy the converted text to your clipboard.",
    ],
    examples: [
      {
        title: "camelCase Conversion",
        input: "hello world application",
        output: "helloWorldApplication",
      },
    ],
    commonMistakes: [
      "Capitalizing minor prepositions in Title Case headlines incorrectly.",
    ],
    faqs: [
      {
        question: "Does Title Case follow standard stylebook rules?",
        answer: "Yes, small words like 'a', 'an', 'the', 'in', 'on', and 'at' remain lowercase unless they are the first word.",
      },
    ],
    relatedSlugs: ["remove-duplicate-lines", "text-counter"],
  },

  // 23. Remove Duplicate Lines
  {
    id: "remove-duplicate-lines",
    slug: "remove-duplicate-lines",
    name: "Remove Duplicate Lines",
    category: "text",
    categoryName: "Text & Writing Utilities",
    shortDescription: "Remove duplicate lines from text lists with sorting, trimming, and case sensitivity options.",
    metaTitle: "Remove Duplicate Lines - Text & List Deduplicator Online",
    metaDescription: "Clean lists and remove duplicate lines instantly. Options for alphabetical sorting, case sensitivity, and trimming whitespace.",
    iconName: "ListFilter",
    tags: ["remove duplicate lines", "deduplicate list", "clean text", "sort list"],
    explanation: "Deduplicates line-separated lists, emails, keywords, or data records while preserving or sorting order.",
    instructions: [
      "Paste your list into the text area.",
      "Toggle options: Case Sensitive, Trim Whitespace, Remove Empty Lines, or Alphabetical Sort.",
      "View original vs unique line counts and copy clean output.",
    ],
    examples: [
      {
        title: "Email List Deduplication",
        input: "user@test.com\nadmin@test.com\nuser@test.com",
        output: "user@test.com\nadmin@test.com (1 duplicate removed)",
      },
    ],
    commonMistakes: [
      "Ignoring trailing spaces which can cause lines to look distinct even when text matches.",
    ],
    faqs: [
      {
        question: "Can I sort lines alphabetically after deduplication?",
        answer: "Yes, you can enable the 'Sort A-Z' or 'Sort Z-A' toggle options.",
      },
    ],
    relatedSlugs: ["case-converter", "text-counter"],
  },

  // 24. JSON Formatter
  {
    id: "json-formatter",
    slug: "json-formatter",
    name: "JSON Formatter",
    category: "developer",
    categoryName: "Developer & Code Tools",
    shortDescription: "Format, beautify, validate, minify, and inspect JSON data with syntax error highlighting.",
    metaTitle: "JSON Formatter & Validator Online - Beautify & Minify JSON",
    metaDescription: "Free JSON Formatter and validator. Beautify messy JSON, minify payloads, validate syntax, and inspect object tree hierarchy.",
    iconName: "Code2",
    badge: "Developer",
    tags: ["json formatter", "json validator", "json beautifier", "minify json", "json parser"],
    explanation: "Parses, formats with 2 or 4 space indentation, minifies, and pinpoints syntax errors with line/column numbers.",
    instructions: [
      "Paste raw JSON into the editor or upload a .json file.",
      "Click 'Beautify' to format with indentation or 'Minify' to compact.",
      "Check validation status for any syntax errors.",
    ],
    examples: [
      {
        title: "Beautify Minified JSON",
        input: "{\"name\":\"LifeToolkit\",\"active\":true}",
        output: "{\n  \"name\": \"LifeToolkit\",\n  \"active\": true\n}",
      },
    ],
    commonMistakes: [
      "Using single quotes instead of double quotes for JSON strings.",
      "Leaving trailing commas after the final item in an array or object.",
    ],
    faqs: [
      {
        question: "Is my JSON data uploaded anywhere?",
        answer: "No. JSON parsing is executed 100% locally inside your browser's V8 JavaScript runtime.",
      },
    ],
    relatedSlugs: ["base64-encode-decode", "url-encoder-decoder"],
  },

  // 25. Base64 Encode/Decode
  {
    id: "base64-encode-decode",
    slug: "base64-encode-decode",
    name: "Base64 Encode/Decode",
    category: "developer",
    categoryName: "Developer & Code Tools",
    shortDescription: "Encode and decode text strings or convert uploaded image files to Base64 Data URIs.",
    metaTitle: "Base64 Encode & Decode - Text & File Data URI Converter",
    metaDescription: "Encode text and files to Base64 or decode Base64 strings back to plain text and binary files.",
    iconName: "Binary",
    tags: ["base64 encode", "base64 decode", "data uri", "binary to base64"],
    explanation: "Converts binary or UTF-8 text data into ASCII-safe Base64 representation (RFC 4648) and decodes Base64 payloads.",
    instructions: [
      "Select 'Encode' or 'Decode' tab mode.",
      "Enter your text or upload a file to convert into a Base64 string / Data URI.",
      "Copy or download the converted result.",
    ],
    examples: [
      {
        title: "UTF-8 Text to Base64",
        input: "Life Toolkit AI",
        output: "TGlmZSBUb29sa2l0IEFJ",
      },
    ],
    commonMistakes: [
      "Attempting to decode a malformed Base64 string with invalid padding characters (=).",
    ],
    faqs: [
      {
        question: "Can I convert images to Base64 Data URIs here?",
        answer: "Yes, you can upload image files and copy the complete `data:image/png;base64,...` string.",
      },
    ],
    relatedSlugs: ["url-encoder-decoder", "hash-generator", "json-formatter"],
  },

  // 26. URL Encoder/Decoder
  {
    id: "url-encoder-decoder",
    slug: "url-encoder-decoder",
    name: "URL Encoder/Decoder",
    category: "developer",
    categoryName: "Developer & Code Tools",
    shortDescription: "Encode and decode special characters in URLs (percent-encoding RFC 3986) safely.",
    metaTitle: "URL Encoder & Decoder - Percent-Encoding (RFC 3986)",
    metaDescription: "Encode special characters in query strings and URLs or decode percent-encoded URLs back to readable text.",
    iconName: "Link2",
    tags: ["url encoder", "url decoder", "percent encoding", "uri encoder", "query string"],
    explanation: "Performs percent-encoding (replacing unsafe ASCII characters with %Hex pairs) and decodes URI components according to RFC 3986.",
    instructions: [
      "Paste your URL or text string.",
      "Click Encode or Decode.",
      "Copy the sanitized, web-ready URL.",
    ],
    examples: [
      {
        title: "Encode Query String",
        input: "https://example.com/search?q=life toolkit & more",
        output: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dlife%20toolkit%20%26%20more",
      },
    ],
    commonMistakes: [
      "Using encodeURI instead of encodeURIComponent when sanitizing query parameters.",
    ],
    faqs: [
      {
        question: "Why do URLs need percent-encoding?",
        answer: "Characters like spaces, ampersands (&), and question marks (?) have special syntax roles in URLs and must be escaped.",
      },
    ],
    relatedSlugs: ["base64-encode-decode", "hash-generator"],
  },

  // 27. Hash Generator
  {
    id: "hash-generator",
    slug: "hash-generator",
    name: "Hash Generator",
    category: "developer",
    categoryName: "Developer & Code Tools",
    shortDescription: "Generate cryptographic hashes (MD5, SHA-1, SHA-256, SHA-384, SHA-512) for text strings.",
    metaTitle: "Cryptographic Hash Generator - SHA-256, SHA-512, SHA-1 & MD5",
    metaDescription: "Generate cryptographic checksums and hashes (SHA-256, SHA-512, SHA-1, MD5) using native browser Web Crypto.",
    iconName: "Lock",
    tags: ["hash generator", "sha256", "sha512", "md5 generator", "checksum", "cryptography"],
    explanation: "Computes one-way cryptographic hash digests from text input using the native browser Web Crypto API.",
    instructions: [
      "Type or paste your text input.",
      "View real-time hash digests across SHA-256, SHA-512, SHA-384, SHA-1, and MD5.",
      "Click the copy button next to any hash algorithm.",
    ],
    examples: [
      {
        title: "SHA-256 Hash of 'hello'",
        input: "hello",
        output: "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
      },
    ],
    commonMistakes: [
      "Treating hashes as two-way encryption (hashes cannot be decrypted, only compared).",
    ],
    faqs: [
      {
        question: "Which hash algorithm is recommended for modern security?",
        answer: "SHA-256 and SHA-512 are industry standard. MD5 and SHA-1 should only be used for legacy checksum verification.",
      },
    ],
    relatedSlugs: ["password-generator", "uuid-generator", "base64-encode-decode"],
  },

  // 28. Color Converter
  {
    id: "color-converter",
    slug: "color-converter",
    name: "Color Converter",
    category: "developer",
    categoryName: "Developer & Code Tools",
    shortDescription: "Convert colors between HEX, RGB, HSL, and CMYK with a visual color picker and palette generator.",
    metaTitle: "Color Converter & Palette Generator - HEX, RGB, HSL, CMYK",
    metaDescription: "Convert colors across HEX, RGB, HSL, and CMYK formats. Includes color picker, contrast ratio checker, and harmonious palettes.",
    iconName: "Palette",
    tags: ["color converter", "hex to rgb", "rgb to hsl", "color picker", "cmyk converter"],
    explanation: "Converts color codes across web and print color spaces (HEX, RGB, HSL, CMYK) with WCAG contrast ratio calculations.",
    instructions: [
      "Pick a color with the visual color picker or type a HEX/RGB/HSL value.",
      "View converted color values in all formats.",
      "Check WCAG accessibility contrast and harmonious color palettes.",
    ],
    examples: [
      {
        title: "Emerald Green Conversion",
        input: "HEX: #059669",
        output: "RGB: rgb(5, 150, 105) | HSL: hsl(161, 94%, 30%) | CMYK: cmyk(97%, 0%, 30%, 41%)",
      },
    ],
    commonMistakes: [
      "Entering 3-digit hex codes where 6-digit hex codes are expected by strict parsers.",
    ],
    faqs: [
      {
        question: "What is CMYK used for?",
        answer: "CMYK (Cyan, Magenta, Yellow, Key/Black) is the color model used for physical commercial color printing.",
      },
    ],
    relatedSlugs: ["json-formatter", "base64-encode-decode"],
  },

  // 29. Image Compressor
  {
    id: "image-compressor",
    slug: "image-compressor",
    name: "Image Compressor",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Compress JPG, PNG, and WebP images client-side without losing visual clarity.",
    metaTitle: "Image Compressor Online - Reduce Image File Size Fast",
    metaDescription: "Free client-side image compression tool. Reduce JPG, PNG, and WebP file sizes by up to 80% while keeping high visual quality.",
    iconName: "FileImage",
    badge: "File Tool",
    tags: ["image compressor", "reduce image size", "compress png", "compress jpg", "optimize images"],
    explanation: "Compresses images client-side in your browser using HTML5 Canvas rendering and configurable WebP/JPEG quantization algorithms.",
    instructions: [
      "Upload or drag & drop an image file (JPG, PNG, WebP).",
      "Adjust the compression quality slider (10% to 100%).",
      "Compare before vs after file size savings and download your optimized image.",
    ],
    examples: [
      {
        title: "High Res Photo Compression",
        input: "Original: 3.4 MB (JPEG)",
        output: "Compressed: 680 KB (80% file size reduction)",
      },
    ],
    commonMistakes: [
      "Compressing an already heavily compressed JPEG image which leads to visual artifacting.",
    ],
    faqs: [
      {
        question: "Are my photos uploaded to a server?",
        answer: "No! All image compression runs 100% inside your browser via HTML5 Canvas. Your images never leave your device.",
      },
    ],
    relatedSlugs: ["image-resize-tool", "image-format-converter", "image-to-pdf"],
  },

  // 30. Image Resize Tool
  {
    id: "image-resize-tool",
    slug: "image-resize-tool",
    name: "Image Resize Tool",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Resize image dimensions by pixels or percentage with aspect ratio locking.",
    metaTitle: "Image Resize Tool - Change Image Width & Height Dimensions",
    metaDescription: "Resize JPG, PNG, and WebP images online by pixel dimensions or percentage scale while maintaining aspect ratio.",
    iconName: "Maximize2",
    tags: ["image resize", "resize photo", "scale image", "change image dimensions"],
    explanation: "Resamples image pixel dimensions client-side with aspect-ratio preservation and smooth interpolation.",
    instructions: [
      "Upload an image from your computer or phone.",
      "Enter new target width/height or adjust the scale percentage.",
      "Keep aspect ratio locked to avoid distortion, then download.",
    ],
    examples: [
      {
        title: "4K to Full HD Resize",
        input: "3840 x 2160 px",
        output: "1920 x 1080 px (50% scale)",
      },
    ],
    commonMistakes: [
      "Unlocking aspect ratio and creating stretched or squashed pictures.",
    ],
    faqs: [
      {
        question: "Does resizing images make the file size smaller?",
        answer: "Yes, reducing pixel dimensions significantly reduces total file size.",
      },
    ],
    relatedSlugs: ["image-compressor", "image-format-converter"],
  },

  // 31. Image Format Converter
  {
    id: "image-format-converter",
    slug: "image-format-converter",
    name: "Image Format Converter",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Convert images seamlessly between PNG, JPG, WebP, and BMP formats.",
    metaTitle: "Image Format Converter - PNG to JPG, WebP & BMP Online",
    metaDescription: "Convert image files between PNG, JPG, WebP, and BMP in your browser with zero quality degradation.",
    iconName: "FileSymlink",
    tags: ["image format converter", "png to jpg", "jpg to webp", "convert image format"],
    explanation: "Transcodes raster graphics client-side between standard web formats (PNG, JPG, WebP, BMP) with transparent alpha channel handling.",
    instructions: [
      "Upload your image file.",
      "Select your desired output format (PNG, JPG, WebP).",
      "Click Convert and download your new file.",
    ],
    examples: [
      {
        title: "PNG to Modern WebP",
        input: "logo.png (1.2 MB)",
        output: "logo.webp (240 KB with transparency preserved)",
      },
    ],
    commonMistakes: [
      "Converting transparent PNG files to JPG without choosing a background fill color (JPG does not support transparency).",
    ],
    faqs: [
      {
        question: "Why should I convert images to WebP?",
        answer: "WebP provides superior compression and quality compared to PNG and JPEG, speeding up website page loads.",
      },
    ],
    relatedSlugs: ["image-compressor", "image-to-pdf"],
  },

  // 32. PDF Merge
  {
    id: "pdf-merge",
    slug: "pdf-merge",
    name: "PDF Merge",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Combine multiple PDF documents into a single consolidated PDF file.",
    metaTitle: "PDF Merge Online - Combine Multiple PDF Files Free",
    metaDescription: "Merge multiple PDF documents into one single file client-side. Fast, secure, and preserves original document formatting.",
    iconName: "Files",
    badge: "PDF Tool",
    tags: ["pdf merge", "combine pdf", "join pdf files", "merge pdfs online"],
    explanation: "Merges multiple PDF files into one ordered document in your browser using pure JavaScript PDF libraries.",
    instructions: [
      "Attach two or more PDF files from your device.",
      "Drag and reorder the files in your desired sequence.",
      "Click 'Merge PDFs' and download your combined document.",
    ],
    examples: [
      {
        title: "Combine Invoices",
        input: "Invoice_Jan.pdf + Invoice_Feb.pdf",
        output: "Combined_Invoices.pdf (Single multi-page PDF)",
      },
    ],
    commonMistakes: [
      "Uploading password-protected encrypted PDFs without unlocking them first.",
    ],
    faqs: [
      {
        question: "Are my confidential PDF documents uploaded to your servers?",
        answer: "No. All PDF merging happens directly inside your browser client memory. Your files are never sent to external servers.",
      },
    ],
    relatedSlugs: ["pdf-split", "pdf-compress", "image-to-pdf"],
  },

  // 33. PDF Split
  {
    id: "pdf-split",
    slug: "pdf-split",
    name: "PDF Split",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Extract individual pages or custom page ranges from any PDF document.",
    metaTitle: "PDF Split - Extract Pages & Split PDF Files Online",
    metaDescription: "Split PDF files into separate documents or extract specific page ranges (e.g. 1-3, 5) securely in your browser.",
    iconName: "Scissors",
    badge: "PDF Tool",
    tags: ["pdf split", "extract pdf pages", "separate pdf", "cut pdf"],
    explanation: "Extracts specific pages or page ranges from a PDF file and generates a newly bundled PDF containing only the selected pages.",
    instructions: [
      "Upload your PDF document.",
      "Specify page numbers or ranges to extract (e.g., '1-3, 5').",
      "Click Split PDF and download your extracted PDF file.",
    ],
    examples: [
      {
        title: "Extract Executive Summary",
        input: "10-page report.pdf -> extract pages '1-2'",
        output: "summary.pdf (2-page document)",
      },
    ],
    commonMistakes: [
      "Entering page numbers that exceed the total page count of the uploaded PDF.",
    ],
    faqs: [
      {
        question: "How do I specify multiple page ranges?",
        answer: "You can use commas and hyphens, for example: '1-3, 5, 8-10'.",
      },
    ],
    relatedSlugs: ["pdf-merge", "pdf-to-image"],
  },

  // 34. PDF Compress
  {
    id: "pdf-compress",
    slug: "pdf-compress",
    name: "PDF Compress",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Reduce PDF document file size for easy email sharing and fast web uploads.",
    metaTitle: "PDF Compress - Reduce PDF File Size Online",
    metaDescription: "Compress and optimize PDF documents in your browser. Reduce file size for email attachments without losing clarity.",
    iconName: "Minimize2",
    badge: "PDF Tool",
    tags: ["pdf compress", "reduce pdf size", "shrink pdf", "optimize pdf"],
    explanation: "Optimizes embedded vector streams, raster images, and document structural metadata to decrease total PDF byte size.",
    instructions: [
      "Upload your PDF file.",
      "Select your target compression level (Standard or Maximum).",
      "Download your optimized, smaller PDF file.",
    ],
    examples: [
      {
        title: "Email Attachment Optimization",
        input: "Contract_Scan.pdf (12.4 MB)",
        output: "Contract_Scan_compressed.pdf (2.8 MB)",
      },
    ],
    commonMistakes: [
      "Expecting large compression ratios on PDFs that only contain plain text without embedded graphics.",
    ],
    faqs: [
      {
        question: "Will text clarity be affected?",
        answer: "No, standard text fonts and vector lines remain crisp and sharp at 100% vector fidelity.",
      },
    ],
    relatedSlugs: ["pdf-merge", "image-compressor"],
  },

  // 35. PDF to Image
  {
    id: "pdf-to-image",
    slug: "pdf-to-image",
    name: "PDF to Image",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Convert and render PDF pages into high-resolution PNG or JPG images.",
    metaTitle: "PDF to Image Converter - Export PDF Pages as PNG & JPG",
    metaDescription: "Convert PDF documents into crisp PNG or JPG images. Extract every page as a high-resolution image file.",
    iconName: "ImagePlus",
    badge: "PDF Tool",
    tags: ["pdf to image", "pdf to png", "pdf to jpg", "extract pdf images"],
    explanation: "Renders PDF vector pages onto HTML5 canvas surfaces and exports high-DPI PNG or JPG graphics files.",
    instructions: [
      "Upload your PDF document.",
      "Select desired image format (PNG or JPG) and image quality.",
      "Preview rendered pages and download images individually or all at once.",
    ],
    examples: [
      {
        title: "Presentation Slides to Images",
        input: "presentation.pdf",
        output: "slide-1.png, slide-2.png (1920x1080 px)",
      },
    ],
    commonMistakes: [
      "Using low DPI rendering for documents with fine printed text.",
    ],
    faqs: [
      {
        question: "Can I download all pages in one click?",
        answer: "Yes, you can download all extracted page images directly.",
      },
    ],
    relatedSlugs: ["image-to-pdf", "pdf-split"],
  },

  // 36. Image to PDF
  {
    id: "image-to-pdf",
    slug: "image-to-pdf",
    name: "Image to PDF",
    category: "media",
    categoryName: "Image & PDF Tools",
    shortDescription: "Convert multiple JPG, PNG, and WebP photos into a clean printable PDF document.",
    metaTitle: "Image to PDF Converter - Convert JPG & PNG Photos to PDF",
    metaDescription: "Convert photos and images (JPG, PNG, WebP) into professional multi-page PDF documents for printing and sharing.",
    iconName: "FileSpreadsheet",
    badge: "PDF Tool",
    tags: ["image to pdf", "jpg to pdf", "png to pdf", "photos to pdf"],
    explanation: "Embeds image files into standardized PDF pages (A4, US Letter, or fit-to-image size) with configurable margins.",
    instructions: [
      "Attach one or more images (JPG, PNG, WebP).",
      "Reorder image pages or adjust page orientation (Portrait / Landscape).",
      "Click 'Generate PDF' and download your document.",
    ],
    examples: [
      {
        title: "Document Scans to PDF",
        input: "Receipt_Page1.jpg + Receipt_Page2.jpg",
        output: "Receipts.pdf (2-page printable PDF)",
      },
    ],
    commonMistakes: [
      "Mixing landscape and portrait images without checking orientation settings.",
    ],
    faqs: [
      {
        question: "Can I convert multiple images into a single multi-page PDF?",
        answer: "Yes! Attach multiple images and they will be compiled into consecutive pages in the final PDF.",
      },
    ],
    relatedSlugs: ["pdf-to-image", "pdf-merge", "image-compressor"],
  },

  // 37. Mortgage Calculator
  {
    id: "mortgage-calculator",
    slug: "mortgage-calculator",
    name: "Mortgage Calculator",
    category: "financial",
    categoryName: "Financial & Math",
    shortDescription: "Calculate home mortgage monthly payments including Principal, Interest, Property Taxes, PMI, and Home Insurance.",
    metaTitle: "Mortgage Calculator - Monthly Payment, Taxes, PMI & Amortization",
    metaDescription: "Calculate monthly mortgage payments with property tax, home insurance, and PMI breakdown plus complete amortization schedule.",
    iconName: "Home",
    badge: "Popular",
    tags: ["mortgage calculator", "home loan", "property tax", "pmi", "amortization schedule"],
    explanation: "Comprehensive home financing calculator estimating total monthly PITI (Principal, Interest, Taxes, and Insurance) payments.",
    formula: "Monthly PITI = Monthly Principal & Interest + (Annual Property Tax / 12) + (Annual Home Insurance / 12) + Monthly PMI",
    instructions: [
      "Enter home purchase price and your down payment amount or percentage.",
      "Enter interest rate and loan term (e.g. 30 years or 15 years).",
      "Optionally enter estimated property taxes and insurance to see complete monthly housing costs.",
    ],
    examples: [
      {
        title: "$400,000 Home Purchase",
        input: "Price: $400,000, Down: 20% ($80k), Rate: 6.5%, Term: 30 Years",
        output: "Principal & Interest: $2,022.62/mo | Total PITI: ~$2,450/mo",
      },
    ],
    commonMistakes: [
      "Forgetting to factor in property taxes and homeowner insurance when calculating housing affordability.",
    ],
    faqs: [
      {
        question: "What is PMI and when is it required?",
        answer: "Private Mortgage Insurance (PMI) is usually required by lenders if your down payment is less than 20% of the home's purchase price.",
      },
    ],
    relatedSlugs: ["emi-loan-calculator", "tax-calculator", "percentage-calculator"],
  },

  // 38. Tax Calculator
  {
    id: "tax-calculator",
    slug: "tax-calculator",
    name: "Tax Calculator",
    category: "financial",
    categoryName: "Financial & Math",
    shortDescription: "Estimate income tax liability, effective tax rate, standard deductions, and take-home pay.",
    metaTitle: "Income Tax Calculator - Federal Brackets & Take-Home Pay Estimator",
    metaDescription: "Estimate your income tax liability, effective tax bracket rate, standard deductions, and net monthly take-home paycheck.",
    iconName: "Receipt",
    tags: ["tax calculator", "income tax", "tax brackets", "take home pay", "net salary"],
    explanation: "Calculates progressive marginal income tax brackets, standard deductions, effective tax rate, and estimated net take-home salary.",
    formula: "Tax = Sum of (Income in Bracket * Marginal Bracket Rate) ; Effective Rate = (Total Tax / Gross Income) * 100",
    instructions: [
      "Enter your annual gross income.",
      "Select your filing status (Single or Married Jointly).",
      "Enter any pre-tax deductions (e.g. 401k, health insurance).",
      "View estimated total tax, effective rate, and monthly net pay.",
    ],
    examples: [
      {
        title: "Single Earner ($85,000 Gross)",
        input: "Gross Income: $85,000, Single, Standard Deduction",
        output: "Estimated Federal Tax: ~$9,680 | Effective Rate: 11.39% | Monthly Net Pay: ~$6,276",
      },
    ],
    commonMistakes: [
      "Confusing marginal tax bracket rate with effective average tax rate.",
    ],
    faqs: [
      {
        question: "How do marginal tax brackets work?",
        answer: "Only the portion of your income that falls within a specific bracket is taxed at that bracket's percentage rate.",
      },
    ],
    relatedSlugs: ["mortgage-calculator", "percentage-calculator", "emi-loan-calculator"],
  },

  // 39. Tip Calculator
  {
    id: "tip-calculator",
    slug: "tip-calculator",
    name: "Tip Calculator",
    category: "financial",
    categoryName: "Financial & Math",
    shortDescription: "Calculate restaurant tips, custom gratuity percentages, and split the bill evenly among friends.",
    metaTitle: "Tip Calculator - Bill Split & Custom Gratuity per Person",
    metaDescription: "Quickly calculate restaurant tip amounts, total bill with gratuity, and split the total evenly among any number of people.",
    iconName: "Coffee",
    tags: ["tip calculator", "gratuity", "split bill", "restaurant tip", "bill share"],
    explanation: "Calculates tip amounts based on custom or preset gratuity percentages (10%, 15%, 18%, 20%, 25%) and splits bills among dining groups.",
    formula: "Tip Amount = Bill * (Tip % / 100) ; Total per Person = (Bill + Tip Amount) / Number of People",
    instructions: [
      "Enter the bill subtotal amount.",
      "Select a preset tip percentage or enter a custom rate.",
      "Select the number of people splitting the bill.",
      "View total tip, grand total, and amount owed per person.",
    ],
    examples: [
      {
        title: "Dinner for 4",
        input: "Bill: $120.00, Tip: 18%, People: 4",
        output: "Tip: $21.60 | Total: $141.60 | Per Person: $35.40",
      },
    ],
    commonMistakes: [
      "Applying tip on top of sales tax rather than on the pre-tax food subtotal.",
    ],
    faqs: [
      {
        question: "What is the standard tipping percentage in restaurants?",
        answer: "In the United States and Canada, 15% to 20% of the pre-tax bill is standard for good table service.",
      },
    ],
    relatedSlugs: ["percentage-calculator", "fuel-cost-calculator"],
  },

  // 40. Fuel Cost Calculator
  {
    id: "fuel-cost-calculator",
    slug: "fuel-cost-calculator",
    name: "Fuel Cost Calculator",
    category: "financial",
    categoryName: "Financial & Math",
    shortDescription: "Calculate road trip gasoline/diesel costs, total fuel consumed, and cost per passenger.",
    metaTitle: "Fuel Cost Calculator - Road Trip Gas & Mileage Cost Estimator",
    metaDescription: "Calculate total gas cost for road trips, daily commutes, fuel consumption (MPG or L/100km), and cost split per traveler.",
    iconName: "Fuel",
    tags: ["fuel cost calculator", "gas calculator", "road trip cost", "mileage cost", "mpg"],
    explanation: "Estimates the total fuel cost and gallons/liters needed for any road trip or daily commute based on vehicle efficiency.",
    formula: "Gallons Needed = Distance / MPG ; Total Fuel Cost = Gallons Needed * Price per Gallon",
    instructions: [
      "Enter the trip distance in miles or kilometers.",
      "Enter your vehicle's fuel efficiency (MPG or L/100km).",
      "Enter the local price of gas per gallon or liter.",
      "View total trip cost, fuel volume required, and cost per passenger.",
    ],
    examples: [
      {
        title: "500-Mile Road Trip",
        input: "Distance: 500 miles, MPG: 28, Gas Price: $3.50/gallon, 2 Passengers",
        output: "Fuel Needed: 17.86 Gallons | Total Cost: $62.50 | Cost per Person: $31.25",
      },
    ],
    commonMistakes: [
      "Using city fuel economy ratings for highway road trip calculations.",
    ],
    faqs: [
      {
        question: "Can I calculate round trips?",
        answer: "Yes, you can toggle the 'Round Trip' option to automatically double the distance and fuel totals.",
      },
    ],
    relatedSlugs: ["tip-calculator", "unit-converter", "percentage-calculator"],
  },
];
