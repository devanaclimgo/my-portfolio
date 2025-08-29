'use client'

import React from 'react'
import { ShootingStars } from './ui/shooting-stars'
import { StarsBackground } from './ui/stars-background'

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-full w-full relative pointer-events-none">
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}
