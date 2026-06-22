# saleh.dev — Personal Portfolio

My personal portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.  
Live at: [saleh.dev](https://salehdev.ir)

---

## Overview

A minimal, dark-themed portfolio showcasing my work experience, projects, and skills as a backend developer. The site features a split-screen hero with interactive hover effects, a timeline-based experience section, and a dedicated about page with my background and story.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vps

## Features

- Responsive design — mobile, tablet, desktop
- Interactive hero section with DevOps/Backend split on desktop
- Timeline-based work history with company links
- Dedicated `/about` page with detailed background
- Downloadable resume (PDF)
- Contact section with Telegram, Email, GitHub, LinkedIn, Phone
- SEO optimized with Open Graph and Twitter meta tags
- Custom SVG favicon
- Smooth scroll navigation

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── globals.css           # Global styles + Tailwind theme
│   ├── icon.svg              # Favicon
│   ├── layout.tsx            # Root layout + SEO metadata
│   └── page.tsx              # Home page
├── public/
│   ├── images/
│   │   └── profile.jpg       # Profile photo
│   └── resume.pdf            # Downloadable resume
├── src/
│   ├── components/
│   │   ├── About.tsx          # About section
│   │   ├── Contact.tsx        # Contact form + social links
│   │   ├── Experience.tsx     # Work history timeline
│   │   ├── Footer.tsx         # Footer with social icons
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Projects.tsx       # Projects showcase
│   │   └── Skills.tsx         # Tech stack grid
│   └── data/
│       └── resume.ts          # All personal/professional data
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# Clone
git clone https://github.com/SalehGoML/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Data

All personal info, skills, experience, and project data lives in `src/data/resume.ts`. Update that single file to change content across the entire site.

## Deployment

Deployed on Vercel. Push to `main` triggers automatic deployment.

```bash
npx vercel --prod
```

## License

MIT

---

Built by [Saleh Askarzadeh](https://github.com/SalehGoML)
