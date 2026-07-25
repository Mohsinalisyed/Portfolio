"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PHONE_REGEX = /^\d{11,15}$/;

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_REGEX.test(values.phone)) {
    errors.phone = "Enter a valid phone number (11-15 digits).";
  }
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Contact form isn't configured yet. Please email me directly.");
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(serviceId, templateId, { ...values }, { publicKey });
      toast.success("Message sent — I'll get back to you soon.");
      setSubmitted(true);
      setValues(initialValues);
    } catch {
      toast.error("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={values.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="mt-1.5"
          aria-invalid={!!errors.fullName}
        />
        {errors.fullName && (
          <p className="mt-1.5 text-xs text-destructive">{errors.fullName}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1.5"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="mt-1.5"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="mt-1.5"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-fit">
        {submitting ? "Sending..." : "Send Message"}
      </Button>

      {submitted && (
        <p className="text-sm text-primary">
          Thanks for reaching out — I&apos;ll reply as soon as I can.
        </p>
      )}
    </form>
  );
}
