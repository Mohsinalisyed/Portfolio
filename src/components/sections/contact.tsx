import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaLocationDot, FaGlobe } from "react-icons/fa6";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";

const details = [
  { icon: FaEnvelope, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FaLinkedin, label: "LinkedIn", href: siteConfig.linkedin },
  { icon: FaGlobe, label: "Portfolio", href: "/" },
  { icon: FaLocationDot, label: siteConfig.location, href: undefined },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Have a project in mind or an opening on your team? I'd like to hear about it."
    >
      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col justify-between gap-8 rounded-xl border border-border bg-card p-6">
            <ul className="flex flex-col gap-4">
              {details.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm">
                  <item.icon className="size-4 shrink-0 text-primary" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
