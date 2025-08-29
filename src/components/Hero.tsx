"use client"

import { motion } from 'framer-motion'
import React, { Suspense, useState } from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import { content } from '../../data'

export default function Hero() {
  const [language] = useState<'en' | 'pt'>('en')
  const t = content[language]
  
  return (
    <div>
      {' '}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#8A6CFF] to-[#FF85D0] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.greeting}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
                  className="bg-gradient-to-r from-[#3B2BFF] to-[#8A6CFF] hover:from-[#8A6CFF] hover:to-[#FF85D0] text-white border-0 hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300"
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
                  className="border-[#8A6CFF] text-[#8A6CFF] hover:bg-[#8A6CFF] hover:text-white bg-transparent hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.hero.downloadCV}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-80 h-80 relative">
              <Suspense
                fallback={
                  <div className="w-80 h-80 bg-gradient-to-r from-[#3B2BFF]/20 to-[#8A6CFF]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 animate-pulse">
                    <div className="text-6xl font-bold text-white">3D</div>
                  </div>
                }
              ></Suspense>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}