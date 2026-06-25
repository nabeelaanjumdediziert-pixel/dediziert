export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  /** Optional paragraph rendered after the list. */
  note?: string;
}

export const legalLastUpdated = "January 15, 2026";

export const termsEffectiveDate = "21 June 2026";

export const termsIntro =
  "Welcome to DEDIZIERT. By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree, please do not use this website.";

export const privacyEffectiveDate = "21 June 2026";

export const privacyIntro =
  "At DEDIZIERT, we respect your privacy and are committed to protecting the information you share through this website.";

export const privacyOutro =
  "By using this website, you agree to this Privacy Policy.";

export const privacyPolicy: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "We only collect the basic information you voluntarily provide to us, namely:",
    ],
    list: [
      "Name",
      "Email address",
      "Contact number",
      "Any other documents shared by you",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    paragraphs: ["Your information may be used to:"],
    list: [
      "Respond to your enquiries",
      "Provide accounting, tax, audit, financial, and advisory services",
      "Communicate with you regarding engagements",
      "Improve the functionality of our website",
      "Meet our legal and regulatory obligations",
    ],
  },
  {
    heading: "3. Confidentiality and Data Protection",
    paragraphs: [
      "We take reasonable administrative and technical measures to protect your information from unauthorised access, disclosure, alteration, or misuse.",
      "Your personal data is handled confidentially and in line with applicable data-protection laws and our professional obligations.",
    ],
  },
  {
    heading: "4. Information Sharing",
    paragraphs: [
      "We do not sell client information. Your information may only be shared in the following circumstances:",
    ],
    list: [
      "With your authorisation",
      "Where required by law or regulation",
      "With professional service providers who assist us in delivering our services",
    ],
  },
  {
    heading: "5. Cookies and Website Analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to improve your experience and help us understand how the site is used. You can manage your cookie preferences through your browser settings.",
    ],
  },
  {
    heading: "6. Data Retention",
    paragraphs: [
      "We retain your information only for as long as necessary to fulfil business, legal, regulatory, or professional purposes.",
    ],
  },
  {
    heading: "7. Third-Party Websites",
    paragraphs: [
      "This website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.",
    ],
  },
  {
    heading: "8. Your Rights",
    paragraphs: ["Subject to applicable law, you may request to:"],
    list: [
      "Access your personal information",
      "Correct inaccurate information",
      "Request deletion of your information where legally permitted",
    ],
    note: "Requests may be submitted using the contact details below.",
  },
  {
    heading: "9. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Updated versions will be posted on this page with the revised effective date.",
    ],
  },
  {
    heading: "10. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy, you can contact DEDIZIERT using the details below.",
    ],
    list: ["Email: contact@dediziert.com", "Phone: +92 334 565 6329"],
  },
];

export const termsConditions: LegalSection[] = [
  {
    heading: "1. Purpose of Website",
    paragraphs: [
      "This website provides general information about our professional services, including accounting, bookkeeping, taxation, audit & assurance, advisory, and related financial services.",
    ],
  },
  {
    heading: "2. No Professional Relationship",
    paragraphs: [
      "Using this website, submitting an enquiry, sending documents, or communicating through this website does not create an accountant–client, consultant–client, or professional engagement relationship. Services begin only after both parties have formally accepted and agreed to an engagement.",
    ],
  },
  {
    heading: "3. Information Disclaimer",
    paragraphs: [
      "The content available on this website is provided for general informational purposes only and should not be treated as accounting, tax, audit, legal, or financial advice. You should obtain professional advice before making any decisions.",
    ],
  },
  {
    heading: "4. Engagement and Fees",
    paragraphs: [
      "Professional services are provided under separate engagement terms. The fees, scope of work, timelines, and deliverables are agreed individually for each client engagement.",
    ],
  },
  {
    heading: "5. Client Responsibilities",
    paragraphs: [
      "Clients are responsible for providing complete, accurate, and timely information and documents. We are not responsible for any consequences arising from incomplete, delayed, inaccurate, or misleading information provided by clients.",
    ],
  },
  {
    heading: "6. Confidentiality",
    paragraphs: [
      "We take reasonable steps to protect client information and maintain confidentiality, except where disclosure is required by law, regulation, or professional obligations, or is authorised by the client.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, DEDIZIERT shall not be liable for any indirect, incidental, consequential, or business losses arising from the use of this website or reliance on the information it contains.",
    ],
  },
  {
    heading: "8. Tax and Regulatory Compliance",
    paragraphs: [
      "Unless otherwise agreed in writing, clients remain responsible for reviewing and approving all returns, submissions, reports, and compliance filings before they are finally submitted.",
    ],
  },
  {
    heading: "9. Intellectual Property",
    paragraphs: [
      "All website content — including text, branding, graphics, design, and materials — is owned by DEDIZIERT and may not be copied, reproduced, or distributed without our prior written permission.",
    ],
  },
  {
    heading: "10. Third-Party Links",
    paragraphs: [
      "This website may contain links to third-party websites for your convenience. We do not control, and accept no responsibility for, the content or services of those third-party websites.",
    ],
  },
  {
    heading: "11. Website Availability",
    paragraphs: [
      "We may update, suspend, or modify this website or its content at any time without prior notice.",
    ],
  },
  {
    heading: "12. Governing Law",
    paragraphs: [
      "These Terms & Conditions are governed by and interpreted in accordance with the laws of Pakistan, and any disputes shall be subject to the jurisdiction of the courts of Pakistan.",
    ],
  },
  {
    heading: "13. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms & Conditions from time to time. The latest version will always be available on this page, and your continued use of the website after any change constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "14. Contact Us",
    paragraphs: [
      "If you have any questions about these Terms & Conditions, you can contact DEDIZIERT using the details below.",
    ],
    list: ["Email: contact@dediziert.com", "Phone: +92 334 565 6329"],
  },
];
