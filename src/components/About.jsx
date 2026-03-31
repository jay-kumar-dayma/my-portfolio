import info from '../data/info.js'

function About() {
  return (
    <section id="about" className="min-h-screen bg-[#1a1a2e] px-8 md:px-16 py-16">

      {/* Section heading */}
      <h2 className="text-white text-4xl font-bold mb-2">About <span className="text-[#e94560]">Me</span></h2>
      <div className="w-12 h-1 bg-[#e94560] mb-12" />

      {/* Bio */}
      <p className="text-gray-400 text-base leading-relaxed max-w-2xl mb-12">
        {info.about}
      </p>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mb-12">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Name</span>
          <span className="text-gray-300 text-sm">{info.name}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Email</span>
          <span className="text-gray-300 text-sm">{info.email}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Location</span>
          <span className="text-gray-300 text-sm">{info.location}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Status</span>
          <span className={`text-sm font-medium ${info.available ? 'text-green-400' : 'text-red-400'}`}>
            {info.available ? 'Available for work' : 'Not Available'}
          </span>
        </div>
      </div>

      {/* Download CV button */}
      <a href="#" className="inline-block px-8 py-3 bg-[#e94560] text-white rounded font-medium hover:opacity-85 transition duration-200 mb-16">
        Download CV
      </a>

      {/* Services */}
      <h3 className="text-white text-2xl font-bold mb-2">My <span className="text-[#e94560]">Services</span></h3>
      <div className="w-8 h-1 bg-[#e94560] mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        {info.services.map((service, index) => (
          <div key={index} className="bg-[#16213e] border border-[#0f3460] rounded-lg p-6 hover:border-[#e94560] transition duration-200">
            <h4 className="text-white font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default About