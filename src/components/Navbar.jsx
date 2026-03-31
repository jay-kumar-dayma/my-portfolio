import { useState, useEffect } from 'react'

function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100
      links.forEach(link => {
        const el = document.getElementById(link.id)
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActive(link.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollTo(id) {
    setActive(id)
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#16213e] border-b border-[#0f3460] px-8 md:px-16 py-4">

      <div className="flex items-center justify-between">

        {/* Logo / Brand */}
        <span className="text-[#e94560] font-bold text-lg">JKD</span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition duration-200 pb-1 ${
                active === link.id
                  ? 'text-[#e94560] border-b-2 border-[#e94560]'
                  : 'text-gray-400 hover:text-[#e94560]'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Hamburger button — always visible on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center gap-1.5 p-2 md:hidden"
        >
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 pt-4 pb-2' : 'max-h-0'}`}>
        <div className="flex flex-col gap-4 border-t border-[#0f3460] pt-4">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium text-left transition duration-200 ${
                active === link.id ? 'text-[#e94560]' : 'text-gray-400 hover:text-[#e94560]'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navbar