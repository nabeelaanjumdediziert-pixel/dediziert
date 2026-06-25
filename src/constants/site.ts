import type { NavItem } from "@/types";

export const siteConfig = {
  name: "DEDIZIERT",
  legalName: "DEDIZIERT Advisory LLP",
  tagline: "Dedicated to Accuracy. Committed to Growth.",
  description:
    "DEDIZIERT delivers premium accounting, audit, tax and advisory services that help startups, SMEs and corporates scale with financial clarity and confidence.",
  url: "https://www.dediziert.com",
  // Absolute URL so it works as an OG/Twitter card and in JSON-LD without
  // depending on a generated route. Swap for a branded asset before launch.
  ogImage:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=630&q=80",
  email: "contact@dediziert.com",
  // International format so clients can call/WhatsApp from anywhere
  phone: "+92 334 565 6329",
  phoneHref: "tel:+923345656329",
  whatsapp: "+92 334 565 6329",
  whatsappHref: "https://wa.me/923345656329",
  address: {
    line1: "120 Wall Street, 18th Floor",
    line2: "New York, NY 10005",
    country: "United States",
  },
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/dediziert",
    twitter: "https://twitter.com/dediziert",
    facebook: "https://www.facebook.com/dediziert",
    instagram: "https://www.instagram.com/dediziert",
  },
  // Privacy-friendly Google Maps embed (no API key required).
  mapEmbedUrl:
    "https://www.google.com/maps?q=120+Wall+Street+New+York&output=embed",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Accounting",
        href: "/services/accounting",
        description: "Accurate books and management reporting.",
      },
      {
        label: "Bookkeeping",
        href: "/services/bookkeeping",
        description: "Day-to-day records kept clean and current.",
      },
      {
        label: "Tax Advisory",
        href: "/services/tax-advisory",
        description: "Plan, file and stay compliant year-round.",
      },
      {
        label: "Audit & Assurance",
        href: "/services/audit-assurance",
        description: "Independent assurance stakeholders trust.",
      },
      {
        label: "Payroll",
        href: "/services/payroll",
        description: "Accurate, on-time, fully compliant payroll.",
      },
      {
        label: "Business Consulting",
        href: "/services/business-consulting",
        description: "Strategy and operations that drive growth.",
      },
      {
        label: "Financial Planning",
        href: "/services/financial-planning",
        description: "Forecasting and capital planning that scales.",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Accounting", href: "/services/accounting" },
    { label: "Tax Advisory", href: "/services/tax-advisory" },
    { label: "Audit & Assurance", href: "/services/audit-assurance" },
    { label: "Payroll", href: "/services/payroll" },
    { label: "Business Consulting", href: "/services/business-consulting" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
