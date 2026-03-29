import { useState } from 'react'

function Navbar() {
  const [active, setActive] = useState('home')

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]

  function scrollTo(id) {
    setActive(id)
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-10 bg-[#16213e] border-b border-[#0f3460] px-8 md:px-16 py-4 flex gap-6 overflow-x-auto">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => scrollTo(link.id)}
          className={`text-sm font-medium whitespace-nowrap transition duration-200 pb-1 ${
            active === link.id
              ? 'text-[#e94560] border-b-2 border-[#e94560]'
              : 'text-gray-400 hover:text-[#e94560]'
          }`}
        >
          {link.name}
        </button>
      ))}
    </nav>
  )
}

export default Navbar