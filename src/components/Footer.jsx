import info from '../data/info.js'

function Footer() {
  return (
    <footer className="bg-[#16213e] border-t border-[#0f3460] px-8 md:px-16 py-8 mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2024 <span className="text-[#e94560]">{info.name}</span>. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href={info.social.github} target="_blank" rel="noreferrer" className="text-gray-500 text-sm hover:text-[#e94560] transition duration-200">GitHub</a>
          <a href={info.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 text-sm hover:text-[#e94560] transition duration-200">LinkedIn</a>
          <a href={`mailto:${info.email}`} className="text-gray-500 text-sm hover:text-[#e94560] transition duration-200">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer