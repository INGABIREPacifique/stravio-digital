import Link from "next/link";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";

const services = [
  { icon: "⚡", title: "Sales Cloud", desc: "Lead management, pipeline tracking, and forecasting built for your sales team." },
  { icon: "🎧", title: "Service Cloud", desc: "Case management, SLA entitlements, and AI-powered service agents." },
  { icon: "🤖", title: "Agentforce AI", desc: "Deploy intelligent service agents that handle client queries 24/7." },
  { icon: "📊", title: "Dashboards & Reports", desc: "Executive-ready insights so you always know where your business stands." },
  { icon: "🔗", title: "Integrations", desc: "Connect Salesforce with your existing tools — web, email, WhatsApp and more." },
  { icon: "🎓", title: "Training & Handover", desc: "Your team fully trained and confident before we hand over the keys." },
];

const stats = [
  { value: "2", label: "Full CRM Implementations" },
  { value: "3", label: "Countries Served" },
  { value: "100%", label: "QA Pass Rate" },
];

const trusted = [
  "Africa Ohana", "CONAM Launchpad", "Nuru Jamii Kenya", "Tekgeminus"
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1B3A6B]/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#60A5FA] text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            Salesforce Consulting · East Africa
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 glow-text">
            Your CRM should work<br />
            <span className="text-[#3B82F6]">as hard as you do.</span>
          </h1>

          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            We implement Salesforce end-to-end for SMEs in Rwanda, Kenya, and Uganda —
            so your team spends less time in spreadsheets and more time closing deals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold text-base transition-all duration-200 glow"
            >
              Book a free call <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1B3A6B] hover:border-[#3B82F6]/50 text-[#94A3B8] hover:text-white font-semibold text-base transition-all duration-200"
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569]">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#3B82F6]/50" />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-3 gap-8 border border-[#1B3A6B]/50 rounded-2xl p-8 bg-[#0D1B3E]/50">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-[#3B82F6] font-[Syne] mb-1">{s.value}</p>
              <p className="text-[#94A3B8] text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">What we do</p>
          <h2 className="text-4xl font-bold tracking-tight">End-to-end Salesforce,<br />done right.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="gradient-border rounded-xl p-6 hover:bg-[#0D1B3E]/80 transition-all duration-300 group"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-bold text-lg mb-2 font-[Syne] group-hover:text-[#60A5FA] transition-colors">{s.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">Why Stravio</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Built for African businesses, not copy-pasted from elsewhere.</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-8">
              Most Salesforce consultants work from a template. We don't. Every implementation is designed around how your business actually operates — your team, your clients, your market.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: Users, text: "Delivered real projects with real businesses" },
                { icon: TrendingUp, text: "Certified, community-trained expertise" },
                { icon: Shield, text: "Full QA before every handover" },
                { icon: CheckCircle, text: "Ongoing support after go-live" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <Icon size={18} className="text-[#3B82F6] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/60 p-8">
              <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-6">Programs & Community</p>
              <div className="flex flex-col gap-4">
                {trusted.map((name) => (
                  <div key={name} className="flex items-center gap-3 py-3 border-b border-[#1B3A6B]/30 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-8 py-12 mb-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0D1B3E] via-[#1B3A6B]/30 to-[#0D1B3E] border border-[#3B82F6]/20 p-12 text-center">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to transform your business with Salesforce?</h2>
            <p className="text-[#94A3B8] mb-8 max-w-lg mx-auto">Let's talk. Book a free 30-minute discovery call and we'll show you exactly what's possible.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold transition-all duration-200 glow"
            >
              Book a free call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
