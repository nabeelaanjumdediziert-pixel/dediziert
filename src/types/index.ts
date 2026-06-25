import type { LucideIcon } from "lucide-react";

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  overview: string;
  image: string;
  benefits: string[];
  process: ProcessStep[];
  faqs: ServiceFaq[];
}

export interface Industry {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  /** Optional circular avatar image (path under /public). */
  image?: string;
  /** Optional link to the client's website. */
  link?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Achievement {
  value: string;
  label: string;
}

/** Lightweight content block model for blog post bodies. */
export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string; // ISO 8601
  readTime: number; // minutes
  coverImage: string;
  tags: string[];
  content: BlogBlock[];
}
