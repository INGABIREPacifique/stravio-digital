import { NextRequest, NextResponse } from "next/server";

// Simple admin endpoint to fetch all leads
// Protect with a secret token in production
export async function GET(req: NextRequest) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const res = await fetch(`${supabaseUrl}/rest/v1/leads?order=created_at.desc`, {
    headers: {
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
