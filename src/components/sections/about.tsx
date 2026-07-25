import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

const highlights = [
  {
    title: "Cross-industry depth",
    body: "Three and a half years shipping production interfaces across Web3/blockchain, AI-powered platforms, FinTech, and eCommerce — each domain with its own performance and trust constraints.",
  },
  {
    title: "Canvas & media tooling",
    body: "Beyond typical CRUD interfaces, I build the harder stuff: Fabric.js canvas editors, drag-and-drop layout engines, and SDK dashboards that other developers integrate against.",
  },
  {
    title: "Performance as a habit",
    body: "Code splitting, lazy loading, and component-architecture decisions aren't an afterthought — they're baked into how I structure every SPA from the start.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Frontend engineering with production mileage"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-lg text-muted-foreground">
            I&apos;m Mohsin Ali Syed, a frontend engineer who specializes in
            React.js and Next.js. Over the last 3.5+ years I&apos;ve moved
            from building responsive marketing sites to architecting
            canvas-based media editors, Web3 wallet interfaces, and crypto
            payment SDKs used by third-party developers.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            What sets my work apart is range: I&apos;m equally comfortable
            wiring up smart contract interactions for a DeFi wallet,
            integrating an AI-assisted layout engine into an eCommerce
            editor, or untangling a legacy component tree to cut render
            times. I care about the details that make an interface feel
            fast and trustworthy — not just that it works, but that it
            holds up under real usage.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
