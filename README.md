# ChelzzyLive TV

A live television, streaming, and content broadcast web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and embedded **Sanity Studio CMS**, optimized for one-click deployment on **Vercel**.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Headless CMS**: [Sanity Studio](https://www.sanity.io/) embedded at `/studio`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Package Manager**: npm

---

## 🚀 Getting Started

### 1. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Access Embedded Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage:
- **Broadcasts & Live Streams**: Video URLs, scheduled times, live status badges, cover thumbnails.
- **Channels & Categories**: Genre classifications, channel definitions.
- **Site Settings**: Network branding, live ticker alerts, contact details.

### 3. Connect to your Sanity Project

Copy `.env.example` to `.env.local` and add your project ID:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Get your Project ID at [sanity.io/manage](https://www.sanity.io/manage).

---

## 📦 Project Structure

```
chelzzylive_tv_project/
├── sanity.config.ts            # Root Sanity Studio configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout & ChelzzyLive TV metadata
│   │   ├── page.tsx            # Live TV portal, broadcast hero, channel guide
│   │   ├── globals.css         # Tailwind CSS styling
│   │   └── studio/[[...tool]]/ # Embedded Sanity Studio route (/studio)
│   └── sanity/
│       ├── env.ts              # Sanity environment variable validator
│       ├── lib/
│       │   ├── client.ts       # next-sanity client instance
│       │   └── image.ts        # @sanity/image-url builder helper
│       └── schemaTypes/
│           ├── broadcast.ts    # Live broadcast & VOD schema
│           ├── category.ts     # Channel & genre categories
│           ├── siteSettings.ts # Live ticker & site metadata
│           └── index.ts        # Schema collection
├── .env.example                # Environment variable documentation
└── package.json
```

---

## 🚢 Deploying to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Click **Deploy**. Vercel will automatically build and serve the application globally.
