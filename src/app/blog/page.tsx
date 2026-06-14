import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "why-east-african-smes-need-crm",
    title: "Why East African SMEs Need a CRM Before They Think They Do",
    excerpt: "Most small businesses in Rwanda and Kenya manage clients in WhatsApp groups and Excel sheets. Here's why that works until it suddenly doesn't.",
    date: "June 2026",
    readTime: "5 min read",
    tag: "Strategy",
  },
  {
    slug: "salesforce-agentforce-explained",
    title: "Agentforce Explained: What It Is and What It Can Do For Your Business",
    excerpt: "Agentforce isn't just a chatbot. It's an AI service agent that can resolve client issues, escalate cases, and learn from your Knowledge Base — without a human in the loop.",
    date: "May 2026",
    readTime: "7 min read",
    tag: "Salesforce",
  },
  {
    slug: "velociti-bike-case-study",
    title: "How We Built a Full CRM for Velociti Bike: Lessons From a Real Project",
    excerpt: "8 phases, 37 test cases, one 37/37 QA pass score. Here's what it actually takes to deliver a production Salesforce org from scratch.",
    date: "April 2026",
    readTime: "10 min read",
    tag: "Case Study",
  },
];

const tagColors: Record<string, string> = {
  Strategy: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  Salesforce: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "Case Study": "text-green-400 bg-green-400/10 border-green-400/30",
};

export default function Blog() {
  return (
    <div className="pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-semibold mb-3">Blog</p>
          <h1 className="text-5xl font-bold tracking-tight mb-6">Insights on<br /><span className="text-[#3B82F6]">Salesforce & growth.</span></h1>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Practical articles on CRM strategy, Salesforce features, and building better businesses across East Africa.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/40 p-8 hover:border-[#3B82F6]/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${tagColors[post.tag]}`}>
                  {post.tag}
                </span>
                <span className="text-[#475569] text-xs flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
                <span className="text-[#475569] text-xs">{post.date}</span>
              </div>

              <h2 className="text-xl font-bold font-[Syne] mb-3 group-hover:text-[#60A5FA] transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{post.excerpt}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] text-sm font-medium transition-colors"
              >
                Read article <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-[#1B3A6B]/50 bg-[#0D1B3E]/30 text-center">
          <p className="text-[#94A3B8] text-sm mb-2">More articles coming soon.</p>
          <p className="text-[#475569] text-xs">Follow on LinkedIn for the latest updates.</p>
          <a
            href="https://www.linkedin.com/in/ingabire-pacifique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[#60A5FA] hover:text-white text-sm font-medium transition-colors"
          >
            LinkedIn → INGABIRE Pacifique
          </a>
        </div>
      </div>
    </div>
  );
}



