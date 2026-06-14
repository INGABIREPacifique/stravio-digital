# Stravio Digital — Company Website

> Salesforce consulting for East African SMEs · Built with Next.js + Tailwind

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

---

## Pages
- `/` — Home (hero, services, why us, CTA)
- `/about` — Profile, skills, journey timeline
- `/services` — Service packages + process
- `/portfolio` — Velociti Bike & Jamii Homes case studies
- `/blog` — Articles on Salesforce & East African business
- `/contact` — Lead capture form

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS — navy/dark blue theme
- **Lead storage:** Supabase
- **Email notifications:** Resend
- **Deployment:** Vercel

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/stravio-digital.git
cd stravio-digital

# 2. Install
npm install

# 3. Environment variables
cp .env.local.example .env.local
# → Fill in Supabase and Resend keys (see SETUP.md)

# 4. Run
npm run dev
# → Open http://localhost:3000
```

## Environment Variables

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | supabase.com → Project → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | supabase.com → Project → Settings → API |
| `RESEND_API_KEY` | resend.com → API Keys |
| `ADMIN_SECRET` | Choose any strong secret string |

## Deployment

Push to GitHub → connect repo on vercel.com → add env variables → deploy. Every `git push` auto-deploys.

## Viewing Leads

```bash
curl https://your-site.vercel.app/api/leads \
  -H "x-admin-token: YOUR_ADMIN_SECRET"
```

---

Built in Kigali 🇷🇼 by [INGABIRE Pacifique](https://www.linkedin.com/in/ingabire-pacifique)
