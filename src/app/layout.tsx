import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Stravio Digital | Salesforce Consulting for East African SMEs",
  description: "We help SMEs across Rwanda, Kenya and Uganda unlock growth with Salesforce CRM — from implementation to automation and AI.",
  keywords: ["Salesforce consulting", "CRM Rwanda", "Salesforce East Africa", "Sales Cloud", "Service Cloud"],
  openGraph: {
    title: "Stravio Digital",
    description: "Salesforce consulting for East African SMEs",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0F1E] text-[#F8FAFC] antialiased">
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



