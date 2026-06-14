# Full Deployment Guide
## GitHub → Supabase → Vercel

---

## STEP 1 — GitHub

### 1.1 Initialize git locally
Open the project folder in VS Code terminal:
```bash
cd stravio-digital
git init
git add .
git commit -m "🚀 Initial commit — Stravio Digital website"
```

### 1.2 Create GitHub repo
1. Go to https://github.com/new
2. Name: `stravio-digital`
3. Visibility: **Private** (you can make it public later)
4. Do NOT add README or .gitignore (you already have them)
5. Click **Create repository**

### 1.3 Push your code
GitHub will show you the commands. Run these:
```bash
git remote add origin https://github.com/YOUR_USERNAME/stravio-digital.git
git branch -M main
git push -u origin main
```

✅ Your code is now on GitHub.

---

## STEP 2 — Supabase (lead database)

### 2.1 Create project
1. Go to https://supabase.com → Sign up (free)
2. Click **New project**
3. Name: `stravio-digital`
4. Set a strong database password (save it)
5. Region: Choose closest (e.g. `eu-west-1` for East Africa)
6. Click **Create new project** — wait ~2 min

### 2.2 Create the leads table
1. In your project sidebar → **SQL Editor**
2. Click **New query** and paste this:

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

-- Optional: disable public read access (only your API can read)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
```

3. Click **Run**

### 2.3 Get your API keys
1. Sidebar → **Settings** → **API**
2. Copy:
   - **Project URL** → this is your `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** key (secret) → this is your `SUPABASE_SERVICE_ROLE_KEY`

---

## STEP 3 — Resend (email notifications)

1. Go to https://resend.com → Sign up (free — 3000 emails/month)
2. Go to **API Keys** → Create API key
3. Copy the key → this is your `RESEND_API_KEY`

> **Note:** On the free plan, you can only send to your own verified email until you add a domain. That's fine for now — you'll still receive notifications at pacifiqueingabire222@gmail.com.

---

## STEP 4 — Local .env.local

In your project root, create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...your-key...
RESEND_API_KEY=re_xxxxxxxxxxxx
ADMIN_SECRET=stravio-admin-2026
```

Test locally:
```bash
npm run dev
```
Fill the contact form at http://localhost:3000/contact — check Supabase → Table Editor → leads to confirm the row appears.

---

## STEP 5 — Vercel (deployment)

### 5.1 Connect repo
1. Go to https://vercel.com → Sign up with GitHub
2. Click **Add New Project**
3. Select your `stravio-digital` repo
4. Framework: Next.js (auto-detected)
5. Click **Deploy** — first deploy will fail because no env vars yet

### 5.2 Add environment variables
1. Go to your project → **Settings** → **Environment Variables**
2. Add each one:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | your supabase url |
| `SUPABASE_SERVICE_ROLE_KEY` | your service role key |
| `RESEND_API_KEY` | your resend key |
| `ADMIN_SECRET` | your chosen secret |

3. Click **Redeploy** → **Redeploy** (confirm)

### 5.3 Your site is live 🎉
Vercel gives you a URL like: `stravio-digital.vercel.app`

---

## STEP 6 — Every future update

```bash
# Make your changes in VS Code
git add .
git commit -m "✏️ Update services page"
git push
```

Vercel automatically detects the push and deploys in ~60 seconds. No manual steps.

---

## Viewing your leads

```bash
curl https://stravio-digital.vercel.app/api/leads \
  -H "x-admin-token: stravio-admin-2026"
```

Or open it in a browser extension like **Thunder Client** (VS Code) or **Postman**.

---

## Custom domain (optional, later)

1. Vercel → your project → **Settings** → **Domains**
2. Add `straviodigital.com` (or whatever you buy)
3. Follow the DNS instructions — takes ~10 min

