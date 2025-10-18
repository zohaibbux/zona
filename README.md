# Zona Scientific - Next.js Website

This is a modern, responsive Next.js application for Zona Scientific, a laboratory equipment and scientific solutions provider.

## Features

- ✅ Modern Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for responsive styling
- ✅ Mobile-optimized design
- ✅ SEO-friendly structure
- ✅ Fast image optimization with Next.js Image
- ✅ Descriptive image naming convention
- ✅ Smooth scroll navigation
- ✅ Interactive hover effects

## Image Naming Convention

All images have been renamed with descriptive names for better organization:

### Logos

- `logo-zona-scientific.png` - Main company logo
- `footer-logo-white.png` - White logo for footer

### Hero & Backgrounds

- `hero-laboratory-background.png` - Hero section background
- `products-section-background.png` - Products section background

### Service Images

- `service-importing-image.png` - Importing service showcase
- `service-distributing-image.png` - Distributing service showcase
- `importing-service-photo.jpeg` - Importing page photo
- `distributing-service-photo.png` - Distributing page photo

### Product Images

- `lab-equipment-showcase.png` - Lab equipment showcase
- `chemical-salts-image.png` - Chemical salts visual
- `lab-graded-acids-image.png` - Lab graded acids visual

### About & Mission

- `about-us-laboratory.png` - About us section image
- `promise-partnership-image.png` - Promise page image

### Icons

- `icon-mission.png` - Mission icon
- `icon-promise-heart.png` - Promise heart icon
- `icon-lab-equipment.png` - Lab equipment icon
- `icon-chemical-flask.png` - Chemical flask icon
- `icon-acid-flask.png` - Acid flask icon
- `icon-calendar-schedule.png` - Calendar/schedule icon
- `icon-dentist-service.png` - Service icon

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
zona/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── mission/             # Mission page
│   ├── promise/             # Promise page
│   ├── importing/           # Importing service page
│   ├── distributing/        # Distributing service page
│   ├── lab-equipments/      # Lab equipments product page
│   ├── chemical-salts/      # Chemical salts product page
│   └── graded-acids/        # Graded acids product page
├── components/              # Reusable components
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets (images)
└── ...config files

```

## Pages

- **Home** (`/`) - Main landing page with hero, about, services, and products
- **Mission** (`/mission`) - Company mission statement
- **Promise** (`/promise`) - Company promise and values
- **Importing** (`/importing`) - Importing services
- **Distributing** (`/distributing`) - Distribution services
- **Lab Equipments** (`/lab-equipments`) - Lab equipment products
- **Chemical Salts** (`/chemical-salts`) - Chemical salts products
- **Lab Graded Acids** (`/graded-acids`) - Lab graded acids products

## Responsive Design

The application is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Color Scheme

- Primary: #2A3D98 (Blue)
- Secondary: #4FE5B5 (Teal/Green)
- Background: White (#FFFFFF)

## Contact Information

- **Phone:** +92 3322902327
- **Email:** zohaibbux3@gmail.com
- **Office:** Block 4A, Gulshan-e-Iqbal, Karachi

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Zona Scientific. All rights reserved.
