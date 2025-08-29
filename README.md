# 🚀 Ana Clara's Portfolio 2.0

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

_A modern, responsive portfolio website showcasing professional experience, projects, and technical skills with stunning visual effects and smooth animations._

</div>

---

## ✨ Project Overview

This portfolio represents a complete redesign and modernization of my personal portfolio website. Built with cutting-edge web technologies, it features a sophisticated design system that combines **glassmorphism effects**, **cosmic animations**, and **smooth interactions** to create an engaging user experience.

### 🎯 Key Features

- 🌍 **Bilingual Support** - Seamless switching between English and Portuguese
- 🎨 **Modern Design System** - Glassmorphism, cosmic gradients, and animated backgrounds
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Built with Next.js 15+ and React 19 features
- 🎭 **Rich Animations** - Framer Motion animations and interactive elements
- 🌟 **Visual Effects** - Shooting stars, animated backgrounds, and smooth transitions
- 🎯 **Accessibility First** - WCAG compliant with proper semantic structure

---

## 🛠️ Tech Stack & Architecture

### **Frontend Framework**

- **Next.js 15.5.2** - React framework with App Router for optimal performance
- **React 19.1.0** - Latest React with concurrent features and improved rendering
- **TypeScript 5.0** - Type-safe development with enhanced developer experience

### **Styling & Design**

- **Tailwind CSS 3.4.17** - Utility-first CSS framework with custom design tokens
- **Custom Color Palette** - Navy, cosmos, lilac, and cosmic gradients
- **Glassmorphism Effects** - Modern UI patterns with backdrop filters
- **Responsive Design** - Mobile-first approach with breakpoint optimization

### **Animation & Interactions**

- **Framer Motion 12.23.12** - Production-ready animation library
- **Three.js 0.179.1** - 3D graphics and interactive elements
- **React Three Fiber** - React renderer for Three.js
- **Custom Animations** - Shooting stars, floating elements, and smooth transitions

### **UI Components & Libraries**

- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Comprehensive icon library
- **Class Variance Authority** - Type-safe component variants

### **Development Tools**

- **ESLint 9** - Code quality and consistency
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **Turbopack** - Fast bundler for development

---

## 🏗️ Why This Tech Stack?

### **Next.js 15+**

- **App Router** for better performance and SEO
- **Server Components** for improved loading times
- **Built-in optimizations** for images, fonts, and routing
- **Excellent developer experience** with hot reloading

### **React 19**

- **Concurrent Features** for better user experience
- **Improved rendering performance** with new algorithms
- **Better TypeScript support** and developer tools
- **Future-proof architecture** for long-term maintenance

### **Tailwind CSS**

- **Utility-first approach** for rapid development
- **Custom design system** with consistent spacing and colors
- **Responsive utilities** for mobile-first design
- **Purge CSS** for optimal production bundle size

### **Framer Motion**

- **Production-ready animations** with 60fps performance
- **Declarative API** for complex animation sequences
- **Gesture support** for touch and mouse interactions
- **Accessibility features** for reduced motion preferences

---

## 📁 Project Structure

```
my-portfolio/
├── 📁 public/                    # Static assets
│   ├── 📄 Ana_Gomes-Curriculo.pdf
│   ├── 📄 Ana_Gomes-Resume.pdf
│   ├── 🖼️  Project screenshots
│   └── 🎨  Favicons and icons
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── 📄 layout.tsx        # Root layout with providers
│   │   └── 📄 page.tsx          # Main portfolio page
│   ├── 📁 components/            # React components
│   │   ├── 📁 ui/               # Reusable UI components
│   │   │   ├── 📄 button.tsx    # Custom button variants
│   │   │   ├── 📄 card.tsx      # Card component
│   │   │   ├── 📄 shooting-stars.tsx
│   │   │   └── 📄 stars-background.tsx
│   │   ├── 📄 Navigation.tsx    # Navigation bar
│   │   ├── 📄 Hero.tsx          # Hero section
│   │   ├── 📄 TechStackCarousel.tsx
│   │   ├── 📄 Projects.tsx      # Projects showcase
│   │   ├── 📄 AboutSection.tsx  # About me section
│   │   ├── 📄 ExperienceSection.tsx
│   │   ├── 📄 Footer.tsx        # Footer component
│   │   └── 📄 ShootingStarsAndStarsBackgroundDemo.tsx
│   ├── 📁 contexts/              # React contexts
│   │   └── 📄 LanguageContext.tsx # Bilingual support
│   ├── 📁 lib/                   # Utility functions
│   │   └── 📄 utils.ts          # Helper functions
│   └── 📁 styles/                # Global styles
│       └── 📄 globals.css       # Tailwind imports and custom CSS
├── 📄 package.json               # Dependencies and scripts
├── 📄 tailwind.config.js        # Tailwind configuration
├── 📄 tsconfig.json             # TypeScript configuration
└── 📄 next.config.ts            # Next.js configuration
```

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn package manager
- Git for version control

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/devanaclimgo/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
```

---

## 🎨 Customization Guide

### **Content Updates**

- **Personal Information**: Update content in component files
- **Projects**: Modify the `Projects.tsx` component
- **Experience**: Edit the `ExperienceSection.tsx` component
- **About**: Customize the `AboutSection.tsx` component

### **Design System**

- **Colors**: Modify the custom color palette in `tailwind.config.js`
- **Typography**: Update font families and sizes in the config
- **Spacing**: Adjust the spacing scale for consistent layouts
- **Animations**: Customize animation timings and easing functions

### **Adding New Sections**

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Style with Tailwind CSS classes
4. Add animations with Framer Motion

---

## 🌟 Performance Features

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Lazy Loading** - Components load only when needed
- **Bundle Analysis** - Built-in bundle analyzer for optimization
- **SEO Optimization** - Meta tags and structured data support

---

## 📱 Responsive Design

The portfolio is built with a **mobile-first approach** and includes:

- **Breakpoint System**: Tailwind's responsive utilities
- **Touch Interactions**: Optimized for mobile devices
- **Performance**: Optimized animations for mobile performance
- **Accessibility**: Touch-friendly button sizes and spacing

---

## 🚀 Deployment

### **Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with automatic CI/CD

### **Other Platforms**

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS Amplify**: Connect your repository and deploy
- **GitHub Pages**: Use the `gh-pages` package

---

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome for:

- 🐛 Bug fixes
- 💡 Feature suggestions
- 📚 Documentation improvements
- 🎨 Design enhancements

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Three.js Community** for 3D graphics support

---

<div align="center">

**Made with ❤️ by Ana Clara | 2025**

[🌐 Portfolio](#) • [💼 LinkedIn](https://www.linkedin.com/in/ana-clara-gomes-48b83b224/) • [🐙 GitHub](https://github.com/devanaclimgo) • [�� Email](anaclimgo@gmail.com)

</div>
