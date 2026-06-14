"use client";
import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-16 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">Contact</p>
          <h1 className="text-5xl font-bold tracking-tight mb-6">Let's build something<br /><span className="text-[#3B82F6]">together.</span></h1>
          <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl">
            Fill the form below and I'll get back to you within 24 hours. Or book a call directly via LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/40 p-6 flex flex-col gap-4">
              <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold">Contact info</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:pacifiqueingabire222@gmail.com" className="flex items-start gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors">
                  <Mail size={16} className="text-[#3B82F6] mt-0.5 shrink-0" />
                  pacifiqueingabire222@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ingabire-pacifique" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors">
                  <LinkedInIcon size={16} />
                  INGABIRE Pacifique
                </a>
                <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <MapPin size={16} className="text-[#3B82F6] shrink-0" />
                  Kigali, Rwanda
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/40 p-6">
              <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">Response time</p>
              <p className="text-[#94A3B8] text-sm">Usually within <strong className="text-white">24 hours</strong>. For urgent needs, message on LinkedIn.</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {status === "success" ? (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-12 flex flex-col items-center gap-4 text-center">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="text-xl font-bold font-[Syne]">Message sent!</h3>
                <p className="text-[#94A3B8] text-sm">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/40 p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean-Pierre Uwimana"
                      className="px-4 py-3 rounded-xl bg-[#0A0F1E] border border-[#1B3A6B]/60 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jean@company.com"
                      className="px-4 py-3 rounded-xl bg-[#0A0F1E] border border-[#1B3A6B]/60 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide">Company / Organization</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your business name"
                    className="px-4 py-3 rounded-xl bg-[#0A0F1E] border border-[#1B3A6B]/60 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide">What do you need?</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-[#0A0F1E] border border-[#1B3A6B]/60 text-white text-sm focus:outline-none focus:border-[#3B82F6] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="Sales Cloud">Sales Cloud implementation</option>
                    <option value="Service Cloud">Service Cloud implementation</option>
                    <option value="Full CRM">Full CRM (Sales + Service)</option>
                    <option value="Agentforce">Agentforce AI agent</option>
                    <option value="Consultation">Just a consultation</option>
                    <option value="Other">Other / Not sure yet</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-[#94A3B8] font-medium uppercase tracking-wide">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell me about your business and what you're looking to achieve..."
                    className="px-4 py-3 rounded-xl bg-[#0A0F1E] border border-[#1B3A6B]/60 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try emailing directly.</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !form.name || !form.email || !form.message}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send message</>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

