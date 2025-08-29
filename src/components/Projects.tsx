'use client'

import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { content, projects } from '../../data'
import { Button } from './ui/button'
import { Card } from './ui/card'

export default function Projects() {
  const [language] = useState<'en' | 'pt'>('en')
  const t = content[language]

  const projectsRef = useRef(null)
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <div>
      <motion.section
        id="projects"
        ref={projectsRef}
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-[#8A6CFF] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={
              projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.projects.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#8A6CFF]/50 transition-all duration-300 hover:scale-105 group hover:shadow-xl hover:shadow-[#8A6CFF]/10">
                  <div className="p-6">
                    <motion.img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-[#8A6CFF]/20 text-[#8A6CFF] rounded-full text-sm hover:bg-[#8A6CFF]/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#8A6CFF] text-[#8A6CFF] hover:bg-[#8A6CFF] hover:text-white bg-transparent hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          {t.projects.viewCode}
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#3B2BFF] to-[#8A6CFF] text-white hover:shadow-lg hover:shadow-[#8A6CFF]/25 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.projects.liveDemo}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
