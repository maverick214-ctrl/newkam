# Khushboo Shukla - Portfolio Website

A modern, elegant, and responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with purple accent colors and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Scroll-triggered fade-in effects and hover animations
- **Professional Sections**:
  - Hero section with contact information
  - Professional summary
  - Education timeline
  - Project showcase with tech stack badges
  - Internship experience
  - Skills & tools organized by category
  - Certifications
  - Extracurricular activities

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment on Vercel

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Run the deployment command:
```bash
vercel
```

3. Follow the prompts to link your project and deploy

### Method 2: Deploy via Vercel Dashboard

1. Push your code to GitHub

2. Go to [Vercel Dashboard](https://vercel.com/new)

3. Import your GitHub repository

4. Vercel will automatically detect the Vite configuration

5. Click "Deploy"

### Method 3: Deploy via GitHub Integration

1. Push your code to GitHub

2. Connect your GitHub repository to Vercel

3. Vercel will automatically deploy on every push to your main branch

## Project Structure

```
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles and animations
│   └── vite-env.d.ts     # TypeScript definitions
├── public/               # Static assets
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── README.md             # This file
```

## Customization

### Updating Content

All content is in `src/App.tsx`. Update the following sections:

- **Personal Information**: Lines 44-70 (Hero section)
- **Professional Summary**: Lines 94-96
- **Education**: Lines 116-141
- **Projects**: Lines 160-220
- **Internship**: Lines 238-252
- **Skills**: Lines 270-334
- **Certifications**: Lines 353-371
- **Extracurricular**: Lines 391-393

### Changing Colors

The color scheme uses Tailwind CSS classes. Main accent colors are:
- `purple-*` for primary elements
- `pink-*` for secondary accents
- `gray-*` for text and backgrounds

Update these in `src/App.tsx` to change the color scheme.

### Adding Animations

Custom animations are defined in `src/index.css`:
- `animate-blob` - Floating background blobs
- `animate-float` - Floating avatar
- `animate-fade-in-up` - Scroll-triggered fade-in

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Khushboo Shukla. All rights reserved.

## Contact

- **Email**: khushbooshukla047@gmail.com
- **LinkedIn**: [linkedin.com/in/khushboo-shukla-96745b315](https://www.linkedin.com/in/khushboo-shukla-96745b315/)
- **Location**: Ujjain (M.P.), 456001
