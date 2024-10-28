import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './globals.css'

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="space-y-8">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default Home