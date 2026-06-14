# Stravio Digital — Setup Guide

## 1. Clone & install
```bash
git clone https://github.com/YOUR_USERNAME/stravio-digital.git
cd stravio-digital
npm install
```

## 2. Environment variables
Copy `.env.local.example` to `.env.local` and fill in the values:
```bash
cp .env.local.example .env.local
```

### Supabase (lead storage)
1. Go to https://supabase.com and create a free project
2. In the SQL editor, run:
```sql
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```
3. Copy your Project URL and Service Role Key into `.env.local`

### Resend (email notifications)
1. Go to https://resend.com and create a free account
2. Create an API key
3. Add your domain or use the Resend sandbox for testing

## 3. Run locally
```bash
npm run dev
```

## 4. Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Add your `.env.local` variables in the Vercel dashboard under Project > Settings > Environment Variables.

## 5. View leads
Call `GET /api/leads` with header `x-admin-token: YOUR_ADMIN_SECRET` to see all captured leads.
