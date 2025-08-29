"use client"

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { techStack } from '../../data'

export default function TechStackCarousel() {
  const techStackRef = useRef(null)
  const techStackInView = useInView(techStackRef, { once: true, margin: "-100px" })
  
  return (
    <div>
      {' '}
      <motion.section
        ref={techStackRef}
        className="py-16 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={techStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex animate-scroll">
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 mx-8 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white font-medium hover:bg-white/10 hover:border-[#8A6CFF]/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
