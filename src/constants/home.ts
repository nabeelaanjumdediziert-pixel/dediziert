import {
  Target,
  ShieldCheck,
  Users,
  Zap,
  Lightbulb,
  Handshake,
} from "lucide-react";
import type { Stat, Feature, Testimonial, Faq, ProcessStep } from "@/types";

export const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

export const whyChooseUs: Feature[] = [
  {
    title: "Accuracy",
    description:
      "Meticulous, detail-obsessed work backed by multi-level review — because in finance, precision is non-negotiable.",
    icon: Target,
  },
  {
    title: "Compliance",
    description:
      "We keep you ahead of every regulation and deadline, so audits, filings and obligations are never a worry.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Team",
    description:
      "Chartered accountants, tax specialists and auditors with deep, sector-specific experience on your side.",
    icon: Users,
  },
  {
    title: "Fast Turnaround",
    description:
      "Responsive service and reliable delivery schedules mean you get answers and reports when you need them.",
    icon: Zap,
  },
  {
    title: "Strategic Insights",
    description:
      "We go beyond the numbers, translating data into decisions that improve margins and accelerate growth.",
    icon: Lightbulb,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We invest in understanding your business deeply and grow alongside you as a dedicated financial partner.",
    icon: Handshake,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Advice",
    description:
      "We understand your business, discuss your goals, and identify your accounting, taxation, audit, or compliance requirements.",
  },
  {
    step: 2,
    title: "Information Collection",
    description:
      "We gather the necessary financial records, documents, and supporting information to assess your situation accurately.",
  },
  {
    step: 3,
    title: "Analysis & Planning",
    description:
      "Our team reviews the data, identifies opportunities and risks, and prepares a practical action plan.",
  },
  {
    step: 4,
    title: "Committed Execution",
    description:
      "We perform the agreed services — bookkeeping, accounting, tax filing, audit support, advisory, or compliance work — with attention to detail, timeliness, and professional responsibility.",
  },
  {
    step: 5,
    title: "Review & Reporting",
    description:
      "We provide reports, explain findings, and ensure everything is completed correctly and transparently, in line with applicable regulations and requirements.",
  },
  {
    step: 6,
    title: "Ongoing Support",
    description:
      "We remain available for continuous guidance, updates, and business support as your needs evolve.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had an excellent experience with DEDIZIERT. From the very beginning, their team guided me through every step of the tax return process with professionalism and patience. They took the time to explain everything clearly and ensured I understood all the requirements and options available to me.\n\nThey carefully reviewed my accounts, identified areas that needed attention, and organised everything perfectly in line with UK accounting and tax regulations. Their attention to detail and expertise gave me complete confidence that my tax return was accurate and fully compliant.\n\nWhat impressed me most was their dedication to providing personalised support. No question was too small, and they were always available to offer guidance and advice. The entire process was smooth, stress-free, and handled efficiently.\n\nI highly recommend DEDIZIERT to anyone looking for reliable, knowledgeable and professional accounting services. Thank you for your outstanding support and excellent work.",
    name: "Ayesha Butt",
    role: "Founder",
    company: "Mystical Glow",
    rating: 5,
    link: "https://www.etsy.com/shop/Mysticalglowx",
    image: "/images/testimonial-ayesha.jpg",
  },
  {
    quote:
      "I highly recommend her outstanding bookkeeping services. She is extremely accurate, organized, and detail-oriented, ensuring that all financial records are maintained correctly and up to date. Her professionalism and commitment to accuracy have provided me with complete confidence in my financial reporting. She consistently delivers reliable work and is a valuable asset to any business seeking dependable accounting support.",
    name: "Fouzia Sultana",
    role: "Principal",
    company: "Learners House School System",
    rating: 5,
    link: "https://www.facebook.com/share/1CyyeisisV/",
    image: "/images/testimonial-2.jpg",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "What services does DEDIZIERT offer?",
    answer:
      "We provide accounting, bookkeeping, tax advisory, audit & assurance, payroll, business consulting and financial planning — a complete finance function under one roof.",
  },
  {
    question: "What size businesses do you work with?",
    answer:
      "From early-stage startups and sole traders to established SMEs and corporate groups. Our engagements scale to fit your stage and complexity.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Most clients are on transparent fixed-fee monthly packages so there are no surprises. We scope every engagement after a free consultation and quote upfront.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes. Every relationship begins with a complimentary, no-obligation consultation to understand your needs and show how we can help.",
  },
  {
    question: "Which accounting software do you support?",
    answer:
      "We are platform-agnostic and work fluently with QuickBooks, Xero, Sage, NetSuite and more. We can also recommend and implement the right system for you.",
  },
  {
    question: "Can you take over from our current accountant?",
    answer:
      "Absolutely. We manage a structured, deadline-safe handover including reconciling opening balances and liaising with your previous provider.",
  },
  {
    question: "How do you keep our financial data secure?",
    answer:
      "We use encrypted, access-controlled cloud systems, enforce strict confidentiality, and follow rigorous data-protection practices across the firm.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We support businesses operating across multiple jurisdictions, advising on cross-border tax, multi-currency reporting and international compliance.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Onboarding typically takes one to two weeks depending on the engagement. After the consultation, we move quickly to get you set up.",
  },
  {
    question: "Will I have a dedicated point of contact?",
    answer:
      "Always. You are assigned a dedicated accountant or advisor who knows your business and is your consistent point of contact throughout.",
  },
];
