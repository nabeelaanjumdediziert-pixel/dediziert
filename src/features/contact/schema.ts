import { z } from "zod";

/** Shared by the client form and the /api/contact route handler. */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  company: z.string().optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please tell us a little more (10+ characters)."),
});

export type ContactValues = z.infer<typeof contactSchema>;
