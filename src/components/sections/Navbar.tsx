"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E]/95 backdrop-blur-md border-b border-[#1B3A6B]/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1B3A6B] flex items-center justify-center">
            <span className="text-white font-bold text-sm font-[Syne]">S</span>
          </div>
          <span className="font-bold text-lg tracking-tight font-[Syne]">
            Stravio<span className="text-[#3B82F6]">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#60A5FA] text-white text-sm font-semibold transition-all duration-200"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#94A3B8]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1B3E] border-t border-[#1B3A6B]/50 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#94A3B8] hover:text-white text-sm font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg bg-[#3B82F6] text-white text-sm font-semibold text-center"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
