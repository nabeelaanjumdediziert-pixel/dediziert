"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/constants/services";
import { fadeUp } from "@/lib/motion";

const contactSchema = z.object({
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

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactValues) => {
    // Simulated submit — no backend wired up. Replace with a Route Handler
    // or email provider to send for real.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.info("Contact form submission:", data);
    reset();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center rounded-2xl border border-border bg-white p-10 text-center shadow-soft"
        role="status"
        aria-live="polite"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-primary-50 text-primary">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-primary">Message Sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. One of our advisors will be in touch
          within one business day.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-border bg-white p-7 shadow-soft md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name?.message} required>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message} required>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>

        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Service of Interest"
          htmlFor="service"
          error={errors.service?.message}
          required
        >
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="service"
                  aria-invalid={!!errors.service}
                  className="w-full"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.slug} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="Other / Not sure yet">
                    Other / Not sure yet
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
          required
        >
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us a little about your business and how we can help..."
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        </Field>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-7 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send />
          </>
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-primary">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
