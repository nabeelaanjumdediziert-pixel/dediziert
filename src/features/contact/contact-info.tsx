import { Phone, Mail, Clock, MessageCircle } from "lucide-react";

import { siteConfig } from "@/constants/site";

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: siteConfig.whatsappHref,
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {channels.map(({ icon: Icon, label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={label === "WhatsApp" ? "_blank" : undefined}
              rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:border-primary/20 hover:shadow-card"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="block font-semibold text-primary">
                  {value}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hours */}
      <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
            <Clock className="size-5" />
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Business Hours
          </span>
        </div>
        <ul className="mt-4 space-y-2">
          {siteConfig.hours.map((h) => (
            <li
              key={h.day}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-muted-foreground">{h.day}</span>
              <span className="font-medium text-foreground">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
