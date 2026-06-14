import { CheckCircle } from "lucide-react";
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
    align: "left",
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
    align: "right",
  },
  {
    client: "E-Moti Transportation",
    partners: ["Kenya Startup"],
    country: "Kenya",
    tag: "Notion CRM",
    color: "#3B82F6",
    summary: "Designed and built a complete Notion CRM from scratch for a Kenya-based transportation startup, structuring sales pipelines, campaigns, and lead tracking from the ground up.",
    phases: [
      "Notion workspace & database architecture",
      "Sales pipeline structure & stages",
      "Lead capture and qualification tracking",
      "Campaign management workflows",
      "Centralized record-keeping for follow-ups",
      "End-to-end CRM lifecycle handover",
    ],
    result: "Delivered end-to-end",
    tech: ["Notion", "CRM Design", "Pipeline Mgmt", "Lead Tracking"],
    align: "left",
  },
  {
    client: "Anywhere Healing",
    partners: ["California Healthcare Startup"],
    country: "USA",
    tag: "SendPulse CRM",
    color: "#60A5FA",
    summary: "Built a SendPulse CRM end-to-end for a California-based healthcare startup, organizing prospect lists, lead generation, and nurturing sequences that increased engagement.",
    phases: [
      "Prospect list building & organization",
      "Lead generation workflows",
      "Pipeline management setup",
      "Customer data segmentation",
      "Automated nurturing sequences",
      "Outreach and follow-up tracking",
    ],
    result: "Delivered end-to-end",
    tech: ["SendPulse", "Lead Generation", "Segmentation", "Nurturing"],
    align: "right",
  },
  {
    client: "Sunshine Electronics",
    partners: ["ALX Salesforce Training"],
    country: "Rwanda",
    tag: "Salesforce Admin",
    color: "#3B82F6",
    summary: "During ALX Salesforce Administrator training, managed a Salesforce org for Sunshine Electronics — building lead & broker management systems, structured pipelines, and automation flows.",
    phases: [
      "Lead & broker management system design",
      "Structured sales pipelines",
      "Automation flow configuration",
      "Custom objects & validation rules",
      "Performance tracking dashboards",
    ],
    result: "Training project — completed",
    tech: ["Salesforce", "Admin", "Automation", "ALX"],
    align: "left",
  },
];

export default function Portfolio() {
  return (
    <div className="pb-20" style={{ paddingTop: "60px" }}>
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">Portfolio</p>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Real businesses.<br /><span className="text-[#3B82F6]">Real results.</span>
          </h1>
          <p className="text-[#94A3B8] text-xl leading-relaxed max-w-2xl">
            Every project is a complete CRM implementation — not a demo, not a sandbox. Production-grade, QA-tested, and handed over to real teams.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((p, i) => (
            <div key={p.client} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              
              {/* Info side */}
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h2 className="text-3xl font-bold font-[Syne]">{p.client}</h2>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${p.color}20`, color: p.color }}>
                    {p.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-4 flex-wrap">
                  <span>📍 {p.country}</span>
                  {p.partners.map((partner) => (
                    <span key={partner}>· with {partner}</span>
                  ))}
                </div>
                <p className="text-[#94A3B8] leading-relaxed mb-6">{p.summary}</p>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold w-fit mb-6">
                  <CheckCircle size={14} /> {p.result}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[#1B3A6B]/40 border border-[#1B3A6B]/60 text-[#60A5FA] text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* What was built */}
              <div className={`rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/60 p-8 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                <div className="h-1 w-full rounded-full mb-6" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">What was built</p>
                <div className="flex flex-col gap-3">
                  {p.phases.map((phase) => (
                    <div key={phase} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: p.color }} />
                      {phase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#94A3B8] mb-4">Want a similar result for your business?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold transition-all">
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  );
}