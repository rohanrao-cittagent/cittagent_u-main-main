# Cittagent Technologies Website

A premium, high-performance corporate website for Cittagent Technologies, built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Prerequisites

- Node.js v20 or higher
- npm (comes with Node.js)

## Installation

1. Clone or navigate to the project directory:
```bash
cd /Users/manash/Desktop/UI
```

2. Install dependencies:
```bash
npm install
```

## Running the Development Server

To start the development server:

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

## Stopping the Development Server

To stop the server:
- Press `Ctrl + C` in the terminal where the server is running

## Building for Production

To create an optimized production build:

```bash
npm run build
```

## Starting Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
/Users/manash/Desktop/UI/
├── app/                    # Next.js App Router files
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── navbar.tsx         # Navigation bar
│   ├── hero.tsx           # Hero section with LivePulse
│   ├── live-pulse.tsx     # Animated data stream visualization
│   ├── social-proof.tsx   # Partner logos
│   ├── feature-grid.tsx   # IoT Services & Data Analytics grid
│   ├── how-it-works.tsx   # 3-step timeline
│   ├── footer.tsx         # Footer section
│   └── ui/                # Shadcn UI components
├── lib/                   # Utility functions
├── public/                # Static assets
└── package.json           # Dependencies and scripts

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

- **Live Pulse Effect:** Animated IoT data stream in Hero section
- **Scroll-triggered Animations:** Feature cards fade in and slide up
- **Staggered Hero Animations:** Text elements animate in sequence
- **Pulsing IoT Icons:** Glowing sensor icons in "How It Works"
- **Dark Mode:** Industrial luxury theme with electric blue and neon green accents

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js): https://vercel.com
- **Netlify**
- **AWS Amplify**
- Any platform that supports Next.js

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Environment Variables

Currently no environment variables required for development.

# Cittagent-ui-Phase0
