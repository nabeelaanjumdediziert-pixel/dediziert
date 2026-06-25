import {
  ScanLine,
  BarChart3,
  Receipt,
  ShieldCheck,
  Radar,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Faq } from "@/types";

export interface AiCapability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aiCapabilities: AiCapability[] = [
  {
    title: "Document & Data-Entry Automation",
    description:
      "AI reads invoices, receipts and statements, extracts the data and posts it to the right accounts — eliminating hours of manual entry.",
    icon: ScanLine,
  },
  {
    title: "Real-Time Financial Reporting",
    description:
      "Live dashboards for cash, revenue and margin update automatically, so you always know where the business stands.",
    icon: BarChart3,
  },
  {
    title: "Automated Tax Preparation",
    description:
      "AI assembles and checks your filings against the latest rules, flagging reliefs and risks before anything is submitted.",
    icon: Receipt,
  },
  {
    title: "AI-Assisted Audit & Compliance",
    description:
      "Every transaction is screened against controls and regulations, surfacing exceptions for our specialists to review.",
    icon: ShieldCheck,
  },
  {
    title: "Anomaly & Fraud Detection",
    description:
      "Pattern-recognition models continuously watch for duplicates, outliers and suspicious activity across your ledgers.",
    icon: Radar,
  },
  {
    title: "Forecasting & Predictive Insights",
    description:
      "Scenario models and rolling forecasts turn your numbers into forward-looking guidance you can act on with confidence.",
    icon: TrendingUp,
  },
];

export const aiUseCases = [
  {
    area: "Bookkeeping",
    text: "Auto-categorised transactions and continuous bank reconciliation keep your books clean in real time.",
  },
  {
    area: "Tax",
    text: "Smart checks catch errors and missed reliefs before filing, reducing liability and risk.",
  },
  {
    area: "Audit",
    text: "Full-population testing instead of samples — AI reviews 100% of transactions for stronger assurance.",
  },
  {
    area: "Advisory",
    text: "Predictive models give founders and CFOs board-ready foresight on cash, growth and risk.",
  },
];

export const aiFaqs: Faq[] = [
  {
    question: "Will AI replace my accountant?",
    answer:
      "No. AI handles the repetitive, high-volume work so our chartered accountants can focus on judgement, strategy and advice. Every output is reviewed and signed off by a qualified professional.",
  },
  {
    question: "Is my financial data secure with AI tools?",
    answer:
      "Yes. Data is processed in encrypted, access-controlled systems, never used to train public models, and handled under strict confidentiality and data-protection standards.",
  },
  {
    question: "How accurate is AI-assisted work?",
    answer:
      "AI dramatically reduces manual error and reviews far more data than any person could — but a human expert always validates the results before they reach you.",
  },
  {
    question: "Do I need new software to benefit from this?",
    answer:
      "Not necessarily. Our AI layer works on top of the tools you already use — QuickBooks, Xero, Sage and more — so you get the upside without disruption.",
  },
];
