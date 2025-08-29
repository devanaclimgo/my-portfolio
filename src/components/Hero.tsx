'use client'

import { motion } from 'framer-motion'
import React, { Suspense } from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import { content } from '../../data'
import { useLanguage } from '../contexts/LanguageContext'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { language } = useLanguage()
  const t = content[language]

  console.log('Hero component - Current language:', language)

  const handleResumeDownload = () => {
    // Debug: Log the language when download is clicked
    console.log('Download clicked - Language:', language)
    const link = document.createElement('a')
    if (language === 'pt') {
      link.href = '/Ana_Gomes-Curriculo.pdf'
      link.download = 'Ana_Gomes-Curriculo.pdf'
      console.log('Downloading Portuguese version:', '/Ana_Gomes-Curriculo.pdf')
    } else {
      link.href = '/Ana_Gomes-Resume.pdf'
      link.download = 'Ana_Gomes-Resume.pdf'
      console.log('Downloading English version:', '/Ana_Gomes-Resume.pdf')
    }

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Spline Background - Full Screen */}
        <div id='hero' className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Suspense
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-[#0B1220] via-[#1a1f3a] to-[#0B1220] flex items-center justify-center">
                <div className="text-6xl font-bold text-white animate-pulse">
                  3D
                </div>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/w8uMKvrWl8zmzzyv/scene.splinecode"
              className="w-full h-full pointer-events-none"
            />
          </Suspense>
        </div>

        {/* Content Overlay - Centered */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="relative p-8 rounded-2xl backdrop-blur-sm bg-black/20 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#8A6CFF] to-[#FF85D0] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] filter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.greeting}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-white mb-8 leading-relaxed drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.subtitle}
              {/* Debug: Show current language */}
              <span className="block text-sm text-[#8A6CFF] mt-2 font-semibold drop-shadow-[0_0_15px_rgba(138,108,255,0.8)]">
                Current Language: {language === 'en' ? 'English' : 'Português'}
              </span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#3B2BFF] to-[#8A6CFF] hover:from-[#8A6CFF] hover:to-[#FF85D0] text-white border-0 hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300 backdrop-blur-md shadow-[0_0_30px_rgba(59,43,255,0.5)]"
                  onClick={scrollToProjects}
                >
                  {t.hero.seeProjects}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#8A6CFF] text-[#8A6CFF] hover:bg-[#8A6CFF] hover:text-white bg-white/10 backdrop-blur-md hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300 shadow-[0_0_20px_rgba(138,108,255,0.3)]"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.hero.downloadCV}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
