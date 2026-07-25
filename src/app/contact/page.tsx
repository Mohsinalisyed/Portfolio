import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about frontend engineering roles or project work.",
};

export default function ContactPage() {
  return <Contact />;
}
