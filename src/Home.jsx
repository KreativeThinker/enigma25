import { useEffect } from 'react'
import './App.css'
import Hamburger from './components/hamburger'
import Footer from './components/footer'
import Join from './components/join'
import Scene from './components/timelinetest'
import ErtdfgcvbBG from './components/enigmatextbg'
import HeroSection from './components/HeroSection'
import Content from './components/content.jsx'
import Lenis from 'lenis'
import Speakers from './components/Speakers.jsx'
import Rules from './components/Rules.jsx'

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      <Join className="z-20" />
      <nav className="absolute top-0 z-20 flex w-full justify-between px-10 py-5 mix-blend-difference">
        <div className="pt-1 text-left font-neuebit text-5xl">ENIGMA</div>
        <Hamburger className="fixed right-0" />
      </nav>

      <ErtdfgcvbBG className="top-0 z-0" />
      <HeroSection />
      {/* <div className="h-screen">
        <Canvas className='w-screen h-screen'>
          <Prize className='w-screen h-screen'/>
        </Canvas>
      </div> */}
      <Content />
      <Scene className="fixed top-0" />
      <Rules />
      {/* <Speakers /> */}

      <Footer />
    </div>
  )
}

export default Home
