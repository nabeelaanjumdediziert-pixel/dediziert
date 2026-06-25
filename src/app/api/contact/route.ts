import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { contactSchema } from "@/features/contact/schema";

// SMTP/nodemailer needs the Node.js runtime (not edge).
export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const { name, email, phone, company, service, message } = parsed.data;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? user;

  if (!host || !user || !pass) {
    console.error("Contact form: SMTP env vars are not configured.");
    return NextResponse.json(
      { error: "Email is not configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user, pass },
  });

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Service", service],
  ];

  try {
    await transporter.sendMail({
      from: `"DEDIZIERT Website" <${user}>`,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      text:
        rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
        `\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;color:#1f2937;max-width:560px">
          <h2 style="color:#2f4d88;margin:0 0 12px">New website enquiry</h2>
          <table style="border-collapse:collapse;width:100%;font-size:14px">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:6px 10px;background:#f5f6f8;font-weight:600;width:120px">${k}</td><td style="padding:6px 10px">${v}</td></tr>`,
              )
              .join("")}
          </table>
          <p style="margin:16px 0 4px;font-weight:600">Message</p>
          <p style="white-space:pre-line;font-size:14px;line-height:1.6">${message}</p>
        </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again shortly." },
      { status: 502 },
    );
  }
}
