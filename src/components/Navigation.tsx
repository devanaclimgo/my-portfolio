'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Download, Github, Linkedin, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { content } from '../../data'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = content[language]

  console.log('Navigation component - Current language:', language)

  const handleResumeDownload = () => {
    console.log('Navigation download clicked - Language:', language)

    const link = document.createElement('a')
    if (language === 'pt') {
      link.href = '/Ana_Gomes-Curriculo.pdf'
      link.download = 'Ana_Gomes-Curriculo.pdf'
      console.log(
        'Navigation downloading Portuguese version:',
        '/Ana_Gomes-Curriculo.pdf',
      )
    } else {
      link.href = '/Ana_Gomes-Resume.pdf'
      link.download = 'Ana_Gomes-Resume.pdf'
      console.log(
        'Navigation downloading English version:',
        '/Ana_Gomes-Resume.pdf',
      )
    }

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    console.log('Attempting to scroll to section:', sectionId)

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        console.log('Element found:', element)
        const offsetTop = element.offsetTop - 80
        console.log('Scrolling to position:', offsetTop)

        try {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
          setTimeout(() => {
            window.scrollBy(0, -80)
          }, 100)
        } catch (error) {
          console.log('Smooth scroll failed, using instant scroll:', error)
          element.scrollIntoView({ block: 'start' })
          setTimeout(() => {
            window.scrollBy(0, -80)
          }, 100)
        }
      } else {
        console.error('Section not found:', sectionId)
        const sections = document.querySelectorAll('section, [id]')
        console.log(
          'Available sections:',
          Array.from(sections).map((s) => ({
            id: s.id,
            className: s.className,
          })),
        )

        const altElement =
          document.querySelector(`[id*="${sectionId}"]`) ||
          document.querySelector(`[class*="${sectionId}"]`)
        if (altElement && altElement instanceof HTMLElement) {
          console.log('Alternative element found:', altElement)
          altElement.scrollIntoView({ block: 'start' })
          setTimeout(() => {
            window.scrollBy(0, -80)
            const finalPosition = altElement.offsetTop - 80
            window.scrollTo(0, finalPosition)
          }, 100)
        } else {
          console.log('No elements found, using approximate scroll')
          const approximateScroll = () => {
            const currentScroll =
              window.pageYOffset || document.documentElement.scrollTop
            const targetScroll = currentScroll + 500
            window.scrollTo(0, targetScroll)
          }
          approximateScroll()
        }
      }
    }, 100)

    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
          >
            <a
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B2BFF] to-[#8A6CFF] flex items-center justify-center font-bold text-white hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300"
              href="#"
            >
              AG
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="hover:text-[#8A6CFF] transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {t.nav.projects}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8A6CFF] to-[#FF85D0] group-hover:w-full transition-all duration-300"></span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('about')}
                className="hover:text-[#8A6CFF] transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {t.nav.about}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8A6CFF] to-[#FF85D0] group-hover:w-full transition-all duration-300"></span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('experience')}
                className="hover:text-[#8A6CFF] transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {t.nav.experience}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8A6CFF] to-[#FF85D0] group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="border-[#8A6CFF] text-[#8A6CFF] hover:bg-[#8A6CFF] hover:text-white bg-transparent hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300"
                onClick={handleResumeDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                {t.nav.resume}
              </Button>
            </motion.div>

            <div className="flex items-center space-x-2">
              <motion.a
                href="https://github.com/devanaclimgo"
                className="text-white hover:text-[#8A6CFF] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ana-clara-gomes-48b83b224/"
                className="text-white hover:text-[#8A6CFF] transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>

            <motion.button
              onClick={() => {
                const newLanguage = language === 'en' ? 'pt' : 'en'
                console.log(
                  'Language switching from',
                  language,
                  'to',
                  newLanguage,
                )
                setLanguage(newLanguage)
              }}
              className="text-sm px-2 py-1 rounded border border-white/20 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? '🇧🇷 PT' : '🇬🇧 EN'}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#8A6CFF] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('projects')}
              className="block px-3 py-2 text-white hover:text-[#8A6CFF] text-left w-full"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-white hover:text-[#8A6CFF] text-left w-full"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block px-3 py-2 text-white hover:text-[#8A6CFF] text-left w-full"
            >
              {t.nav.experience}
            </button>
            <div className="px-3 py-2 flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-[#8A6CFF] text-[#8A6CFF] bg-transparent"
                onClick={handleResumeDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                {t.nav.resume}
              </Button>
              <button
                onClick={() => {
                  const newLanguage = language === 'en' ? 'pt' : 'en'
                  console.log(
                    'Mobile language switching from',
                    language,
                    'to',
                    newLanguage,
                  )
                  setLanguage(newLanguage)
                }}
                className="text-sm px-2 py-1 rounded border border-white/20"
              >
                {language === 'en' ? '🇧🇷 PT' : '🇬🇧 EN'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
