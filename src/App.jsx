import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import ParticleBackground from './components/Particle'
import About from './components/About'

import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar/>
      <Hero/>
      <About/>
      
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App