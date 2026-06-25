import type { BlogPost } from "@/types";

export const blogCategories = [
  "All",
  "Tax",
  "Accounting",
  "Audit",
  "Advisory",
  "Payroll",
  "Startups",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "year-end-tax-planning-checklist",
    title: "The Year-End Tax Planning Checklist Every Business Needs",
    excerpt:
      "Proactive moves before the close of the financial year can meaningfully reduce your liability. Here is the checklist our advisors run with clients.",
    category: "Tax",
    author: "Usman Tariq",
    authorRole: "Head of Tax",
    date: "2025-11-18",
    readTime: 7,
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    tags: ["tax planning", "compliance", "year-end"],
    content: [
      {
        type: "paragraph",
        text: "Tax planning is most effective when it happens before the year closes, not after. The weeks leading up to year-end are your last chance to take legitimate actions that lower your liability and improve your position for the year ahead.",
      },
      { type: "heading", text: "Review your profit position early" },
      {
        type: "paragraph",
        text: "Start with an accurate forecast of taxable profit. With a reliable estimate in hand, you can model the impact of timing decisions — accelerating deductible expenditure, deferring income, or making capital investments before the deadline.",
      },
      { type: "heading", text: "Key actions to consider" },
      {
        type: "list",
        items: [
          "Maximise allowable deductions and capital allowances",
          "Review pension and retirement contributions",
          "Confirm you have claimed all eligible reliefs and credits",
          "Assess timing of asset purchases and disposals",
          "Ensure documentation supports every position taken",
        ],
      },
      {
        type: "quote",
        text: "The businesses that pay the least tax are not the ones with clever schemes — they are the ones that plan early and claim everything they are legitimately entitled to.",
      },
      { type: "heading", text: "Document everything" },
      {
        type: "paragraph",
        text: "Every position you take should be supported by clear records. Good documentation is your best protection in the event of a query and ensures you never leave a legitimate claim on the table.",
      },
    ],
  },
  {
    slug: "cash-flow-management-for-startups",
    title: "Cash Flow Management: The Skill That Keeps Startups Alive",
    excerpt:
      "Profit is an opinion; cash is a fact. Here is how early-stage companies can build a cash discipline that survives the lean months.",
    category: "Startups",
    author: "Ayesha Khan",
    authorRole: "Head of Advisory",
    date: "2025-10-29",
    readTime: 6,
    coverImage:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
    tags: ["cash flow", "startups", "forecasting"],
    content: [
      {
        type: "paragraph",
        text: "More startups fail from running out of cash than from a lack of profit. A profitable company can still collapse if money leaves faster than it arrives. That is why cash-flow management is the single most important financial discipline for any early-stage business.",
      },
      { type: "heading", text: "Build a rolling 13-week forecast" },
      {
        type: "paragraph",
        text: "A 13-week cash-flow forecast gives you a clear, near-term view of every inflow and outflow. Updated weekly, it turns cash from a source of anxiety into a managed variable you can act on with confidence.",
      },
      { type: "heading", text: "Protect your runway" },
      {
        type: "list",
        items: [
          "Invoice promptly and chase receivables relentlessly",
          "Negotiate supplier terms to match your cash cycle",
          "Keep a clear view of your runway in months, not just dollars",
          "Separate one-off spikes from recurring burn",
        ],
      },
      {
        type: "quote",
        text: "Know your runway to the week. The founders who survive downturns are the ones who never have to guess how much time they have left.",
      },
    ],
  },
  {
    slug: "preparing-for-your-first-audit",
    title: "Preparing for Your First Audit Without the Stress",
    excerpt:
      "A first audit feels daunting, but with the right preparation it is straightforward. Here is how to be ready and confident.",
    category: "Audit",
    author: "Bilal Ahmed",
    authorRole: "Director of Audit & Assurance",
    date: "2025-10-12",
    readTime: 8,
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    tags: ["audit", "assurance", "compliance"],
    content: [
      {
        type: "paragraph",
        text: "An audit is not an exam you can fail — it is an independent verification that builds trust with investors, lenders and regulators. With good records and early preparation, your first audit can be smooth and even genuinely useful.",
      },
      { type: "heading", text: "Get your records audit-ready" },
      {
        type: "paragraph",
        text: "Auditors work most efficiently when your books are clean, reconciled and well documented. Reconcile your bank accounts, tidy your ledgers and ensure supporting documents are easy to locate before fieldwork begins.",
      },
      { type: "heading", text: "What auditors will ask for" },
      {
        type: "list",
        items: [
          "Reconciled bank and control accounts",
          "Supporting invoices and contracts for major balances",
          "A fixed-asset register and depreciation schedule",
          "Evidence of internal controls and approvals",
        ],
      },
      {
        type: "paragraph",
        text: "Treat the management letter that follows as a gift: it highlights exactly where your controls and processes can be strengthened for next year.",
      },
    ],
  },
  {
    slug: "choosing-the-right-accounting-software",
    title: "How to Choose the Right Accounting Software for Your Stage",
    excerpt:
      "QuickBooks, Xero, Sage or NetSuite? The right choice depends less on features and more on where your business is heading.",
    category: "Accounting",
    author: "Nabeela Anjum",
    authorRole: "Founder & Managing Partner",
    date: "2025-09-24",
    readTime: 6,
    coverImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    tags: ["accounting", "software", "systems"],
    content: [
      {
        type: "paragraph",
        text: "The best accounting software is the one that fits your stage, your team and your growth plans. Chasing features you will never use is a common and costly mistake.",
      },
      { type: "heading", text: "Match the tool to your stage" },
      {
        type: "list",
        items: [
          "Early-stage: prioritise simplicity, automation and bank feeds",
          "Scaling: look for multi-entity, inventory and reporting depth",
          "Enterprise: demand integrations, controls and audit trails",
        ],
      },
      {
        type: "quote",
        text: "Choose the platform you will still be comfortable on in three years — migrations are painful, so buy a little ahead of where you are today.",
      },
      {
        type: "paragraph",
        text: "Whatever you choose, the system is only as good as the process around it. Clean data in means useful insight out.",
      },
    ],
  },
  {
    slug: "understanding-saas-metrics",
    title: "ARR, MRR and Churn: SaaS Metrics Investors Actually Care About",
    excerpt:
      "If you run a subscription business, these are the numbers that define your valuation. Here is what they mean and how to track them.",
    category: "Advisory",
    author: "Ayesha Khan",
    authorRole: "Head of Advisory",
    date: "2025-09-08",
    readTime: 7,
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tags: ["saas", "metrics", "startups"],
    content: [
      {
        type: "paragraph",
        text: "Subscription businesses live and die by a handful of metrics. Get them right and you speak the same language as your investors; get them wrong and you erode confidence fast.",
      },
      { type: "heading", text: "The core metrics" },
      {
        type: "list",
        items: [
          "MRR / ARR — predictable recurring revenue",
          "Gross and net revenue churn",
          "Customer acquisition cost (CAC) and payback period",
          "Lifetime value (LTV) and the LTV:CAC ratio",
        ],
      },
      {
        type: "paragraph",
        text: "Consistency matters more than perfection. Define each metric clearly, calculate it the same way every period, and reconcile it back to your accounting records so the story holds up under diligence.",
      },
    ],
  },
  {
    slug: "payroll-compliance-essentials",
    title: "Payroll Compliance Essentials Every Employer Should Know",
    excerpt:
      "Payroll errors are costly and damage trust. These are the fundamentals that keep you compliant and your team confident.",
    category: "Payroll",
    author: "Usman Tariq",
    authorRole: "Head of Tax",
    date: "2025-08-19",
    readTime: 5,
    coverImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    tags: ["payroll", "compliance", "employees"],
    content: [
      {
        type: "paragraph",
        text: "Payroll is one of the few areas where a small mistake has an immediate, visible impact — on your people and on your compliance standing. Getting the fundamentals right protects both.",
      },
      { type: "heading", text: "The non-negotiables" },
      {
        type: "list",
        items: [
          "Correct worker classification (employee vs contractor)",
          "Accurate tax and statutory deductions every cycle",
          "On-time filings and payments to authorities",
          "Clear, compliant payslips and record retention",
        ],
      },
      {
        type: "quote",
        text: "Your team notices payroll more than any other financial process. Reliability here is reliability everywhere.",
      },
    ],
  },
  {
    slug: "fractional-cfo-when-do-you-need-one",
    title: "Fractional CFO: When Does Your Business Actually Need One?",
    excerpt:
      "You may not need a full-time finance chief yet — but you might need the strategic firepower. Here is how to know.",
    category: "Advisory",
    author: "Nabeela Anjum",
    authorRole: "Founder & Managing Partner",
    date: "2025-07-30",
    readTime: 6,
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    tags: ["cfo", "advisory", "growth"],
    content: [
      {
        type: "paragraph",
        text: "There is a stage where bookkeeping is no longer enough but a full-time CFO is hard to justify. That gap is exactly where a fractional CFO earns their keep.",
      },
      { type: "heading", text: "Signs it is time" },
      {
        type: "list",
        items: [
          "You are raising capital or preparing for diligence",
          "Decisions increasingly hinge on financial modelling",
          "Your board wants sharper, forward-looking reporting",
          "Cash and margin questions are keeping you up at night",
        ],
      },
      {
        type: "paragraph",
        text: "A fractional CFO gives you senior strategic leadership — modelling, fundraising and board reporting — at a fraction of the cost, scaling up only when you genuinely need a full-time hire.",
      },
    ],
  },
  {
    slug: "financial-clarity-driving-growth",
    title: "Why Financial Clarity Is the Real Engine of Growth",
    excerpt:
      "Growth is not just about selling more. It is about understanding your numbers well enough to make better decisions, faster.",
    category: "Advisory",
    author: "Ayesha Khan",
    authorRole: "Head of Advisory",
    date: "2025-07-11",
    readTime: 5,
    coverImage:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80",
    tags: ["growth", "strategy", "reporting"],
    content: [
      {
        type: "paragraph",
        text: "Every confident decision a leadership team makes rests on a clear view of the numbers. When financial clarity is missing, decisions slow down, risk goes unmanaged, and opportunities are missed.",
      },
      { type: "heading", text: "Clarity compounds" },
      {
        type: "paragraph",
        text: "Reliable, timely management information lets you spot trends early, allocate capital wisely and move faster than competitors who are still guessing. Over time, that advantage compounds.",
      },
      {
        type: "quote",
        text: "You cannot improve what you cannot see. Financial clarity is not a back-office function — it is a growth strategy.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter(
      (post) => post.slug !== slug && post.category === current.category,
    )
    .concat(
      blogPosts.filter(
        (post) => post.slug !== slug && post.category !== current.category,
      ),
    )
    .slice(0, limit);
}
