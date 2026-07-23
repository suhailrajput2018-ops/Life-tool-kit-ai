export type ToolCategory =
  | "financial"
  | "health"
  | "datetime"
  | "security"
  | "text"
  | "developer"
  | "media";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolExample {
  title: string;
  input: string;
  output: string;
  explanation?: string;
}

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  category: ToolCategory;
  categoryName: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  iconName: string;
  badge?: string;
  tags: string[];
  explanation: string;
  formula?: string;
  instructions: string[];
  examples: ToolExample[];
  commonMistakes: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  coverGradient: string;
  content: string;
}
