import { ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    client: "Velociti Bike",
    partners: ["Africa Ohana", "CONAM"],
    country: "Rwanda",
    tag: "Sales Cloud + Service Cloud",
    color: "#3B82F6",
    summary: "Full Salesforce CRM implementation for a bicycle company — covering the entire customer journey from lead to service resolution.",
    phases: [
      "Lead management & Web-to-Lead capture",
      "Opportunity pipeline with custom stages",
      "SLA entitlements & case escalation rules",
      "Service Cloud case management",
      "Agentforce AI service agent deployment",
      "Embedded Messaging on company website",
      "Knowledge Base with article management",
      "CEO executive dashboard & reports",
    ],
    result: "37/37 QA PASS — fully live",
    tech: ["Sales Cloud", "Service Cloud", "Agentforce", "Flow Builder", "Omni-Channel", "LWR/Headless"],
  },
  {
    client: "Jamii Homes Real Estate",
    partners: ["Nuru Jamii Kenya", "Tekgeminus"],
    country: "Kenya",
    tag: "Sales Cloud",
    color: "#60A5FA",
    summary: "Salesforce CRM implementation for a real estate company, streamlining property listings, lead tracking, and client pipeline management.",
    phases: [
      "Property listing object & custom fields",
      "Lead capture & qualification process",
      "Agent pipeline and opportunity tracking",
      "Client communication history",
      "Sales reporting & team dashboards",
    ],
    result: "Delivered end-to-end",
    tech: ["Sales Cloud", "Flow Builder", "Reports & Dashboards", "Custom Objects"],
  },
];

export default function Portfolio() {
  return (
    <div className="pt-16 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">Portfolio</p>
          <h1 className="text-5xl font-bold tracking-tight mb-6">Real businesses.<br /><span className="text-[#3B82F6]">Real results.</span></h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Every project is a complete CRM implementation — not a demo, not a sandbox. Production-grade, QA-tested, and handed over to real teams.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((p) => (
            <div
              key={p.client}
              className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/40 overflow-hidden"
            >
              {/* Top bar */}
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold font-[Syne]">{p.client}</h2>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${p.color}20`, color: p.color }}>
                        {p.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                      <span>📍 {p.country}</span>
                      <span>·</span>
                      {p.partners.map((partner) => (
                        <span key={partner}>in partnership with {partner}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold whitespace-nowrap">
                    <CheckCircle size={13} /> {p.result}
                  </div>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{p.summary}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">What was built</p>
                    <div className="flex flex-col gap-2">
                      {p.phases.map((phase) => (
                        <div key={phase} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                          {phase}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">Tech used</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-[#1B3A6B]/40 border border-[#1B3A6B]/60 text-[#60A5FA] text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#94A3B8] mb-4">Want a similar result for your business?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold transition-all">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
