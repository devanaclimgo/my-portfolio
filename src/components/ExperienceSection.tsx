"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { content } from "../../data"

export default function ExperienceSection() {
  const [language] = useState<'en' | 'pt'>('en')
  const t = content[language]

  const experienceRef = useRef(null)
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" })

  return (
    <div>      <motion.section
    id="experience"
    ref={experienceRef}
    className="py-20 px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0 }}
    animate={experienceInView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-[#8A6CFF] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t.experience.title}
      </motion.h2>

      <div className="space-y-8">
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#8A6CFF]/50 hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">{t.experience.volunteer}</h3>
          <p className="text-gray-300">
            Contributing to open source projects and helping local communities with web development needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-[#8A6CFF]/50 hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">{t.experience.freelance}</h3>
          <p className="text-gray-300">
            Building custom websites and web applications for small businesses and startups.
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#8A6CFF] font-medium">{t.experience.skills}</p>
        </motion.div>
      </div>
    </div>
  </motion.section></div>
  )
}
