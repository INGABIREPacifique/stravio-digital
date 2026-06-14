import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[#1B3A6B]/50 bg-[#0D1B3E]/30 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1B3A6B] flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg tracking-tight font-[Syne]">
              Stravio<span className="text-[#3B82F6]">.</span>
            </span>
          </div>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            Salesforce consulting for growing SMEs across Rwanda, Kenya and Uganda.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/ingabire-pacifique"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1B3A6B]/50 flex items-center justify-center hover:bg-[#3B82F6] transition-colors"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href="mailto:pacifiqueingabire222@gmail.com"
              className="w-9 h-9 rounded-lg bg-[#1B3A6B]/50 flex items-center justify-center hover:bg-[#3B82F6] transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">Navigation</p>
          <div className="flex flex-col gap-3">
            {["/about", "/services", "/portfolio", "/blog", "/contact"].map((href) => (
              <Link
                key={href}
                href={href}
                className="text-[#94A3B8] hover:text-white text-sm transition-colors capitalize"
              >
                {href.replace("/", "")}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-4">Get in Touch</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:pacifiqueingabire222@gmail.com" className="text-[#94A3B8] hover:text-white text-sm transition-colors">
              pacifiqueingabire222@gmail.com
            </a>
            <p className="text-[#94A3B8] text-sm">Kigali, Rwanda</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg border border-[#3B82F6]/40 text-[#60A5FA] hover:bg-[#3B82F6]/10 text-sm font-medium transition-all w-fit"
            >
              Book a free call <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1B3A6B]/30 max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <p className="text-[#475569] text-xs">© 2026 Stravio Digital. All rights reserved.</p>
        <p className="text-[#475569] text-xs">Built in Kigali 🇷🇼</p>
      </div>
    </footer>
  );
}
