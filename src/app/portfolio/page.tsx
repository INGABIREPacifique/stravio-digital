"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    client: "Valociti Bikes",
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
    client: "Nuru Jamli Homes",
    partners: ["Nuru Jamii Kenya", "Tekgeminus"],
    country: "Kenya",
    tag: "Real Estate CRM",
    color: "#60A5FA",
    summary: "End-to-end CRM implementation for a real estate company. Built property listing platforms, client tracking systems, automated follow-up workflows, and structured data management to support the full property sales lifecycle from lead to closing.",
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
  {
    client: "E-Moll Transportation",
    partners: [],
    country: "Kenya",
    tag: "Notion CRM",
    color: "#2DD4BF",
    summary: "Designed and built a complete Notion CRM for a Kenya-based transportation startup from zero. Structured sales pipeline, managed complex workflows, tracked leads, and ensured all records and follow-ups were systematically stored.",
    phases: [
      "Custom database schemas for clients & shipments",
      "Automated follow-up reminders and task tracking",
      "Lead pipeline visualization & deal stages",
      "Team collaboration & reporting dashboard",
    ],
    result: "End-to-end CRM lifecycle solution",
    tech: ["Notion", "CRM", "Lead Tracking", "Pipeline Management"],
  },
  {
    client: "Anywhere Healing",
    partners: [],
    country: "California, USA",
    tag: "SendPulse CRM",
    color: "#F97316",
    summary: "Built a SendPulse CRM end-to-end for a California-based healthcare startup. Handled prospect to lead follow-up, generated and organized customer data, segmented leads and built nurturing sequences that increased engagement.",
    phases: [
      "Lead capture forms + segmentation logic",
      "Automated email nurture campaigns for patients",
      "CRM pipeline from prospect to conversion",
      "Engagement analytics and reporting",
    ],
    result: "Increased engagement",
    tech: ["SendPulse", "Lead Generation", "Nurturing"],
  },
  {
    client: "Sunshine Electronics",
    partners: [],
    country: "ALX Rwanda",
    tag: "Salesforce Admin",
    color: "#8B5CF6",
    summary: "During ALX Salesforce Administrator training, managed a Salesforce org for Sunshine Electronics. Built lead & tracker management systems, structured pipelines, configured automation flows, created custom objects & validation rules, and built dashboards for performance tracking.",
    phases: [
      "Lead & opportunity management",
      "Custom validation rules & page layouts",
      "Record-triggered flows for automation",
      "Executive dashboards and pipeline reports",
    ],
    result: "Training project completed",
    tech: ["Salesforce", "Admin", "Flow Builder", "Validation Rules"],
  },
];

export default function Portfolio() {
  return (
    <div className="pb-20 pt-16 bg-[#0A0F1E] min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">Featured Implementations</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            Real businesses.<br />
            <span className="text-[#3B82F6]">Real results.</span>
          </h1>
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-2xl">
            Every project is a complete CRM implementation — not a demo, not a sandbox. Production-grade, QA-tested, and handed over to real teams.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div
              key={project.client}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{project.client}</h2>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${project.color}20`, color: project.color }}
                  >
                    {project.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-4 flex-wrap">
                  <span>📍 {project.country}</span>
                  {project.partners.map((partner) => (
                    <span key={partner}>· with {partner}</span>
                  ))}
                </div>
                <p className="text-[#94A3B8] leading-relaxed mb-6">{project.summary}</p>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold w-fit mb-6">
                  <CheckCircle size={14} /> {project.result}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#1B3A6B]/40 border border-[#1B3A6B]/60 text-[#60A5FA] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/60 p-8"
                style={index % 2 === 1 ? { order: 1 } : {}}
              >
                <div
                  className="h-1 w-full rounded-full mb-6"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />
                <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">What was built</p>
                <div className="flex flex-col gap-3">
                  {project.phases.map((phase) => (
                    <div key={phase} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: project.color }} />
                      {phase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[#94A3B8] mb-4">Want a similar result for your business?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold transition-all shadow-lg shadow-blue-500/20"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  );
}