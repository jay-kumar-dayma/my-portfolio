import { useTypewriter, Cursor } from 'react-simple-typewriter'
import info from '../data/info.js'

function Hero() {
  const [text] = useTypewriter({
    words: info.roles,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section id="home" className="min-h-screen bg-[#1a1a2e] flex items-center px-8 md:px-16 py-16 md:py-0">
      <div className="animate-fadeIn">
        <p className="text-[#e94560] tracking-widest uppercase text-sm mb-4">Hello, I'm</p>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">{info.name}</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-6">
          <span className="text-gray-400">I'm a </span>
          <span className="text-[#e94560]">{text}</span>
          <Cursor cursorColor="#e94560" />
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-8">
          Full Stack Developer based in {info.location}, building scalable web apps with the MERN stack. Currently open to full-time opportunities.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={info.social.github} target="_blank" rel="noreferrer" className="px-8 py-3 bg-[#e94560] text-white rounded font-medium hover:opacity-85 transition duration-200">
            View GitHub
          </a>
          <button onClick={() => {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}} className="px-8 py-3 border border-[#e94560] text-[#e94560] rounded font-medium hover:bg-[#e9456011] transition duration-200">
  Contact Me
</button>
        </div>
      </div>
    </section>
  )
}

export default Hero