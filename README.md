# Mind+ Website

Landing page and research showcase for the university project:

Mind+ - A Digital Companion for Academic Stress Management

## Overview

This website presents the Mind+ concept to students, evaluators, researchers, and potential investors. It is built as a single-page, responsive experience with a modern visual style and structured research narrative.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)

## Key Sections

The page includes:

- Hero
- Problem
- Solution
- Core Components (Features)
- Demo Preview
- How It Works (Architecture)
- Results and Impact
- Why We Are Different
- Team
- Research
- Contact and CTA

## Project Structure

- app/page.tsx: Main one-page UI and content
- app/layout.tsx: Root layout, fonts, metadata
- app/globals.css: Global styles, gradients, animations
- public/demo: Brand assets and demo images (logo files)
- public/team: Team member profile images

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Available Scripts

- npm run dev: Start development server
- npm run build: Build for production
- npm run start: Run production build
- npm run lint: Run ESLint checks

## Content and Asset Updates

### Update Team Members

Edit the `team` array in `app/page.tsx`:

- name
- role
- image
- imageAlt

Place team images in `public/team` and reference them with paths like `/team/member-01.png`.

### Update Logo

Current logo assets are in `public/demo`.

To change the navbar logo, update the `Image` source in `app/page.tsx` (currently pointing to `/demo/Logo2.png`).

### Update Core Components

Edit the `features` array in `app/page.tsx` to change:

- feature title
- short description
- icon mapping

## Notes

- The navbar is fixed at the top for quick section navigation.
- Smooth scrolling and fade-in animations are enabled.
- Layout is responsive for mobile, tablet, and desktop.

## Deployment

This is a standard Next.js app and can be deployed on Vercel or any Node.js hosting platform.

Example Vercel flow:

1. Push repository to GitHub
2. Import project in Vercel
3. Deploy with default Next.js settings
