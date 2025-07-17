# GradientAscend Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, gradient designs, and a professional layout perfect for showcasing digital services.

## Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Engaging hover effects and transitions
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom animations
- **Component-Based**: Modular React components for easy maintenance

## Quick Start

```bash
# Clone and setup
npx create-next-app@latest gradientascend-landing --typescript --tailwind --eslint --app --use-npm
cd gradientascend-landing

# Install dependencies
npm install lucide-react
npm install @types/node @types/react @types/react-dom

# Run development server
npm run dev
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── Navigation.tsx    # Responsive navigation
│   │   ├── Services.tsx      # Services showcase
│   │   ├── Projects.tsx      # Portfolio section
│   │   ├── About.tsx         # About section
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer with links
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
```

## Key Components

- **Hero Section**: Eye-catching intro with gradient background
- **Services**: Highlight key offerings with icons
- **Projects**: Showcase portfolio with hover effects
- **About**: Company/team information
- **Contact**: Contact form and information
- **Navigation**: Smooth scrolling navigation

## Customization

- Colors: Modify gradient colors in `tailwind.config.js`
- Content: Update component text and data
- Animations: Adjust timing in CSS and Tailwind config
- Layout: Modify component structure as needed

## Deploy

```bash
npm run build
npm start
```

Perfect for agencies, freelancers, or any business needing a professional web presence.