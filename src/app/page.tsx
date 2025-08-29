'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TechStackCarousel from '@/components/TechStackCarousel'
import Projects from '@/components/Projects'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

import '../styles/globals.css'
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/ShootingStarsAndStarsBackgroundDemo'

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#0B1220] via-[#1a1f3a] to-[#0B1220] text-white overflow-x-hidden relative">
        {/* Animated Stars Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <ShootingStarsAndStarsBackgroundDemo />
        </div>

        {/* Content with proper z-index */}
        <div className="relative z-10">
          <Navigation />

          <Hero />

          <TechStackCarousel />

          <Projects />

          <AboutSection />

          <ExperienceSection />

          <Footer />
        </div>
      </div>
    </LanguageProvider>
  )
}
