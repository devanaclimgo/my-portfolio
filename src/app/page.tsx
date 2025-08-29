"use client"

import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import TechStackCarousel from "@/components/TechStackCarousel"
import Projects from "@/components/Projects"
import AboutSection from "@/components/AboutSection"
import ExperienceSection from "@/components/ExperienceSection"
import Footer from "@/components/Footer"

import "../styles/globals.css";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1220] via-[#1a1f3a] to-[#0B1220] text-white overflow-x-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#eee,transparent),radial-gradient(2px_2px_at_40px_70px,rgba(255,255,255,0.8),transparent),radial-gradient(1px_1px_at_90px_40px,#fff,transparent),radial-gradient(1px_1px_at_130px_80px,rgba(255,255,255,0.6),transparent),radial-gradient(2px_2px_at_160px_30px,#ddd,transparent)] bg-[length:200px_100px] animate-pulse"></div>
      </div>

      <Navigation />

      <Hero />

      <TechStackCarousel />

      <Projects />

      <AboutSection />

      <ExperienceSection />

      <Footer />
    </div>
  )
}
