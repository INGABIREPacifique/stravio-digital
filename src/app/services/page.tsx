import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tag: "Perfect for small teams",
    price: "Custom quote",
    features: [
      "Sales Cloud setup (leads, accounts, opportunities)",
      "Basic pipeline and forecast reports",
      "Email-to-case or Web-to-Lead",
      "1 executive dashboard",
      "Team training (up to 5 users)",
      "2 weeks post-launch support",
    ],
    cta: "Get a quote",
    highlight: false,
  },
  {
    name: "Growth",
    tag: "Most popular",
    price: "Custom quote",
    features: [
      "Everything in Starter",
      "Service Cloud + case management",
      "SLA entitlements & escalation rules",
      "Knowledge Base setup",
      "Omni-Channel routing",
      "Advanced automation (Flows)",
      "4 weeks post-launch support",
    ],
    cta: "Get a quote",
    highlight: true,
  },
  {
    name: "Enterprise",
    tag: "For scaling businesses",
    price: "Custom quote",
    features: [
      "Everything in Growth",
      "Agentforce AI service agent",
      "Embedded Messaging (web/WhatsApp)",
      "Custom Apex development",
      "Third-party integrations",
      "CEO/executive dashboard suite",
      "Ongoing retainer available",
    ],
    cta: "Let's talk",
    highlight: false,
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn your business, goals, and current pain points. No sales pitch — just listening." },
  { step: "02", title: "Scope & Proposal", desc: "We map out exactly what we'll build, the timeline, and what you'll need from your team." },
  { step: "03", title: "Implementation", desc: "We build in phases with regular checkpoints so you're never left wondering what's happening." },
  { step: "04", title: "QA & Testing", desc: "Full quality assurance before anything goes live. Every scenario tested." },
  { step: "05", title: "Training & Go-Live", desc: "Your team trained and confident. We stay close for post-launch support." },
];

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">Services</p>
          <h1 className="text-5xl font-bold tracking-tight mb-6">Salesforce built properly,<br /><span className="text-[#3B82F6]">the first time.</span></h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            From a basic Sales Cloud setup to a full AI-powered service operation — we scope it right and build it to last.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${
                p.highlight
                  ? "bg-gradient-to-b from-[#1B3A6B]/60 to-[#0D1B3E] border-2 border-[#3B82F6]/60 relative"
                  : "border border-[#1B3A6B]/50 bg-[#0D1B3E]/40"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#3B82F6] text-white text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold font-[Syne] mb-1">{p.name}</h3>
                <p className="text-[#94A3B8] text-sm">{p.tag}</p>
              </div>
              <div className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                    <Check size={15} className="text-[#3B82F6] mt-0.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                    p.highlight
                      ? "bg-[#3B82F6] hover:bg-[#60A5FA] text-white"
                      : "border border-[#1B3A6B] hover:border-[#3B82F6]/50 text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {p.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">How we work</p>
          <h2 className="text-4xl font-bold tracking-tight mb-12">Our process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <div key={step.step} className="flex flex-col gap-3 relative">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-[#1B3A6B] font-[Syne]">{step.step}</span>
                  {i < process.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
                  )}
                </div>
                <h3 className="font-bold text-sm font-[Syne]">{step.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
