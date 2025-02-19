import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const PageTransition = ({ onComplete }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const pixels = Array.from({ length: 400 }, (_, i) => {
      const pixel = document.createElement('div')
      pixel.className = 'w-16 h-16 bg-enigma-green m-0'
      return pixel
    })
    container.append(...pixels)

    gsap.fromTo(
      container.querySelectorAll('.w-16.h-16.bg-enigma-green.m-0'),
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.1,
        stagger: {
          amount: 0.9,
          from: 'random',
          grid: 'auto',
          ease: 'steps(12)'
        },
        onComplete: () => {
          container.innerHTML = ''
          onComplete()
        }
      }
    )
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-50 flex flex-wrap"
    ></div>
  )
}

export default PageTransition
