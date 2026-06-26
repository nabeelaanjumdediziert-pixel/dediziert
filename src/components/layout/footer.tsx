import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";
import {
  LinkedInIcon,
  XIcon,
  FacebookIcon,
  InstagramIcon,
} from "./social-icons";
import { siteConfig, footerLinks } from "@/constants/site";

const socialIcons = [
  { href: siteConfig.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: siteConfig.socials.twitter, label: "X (Twitter)", Icon: XIcon },
  { href: siteConfig.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  {
    href: siteConfig.socials.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/70">
      <div className="container-dz py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Honest. Committed. That&rsquo;s DEDIZIERT.
              <br />
              Accounting, audit, tax and advisory services for ambitious
              businesses.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-secondary-light" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-secondary-light" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <FooterColumn title="Company" links={footerLinks.company} />
          {/* Services */}
          <FooterColumn title="Services" links={footerLinks.services} />

          {/* Newsletter + legal */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Stay Informed
            </h3>
            <p className="mt-4 text-sm text-white/65">
              Insights on tax, audit and growth — straight to your inbox.
            </p>
            <NewsletterForm />
            <ul className="mt-6 space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative inline-block transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-white hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialIcons.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-white/5 hover:text-gold-light"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative inline-block transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-white hover:after:w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
