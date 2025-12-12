# Portable Context Framework - Landing Page

The official landing page for the Portable Context Framework. Built with Next.js 14+ and Tailwind CSS, designed to be deployed as a static site on Cloudflare Pages.

## Overview

This landing page positions the Portable Context Framework as **universal infrastructure for portable context** — starting with AI-assisted coding, extensible to any git-based workflow. It's not just a Claude tool; it's a new category: **Context as Code**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (static export)
- **Language**: TypeScript

## Project Structure

```
landing/
├── app/
│   ├── page.tsx                 # Main landing page
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles & Tailwind
│   └── components/
│       ├── Header.tsx           # Sticky navigation
│       ├── Hero.tsx             # Hero section
│       ├── Problem.tsx          # Problem statement
│       ├── Solution.tsx         # Solution overview
│       ├── HowItWorks.tsx       # Implementation methods
│       ├── UniversalAccess.tsx  # Agent grid
│       ├── WhyGitHub.tsx        # GitHub benefits
│       ├── BeyondCoding.tsx     # Future phases
│       ├── Features.tsx         # Feature cards
│       ├── Roadmap.tsx          # Development timeline
│       ├── Waitlist.tsx         # Waitlist section
│       ├── WaitlistForm.tsx     # Form component
│       └── Footer.tsx           # Footer
├── public/
│   └── assets/
├── package.json
├── next.config.ts               # Static export config
└── README.md
```

## Landing Page Sections

1. **Header**: Sticky navigation with CTA
2. **Hero**: Main value proposition and visual
3. **Problem**: The cost of context fragmentation
4. **Solution**: Three-column capture/store/access flow
5. **How It Works**: MCP Server, Git Hooks, CLI tool
6. **Universal Access**: Works with any AI agent
7. **Why GitHub**: Benefits of git-native context
8. **Beyond Coding**: Future phases (docs, design, ops)
9. **Features**: Core principles
10. **Roadmap**: Development timeline
11. **Waitlist**: Early access signup form
12. **Footer**: Links and company info

## Development

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Test production build locally
npx serve@latest out
```

## Building for Production

The site is configured for static export. Build with:

```bash
npm run build
```

This generates a static site in the `./out` directory that can be deployed to any static hosting provider.

## Deployment

### Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Pages dashboard
   - Connect GitHub repository
   - Select `/landing` directory as root

2. **Build Configuration**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: 18 or higher

3. **Environment Variables** (optional)
   - None required for current version

4. **Custom Domain** (when ready)
   - Add custom domain: `context.wundr.space`
   - Configure DNS in Cloudflare

### Alternative Deployment Options

The static output in `./out` can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

## Styling Guidelines

### Color Palette

- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#8b5cf6` (Purple)
- **Warm**: `#f59e0b` (Orange accent)
- **Neutral**: Shades from 50-900

### Typography

- System fonts stack for fast loading
- Responsive sizes using Tailwind's text utilities
- Hierarchy: h1 (5xl-6xl), h2 (3xl-4xl), h3 (2xl-3xl)

### Spacing

- Sections: `py-20 lg:py-32`
- Containers: `px-6 max-w-7xl mx-auto`
- Generous whitespace following Wundr Space aesthetic

## Waitlist Form

Currently logs submissions to console. To integrate with email service:

1. Choose provider (Convertkit, Mailchimp, etc.)
2. Update `WaitlistForm.tsx` handleSubmit function
3. Add API endpoint or service integration
4. Test submission flow

## Design Reference

Matches the styling and tone of **wundr.space**:
- Clean, spacious layouts with generous whitespace
- Warm, human-centered messaging
- Professional but approachable
- Clear typography with excellent hierarchy

## Key Messaging

Throughout the page, we emphasize:
1. **Universal, not Claude-specific**: Works with ANY AI coding agent
2. **GitHub-native**: Context lives where code lives
3. **Extensible**: Starting with coding, extending everywhere
4. **Open**: No lock-in, standard formats, open source
5. **Team-focused**: Context for teams, not just individuals

## Contributing

To modify the landing page:

1. Edit components in `app/components/`
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Verify output in `./out` directory
5. Deploy to Cloudflare Pages

## License

See main repository LICENSE file.

## Contact

- Email: pcf@wundr.space
- Website: https://wundr.space
- GitHub: https://github.com/Wundr-Space/portable-context-framework
