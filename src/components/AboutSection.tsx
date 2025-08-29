"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { content } from "../../data"

export default function AboutSection() {
  const [language] = useState<'en' | 'pt'>('en')
  const t = content[language]
  
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  
  return (
    <div>      <motion.section
    id="about"
    ref={aboutRef}
    className="py-20 px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0 }}
    animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-[#8A6CFF] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {t.about.title}
      </motion.h2>
      <motion.p
        className="text-xl text-gray-300 mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {t.about.description}
      </motion.p>

      <motion.div
        className="flex justify-center space-x-8 text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {["📚", "🎧", "💻", "🎨", "🚀"].map((emoji, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </motion.section></div>
  )
}