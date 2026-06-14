import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Save to Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseKey,
          "Authorization": `Bearer ${supabaseKey}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({ name, email, company, service, message, created_at: new Date().toISOString() }),
      });
    }

    // 2. Send email notification via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Stravio Digital <noreply@straviodigital.com>",
          to: ["pacifiqueingabire222@gmail.com"],
          subject: `New lead: ${name} (${company || "no company"})`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3B82F6;">New Contact Form Lead</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; color: #666;">Name</td><td style="padding: 8px; font-weight: bold;">${name}</td></tr>
                <tr><td style="padding: 8px; color: #666;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; color: #666;">Company</td><td style="padding: 8px;">${company || "—"}</td></tr>
                <tr><td style="padding: 8px; color: #666;">Service</td><td style="padding: 8px;">${service || "—"}</td></tr>
                <tr><td style="padding: 8px; color: #666;">Message</td><td style="padding: 8px;">${message}</td></tr>
              </table>
            </div>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
