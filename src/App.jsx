import { useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col md:flex-row bg-[#1a1a2e]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App