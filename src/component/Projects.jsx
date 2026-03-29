import { useState } from 'react'
import info from '../data/info.js'

function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? info.projects
    : info.projects.filter(p => p.category === filter)

  return (
    <section className="min-h-screen bg-[#1a1a2e] px-8 md:px-16 py-16">

      {/* Section heading */}
      <h2 className="text-white text-4xl font-bold mb-2">My <span className="text-[#e94560]">Projects</span></h2>
      <div className="w-12 h-1 bg-[#e94560] mb-12" />

      {/* Filter buttons */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {['all', 'fullstack', 'frontend'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition duration-200 ${
              filter === cat
                ? 'bg-[#e94560] text-white border-[#e94560]'
                : 'text-gray-400 border-[#0f3460] hover:border-[#e94560] hover:text-[#e94560]'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <div key={index} className="bg-[#16213e] border border-[#0f3460] rounded-lg p-6 hover:border-[#e94560] transition duration-200 flex flex-col gap-4">

            <h3 className="text-white font-semibold text-lg">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs text-[#e94560] bg-[#e9456022] px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-[#e94560] transition duration-200">
                GitHub →
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-[#e94560] transition duration-200">
                Live →
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects