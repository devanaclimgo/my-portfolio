'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { content } from '../../data'

export default function Footer() {
  const [language] = useState<'en' | 'pt'>('en')
  const t = content[language]

  return (
    <div>
      {' '}
      <motion.footer
        className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Ana Gomes
          </motion.h3>
          <p className="text-gray-300">{t.footer}</p>
        </div>
      </motion.footer>
    </div>
  )
}
