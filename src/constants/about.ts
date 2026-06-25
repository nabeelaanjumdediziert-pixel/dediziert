import {
  Target,
  Eye,
  Feather,
  ShieldCheck,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import type {
  TeamMember,
  CoreValue,
  TimelineEvent,
  Achievement,
} from "@/types";

export const missionHeading =
  "Simplifying finance for the businesses that need it most";

export const missionStatement =
  "To simplify compliance, taxation, and financial management for SMEs, corporates and startups through AI-powered accounting services that are fast, accurate, and built for businesses where every financial decision counts.";

export const visionHeading =
  "The financial backbone of every business we serve";

export const visionStatement =
  "To be the financial backbone of every business we serve, transforming financial complexity into clarity that builds confidence, control, and lasting financial independence.";

export const companyStory = [
  "DEDIZIERT was founded by Nabeela Anjum, ACMA, on a simple conviction: that great financial work is not just about compliance — it is about clarity, trust and a genuinely personal service. Too many businesses are treated as account numbers and handed reports they cannot use by firms they rarely hear from.",
  "We do things differently. As a dedicated, founder-led practice, every client works directly with people who know their business by name. We pair professional, ACMA-qualified expertise with modern, AI-powered workflows to deliver accurate, reliable and cost-effective accounting, tax and advisory support.",
  "From startups and small businesses to established organisations — at home and internationally — we give every client meticulous work, clear advice and a partner who is genuinely invested in their success. We are dedicated to accuracy, and committed to your growth.",
];

export const whyWeExist =
  "Because businesses deserve a financial partner who is as invested in their success as they are. We exist to remove financial uncertainty — turning complex numbers into clear decisions, and compliance burdens into competitive advantage.";

export const coreValues: CoreValue[] = [
  {
    title: "Integrity & Honesty",
    description:
      "We do the right thing, always — even when no one is watching. Honest, transparent advice underpins every engagement.",
    icon: ShieldCheck,
  },
  {
    title: "Simplicity",
    description:
      "We make finance straightforward — turning complex numbers, jargon and compliance into clear, simple decisions you can act on.",
    icon: Feather,
  },
  {
    title: "Self-Reliance & Empowerment",
    description:
      "We don't just hand over reports — we empower you to understand your finances and become confident and self-reliant in managing them.",
    icon: UserCheck,
  },
  {
    title: "Growth & Success",
    description:
      "We are relentlessly focused on your long-term growth and success — helping your business grow stronger, smarter and further.",
    icon: TrendingUp,
  },
];

export const team: TeamMember[] = [
  {
    name: "Nabeela Anjum",
    role: "ACMA · Founder & Managing Partner",
    bio: "An ACMA-qualified finance professional, Nabeela founded DEDIZIERT to bring rigour and a genuinely personal approach to accounting, tax and advisory.",
    image: "/images/team-nabeela.png",
  },
  {
    name: "Asad Khan",
    role: "ACMA · Business Advisory Consultant",
    bio: "An ACMA-qualified advisor, Asad partners with us as a consultant — bringing strategic perspective to complex business and financial decisions.",
    image: "/images/team-asad.jpg",
  },
  {
    name: "Saim Shams",
    role: "Bookkeeping & Accounts — Trainee",
    bio: "Saim supports our bookkeeping and accounts function, keeping client records accurate, reconciled and up to date.",
    image: "/images/team-saim.jpeg",
  },
];

export const achievements: Achievement[] = [
  { value: "500+", label: "Clients Served" },
  { value: "20+", label: "Years of Experience" },
  { value: "15+", label: "Industries Served" },
  { value: "$2B+", label: "Assets Under Advisory" },
  { value: "98%", label: "Client Retention" },
  { value: "40+", label: "Specialist Advisors" },
];

export const aboutTimeline: TimelineEvent[] = [
  {
    year: "2004",
    title: "Founded",
    description:
      "DEDIZIERT opens its doors with a small team and a big belief in client-first accounting.",
  },
  {
    year: "2009",
    title: "Audit Practice Launched",
    description:
      "We add full statutory audit and assurance capabilities, earning the trust of investors and lenders.",
  },
  {
    year: "2014",
    title: "Advisory & Tax Expansion",
    description:
      "Our advisory and tax teams scale, introducing fractional CFO services for fast-growing companies.",
  },
  {
    year: "2019",
    title: "Cloud-First Transformation",
    description:
      "We go fully cloud-native, delivering real-time reporting and digital collaboration to every client.",
  },
  {
    year: "2024",
    title: "500+ Clients & Growing",
    description:
      "Two decades on, we serve more than 500 clients across 15 industries — still dedicated to accuracy.",
  },
];

export const missionVisionIcons = { mission: Target, vision: Eye };
