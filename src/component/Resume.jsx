import info from '../data/info.js'

function Resume() {
  return (
    <section className="min-h-screen bg-[#1a1a2e] px-8 md:px-16 py-16">

      {/* Section heading */}
      <h2 className="text-white text-4xl font-bold mb-2">My <span className="text-[#e94560]">Resume</span></h2>
      <div className="w-12 h-1 bg-[#e94560] mb-12" />

      {/* Experience + Education grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

        {/* Experience */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Experience</h3>
          {info.experience.map((item, index) => (
            <div key={index} className="border-l-2 border-[#e94560] pl-6 mb-8">
              <span className="text-xs text-[#e94560] bg-[#e9456022] px-3 py-1 rounded-full">{item.period}</span>
              <h4 className="text-white font-semibold mt-3 mb-1">{item.role}</h4>
              <p className="text-gray-400 text-sm mb-2">{item.company}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Education</h3>
          {info.education.map((item, index) => (
            <div key={index} className="border-l-2 border-[#e94560] pl-6 mb-8">
              <span className="text-xs text-[#e94560] bg-[#e9456022] px-3 py-1 rounded-full">{item.period}</span>
              <h4 className="text-white font-semibold mt-3 mb-1">{item.degree}</h4>
              <p className="text-gray-400 text-sm mb-2">{item.school}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Skills */}
      <h3 className="text-white text-xl font-semibold mb-6">My <span className="text-[#e94560]">Skills</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        {info.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-sm">{skill.name}</span>
              <span className="text-[#e94560] text-sm">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-[#0f3460] rounded-full">
              <div
                className="h-2 bg-[#e94560] rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Resume