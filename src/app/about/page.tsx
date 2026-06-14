import { Award, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const milestones = [
  { year: "2023", event: "Started studying Salesforce platform" },
  { year: "2024", event: "Completed Salesforce-focused program" },
  { year: "2025", event: "Conam Launchpad & Nuru Jamii Kenya Launchpad" },
  { year: "2025", event: "Delivered Velociti Bike CRM (Sales + Service Cloud)" },
  { year: "2025", event: "Delivered Jamii Homes Real Estate CRM" },
  { year: "2026", event: "Founded Stravio Digital · Pursuing Platform Developer I" },
];

export default function About() {
  return (
    <div className="pt-16 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">About</p>
          <h1 className="text-5xl font-bold tracking-tight mb-6">The person behind<br /><span className="text-[#3B82F6]">Stravio Digital.</span></h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            A Salesforce developer and consultant based in Kigali, Rwanda — building CRM systems that help African businesses grow with confidence.
          </p>
        </div>

        {/* Profile card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/60 p-6 flex flex-col gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1B3A6B] flex items-center justify-center text-3xl font-bold font-[Syne]">
                P
              </div>
              <div>
                <h2 className="text-xl font-bold font-[Syne]">INGABIRE Pacifique</h2>
                <p className="text-[#60A5FA] text-sm font-medium">Salesforce Developer & Consultant</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-[#94A3B8]">
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#3B82F6]" /> Kigali, Rwanda</span>
                <span className="flex items-center gap-2"><Award size={14} className="text-[#3B82F6]" /> Salesforce Platform Developer I (pursuing)</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ingabire-pacifique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#60A5FA] text-sm hover:bg-[#3B82F6]/20 transition-all"
              >
                <LinkedInIcon size={14} /> LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            <p className="text-[#94A3B8] leading-relaxed">
              I've been working with the Salesforce platform since 2023 and have delivered end-to-end CRM implementations for two real businesses — <strong className="text-white">Velociti Bike</strong> and <strong className="text-white">Jamii Homes Real Estate</strong> — covering Sales Cloud, Service Cloud, Agentforce AI agents, Knowledge Base, and executive reporting.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              I've been trained through the <strong className="text-white">Conam Launchpad</strong> (Africa Ohana) and <strong className="text-white">Nuru Jamii Kenya Launchpad</strong> programs, and presented live Salesforce demos at the Africa Ohana Program Accelerator. I'm currently pursuing the <strong className="text-white">Salesforce Platform Developer I (PDI)</strong> certification.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              I founded Stravio Digital to bring professional Salesforce consulting to SMEs across East Africa — businesses that deserve the same tools as large enterprises, implemented by someone who understands their context.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {["Sales Cloud", "Service Cloud", "Agentforce", "Flow Builder", "Apex", "LWC", "Omni-Channel", "Reports & Dashboards"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-[#1B3A6B]/40 border border-[#1B3A6B]/60 text-[#60A5FA] text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-8">Journey</p>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-[#3B82F6] bg-[#0A0F1E] flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-[#1B3A6B]/50 my-1" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs text-[#3B82F6] font-semibold uppercase tracking-widest flex items-center gap-1 mb-1">
                    <Calendar size={12} /> {m.year}
                  </span>
                  <p className="text-sm text-[#94A3B8] group-hover:text-white transition-colors">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border border-[#1B3A6B]/50 rounded-2xl p-10 bg-[#0D1B3E]/40">
          <h3 className="text-2xl font-bold mb-3">Let's work together</h3>
          <p className="text-[#94A3B8] mb-6 text-sm">Book a free 30-minute call to discuss your Salesforce needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold transition-all">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

