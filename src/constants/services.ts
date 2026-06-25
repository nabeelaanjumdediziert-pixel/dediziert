import {
  Calculator,
  BookOpen,
  Receipt,
  ShieldCheck,
  Wallet,
  Briefcase,
  LineChart,
} from "lucide-react";
import type { Service } from "@/types";

const defaultProcess = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We learn your business, goals and current financial position in a focused consultation.",
  },
  {
    step: 2,
    title: "Assessment",
    description:
      "Our specialists review your records, systems and compliance status to find gaps and opportunities.",
  },
  {
    step: 3,
    title: "Planning",
    description:
      "We build a tailored engagement plan with clear deliverables, timelines and ownership.",
  },
  {
    step: 4,
    title: "Execution",
    description:
      "We deliver the work to professional standards, keeping you informed at every milestone.",
  },
  {
    step: 5,
    title: "Ongoing Support",
    description:
      "We monitor performance, file on time and advise proactively as your business evolves.",
  },
];

export const services: Service[] = [
  {
    slug: "accounting",
    title: "Accounting",
    icon: Calculator,
    summary:
      "Accurate financial statements and management reporting that give you a clear, real-time picture of your business.",
    overview:
      "Our accounting service turns raw transactions into decision-ready financial intelligence. We maintain your general ledger, reconcile accounts, and produce timely management accounts and statutory financial statements — all aligned with GAAP/IFRS. The result is a finance function you can rely on, whether you are reporting to a board, raising capital, or simply trying to understand your margins.",
    image: "/images/service-accounting.jpg",
    benefits: [
      "Monthly management accounts delivered on a fixed schedule",
      "GAAP/IFRS-compliant statutory financial statements",
      "Real-time dashboards for cash, revenue and margin",
      "Clean, audit-ready ledgers all year round",
      "Dedicated accountant who knows your business",
    ],
    process: defaultProcess,
    faqs: [
      {
        question: "Which accounting software do you support?",
        answer:
          "We work across QuickBooks, Xero, Sage, NetSuite and most major platforms. If you have no system yet, we will recommend and implement the right one for your stage.",
      },
      {
        question: "How quickly will I receive monthly accounts?",
        answer:
          "Management accounts are typically delivered within 7–10 business days of month-end, with a review call to walk you through the numbers.",
      },
      {
        question: "Can you take over from our current accountant?",
        answer:
          "Yes. We manage a structured handover, reconcile opening balances and ensure no filing deadlines are missed during the transition.",
      },
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    icon: BookOpen,
    summary:
      "Clean, current and reconciled records — the dependable foundation every other financial decision rests on.",
    overview:
      "Bookkeeping is where financial accuracy begins. We record and categorise every transaction, reconcile your bank and card feeds, manage accounts payable and receivable, and keep your books continuously up to date. With DEDIZIERT, your records are always ready for tax, audit or funding — never a year-end scramble.",
    image: "/images/service-bookkeeping.jpg",
    benefits: [
      "Daily or weekly transaction categorisation",
      "Automated bank and credit-card reconciliation",
      "Accounts payable and receivable management",
      "Always audit- and tax-ready records",
      "Clear visibility of who owes you and what you owe",
    ],
    process: defaultProcess,
    faqs: [
      {
        question: "Do you offer catch-up bookkeeping?",
        answer:
          "Absolutely. We regularly bring months — or years — of backlogged books fully up to date and reconciled before moving you onto a clean ongoing cadence.",
      },
      {
        question: "How do you handle receipts and documents?",
        answer:
          "We use secure cloud capture tools so you can snap or forward receipts and we attach them to the right transaction automatically.",
      },
      {
        question: "Is bookkeeping included with accounting?",
        answer:
          "It can be bundled or kept separate. Many clients combine both for a seamless end-to-end finance function under one team.",
      },
    ],
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory",
    icon: Receipt,
    summary:
      "Proactive tax planning and precise compliance that minimise liability and keep you on the right side of every deadline.",
    overview:
      "Tax should be planned, not reacted to. Our advisors design strategies that legally reduce your liability while keeping you fully compliant across corporate, personal, sales and international tax. We handle preparation and filing, respond to authority queries, and keep you ahead of legislative change so there are no surprises at year-end.",
    image: "/images/service-tax-advisory.jpg",
    benefits: [
      "Year-round, proactive tax planning",
      "Accurate corporate and personal tax filings",
      "Sales tax / VAT and cross-border guidance",
      "Representation in tax authority correspondence",
      "Strategies that maximise legitimate reliefs and credits",
    ],
    process: defaultProcess,
    faqs: [
      {
        question: "Can you help reduce our tax bill legally?",
        answer:
          "Yes — through allowances, credits, structuring and timing strategies that are fully compliant. We never recommend aggressive or risky schemes.",
      },
      {
        question: "Do you handle multi-state or international tax?",
        answer:
          "We do. We advise on nexus, transfer pricing, treaties and cross-border obligations for businesses operating across jurisdictions.",
      },
      {
        question: "What if we receive an audit notice?",
        answer:
          "We represent you end-to-end — preparing documentation, responding to queries and liaising directly with the authority on your behalf.",
      },
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    icon: ShieldCheck,
    summary:
      "Independent, rigorous audits that build the trust investors, lenders and regulators expect.",
    overview:
      "Assurance is about credibility. Our audit teams apply a risk-based methodology to test your financial statements, internal controls and processes, delivering an independent opinion stakeholders can rely on. Beyond the statutory opinion, we surface practical recommendations that strengthen controls and reduce risk across your organisation.",
    image: "/images/service-audit.jpg",
    benefits: [
      "Statutory and voluntary financial statement audits",
      "Risk-based methodology focused on what matters",
      "Internal controls review and recommendations",
      "Credibility with investors, banks and regulators",
      "Clear management letters with actionable findings",
    ],
    process: defaultProcess,
    faqs: [
      {
        question: "How long does an audit take?",
        answer:
          "Timelines depend on size and complexity, but most SME audits run 3–6 weeks from planning to sign-off when records are well maintained.",
      },
      {
        question: "Will an audit disrupt our operations?",
        answer:
          "We plan around your calendar and use secure document portals to minimise disruption, requesting information in structured, batched lists.",
      },
      {
        question: "Do you offer assurance short of a full audit?",
        answer:
          "Yes — reviews, agreed-upon procedures and compilation engagements are available where a full statutory audit is not required.",
      },
    ],
  },
  {
    slug: "payroll",
    title: "Payroll",
    icon: Wallet,
    summary:
      "Accurate, on-time payroll with full statutory compliance — so your team is always paid right.",
    overview:
      "Payroll errors damage trust and invite penalties. We run your payroll end-to-end: calculating pay, taxes and deductions, filing statutory returns, issuing payslips, and managing benefits and pensions. Whether you have five employees or five hundred, payroll runs accurately and on time, every cycle.",
    image: "/images/service-payroll.jpg",
    benefits: [
      "Accurate gross-to-net calculations every cycle",
      "Automatic statutory filings and deductions",
      "Digital payslips and self-service for employees",
      "Pension, benefits and leave administration",
      "Scales seamlessly as your headcount grows",
    ],
    process: defaultProcess,
    faqs: [
      {
        question: "Can you handle multiple pay schedules?",
        answer:
          "Yes — weekly, bi-weekly and monthly cycles can run in parallel, including contractor and commission-based payments.",
      },
      {
        question: "Do you manage year-end payroll filings?",
        answer:
          "We prepare and submit all year-end statements and employee tax documents, and reconcile them against your ledger.",
      },
      {
        question: "Is employee data kept secure?",
        answer:
          "All payroll data is handled in encrypted, access-controlled systems with strict confidentiality and data-protection safeguards.",
      },
    ],
  },
  {
    slug: "business-consulting",
    title: "Business Consulting",
    icon: Briefcase,
    summary:
      "Strategy, operations and financial leadership that turn ambition into measurable, sustainable growth.",
    overview:
      "Numbers only matter if they drive better decisions. Our consultants combine financial insight with operational experience to help you improve margins, raise capital, enter new markets and build scalable processes. From fractional CFO support to one-off strategic projects, we sit alongside your leadership team as trusted advisors.",
    image: "/images/team-group.jpg",
    benefits: [
      "Fractional CFO and financial leadership",
      "Profitability, pricing and margin analysis",
      "Fundraising and investor-readiness support",
      "Budgeting, KPIs and performance dashboards",
      "Process and systems improvement",
    ],
    process: defaultProcess,
    faqs: [
      {
        question: "What is a fractional CFO?",
        answer:
          "It is senior financial leadership on a part-time basis — strategy, fundraising and board-level reporting — without the cost of a full-time hire.",
      },
      {
        question: "Do you help with raising investment?",
        answer:
          "Yes. We build models, prepare data rooms, refine your narrative and support due diligence through to close.",
      },
      {
        question: "Can you work on a single project?",
        answer:
          "Definitely. Many engagements are scoped, fixed-outcome projects such as a pricing review, budget build or systems migration.",
      },
    ],
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    icon: LineChart,
    summary:
      "Forecasting, budgeting and capital planning that give you the confidence to invest and scale.",
    overview:
      "Growth requires a plan. We build robust financial models, rolling forecasts and scenario analyses so you can see the impact of every decision before you make it. From cash-flow runway to capital allocation, our planning service gives founders and finance leaders the foresight to act decisively.",
    image: "/images/service-accounting.jpg",
    benefits: [
      "Three-statement financial models",
      "Rolling forecasts and cash-flow runway analysis",
      "Scenario and sensitivity planning",
      "Capital allocation and investment appraisal",
      "Board-ready reporting packs",
    ],
    process: defaultProcess,
    faqs: [
      {
        question: "How detailed are your financial models?",
        answer:
          "We build fully integrated three-statement models with driver-based assumptions you can flex, plus clear scenario toggles.",
      },
      {
        question: "How often should forecasts be updated?",
        answer:
          "We recommend a rolling monthly or quarterly cadence so your plan always reflects the latest actuals and market conditions.",
      },
      {
        question: "Can planning integrate with our accounting?",
        answer:
          "Yes — when we handle your accounting too, actuals flow straight into the model so forecasts stay current automatically.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
