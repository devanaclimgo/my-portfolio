# My Portfolio

A beautiful, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Multi-language Support** - English and Portuguese
- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Performance Optimized** - Built with Next.js 13+ features
- 🎭 **Smooth Animations** - Framer Motion animations throughout

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Your Resume

To enable the resume download functionality:

1. Save your resume as `resume.pdf`
2. Place it in the `public/` folder
3. The download buttons will now work properly

**Important**: The file must be named exactly `resume.pdf` and placed in the `public/` folder.

## Tech Stack

- **Frontend**: Next.js 13+, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Project Structure

```
src/
├── app/           # Next.js app directory
├── components/    # React components
├── contexts/      # React contexts (language)
├── lib/          # Utility functions
└── styles/       # Global styles
```

## Customization

- Update content in `data/index.ts`
- Modify colors in `tailwind.config.js`
- Add new sections in the main page
- Customize animations in individual components

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

## License

MIT License - feel free to use this template for your own portfolio!

###### **Made with ❤️ by Ana Clara | 2025**