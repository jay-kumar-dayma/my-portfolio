import info from '../data/info.js'

function Sidebar() {
  return (
    <aside className="w-full md:w-72 md:min-h-screen md:sticky md:top-0 md:self-start bg-[#16213e] border-b md:border-b-0 md:border-r border-[#0f3460] p-8 flex flex-col gap-6">

      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-24 h-24 rounded-full bg-[#0f3460] border-2 border-[#e94560] flex items-center justify-center text-4xl font-bold text-[#e94560]">
          {info.name.charAt(0)}
        </div>
        <h2 className="text-white font-semibold text-xl">{info.name}</h2>
        <span className="text-xs text-[#e94560] bg-[#0f3460] px-4 py-1 rounded-full border border-[#e9456033]">
          Full Stack Developer
        </span>
      </div>

      <div className="h-px bg-[#0f3460]" />

      <ul className="flex flex-col gap-4">
        {[
          { label: 'Email', value: info.email },
          { label: 'Phone', value: info.phone },
          { label: 'Location', value: info.location },
        ].map((item) => (
          <li key={item.label} className="flex flex-col gap-1">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{item.label}</span>
            <span className="text-gray-300 text-sm">{item.value}</span>
          </li>
        ))}
        <li className="flex flex-col gap-1">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Status</span>
          <span className={`text-sm font-medium ${info.available ? 'text-green-400' : 'text-red-400'}`}>
            {info.available ? 'Available for work' : 'Not Available'}
          </span>
        </li>
      </ul>

      <div className="h-px bg-[#0f3460]" />

      <div className="flex gap-3 justify-center">
        <a href={info.social.github} target="_blank" rel="noreferrer" className="text-sm text-gray-300 px-4 py-2 rounded-full border border-[#0f3460] hover:border-[#e94560] hover:text-[#e94560] transition duration-200">
          GitHub
        </a>
        <a href={info.social.linkedin} target="_blank" rel="noreferrer" className="text-sm text-gray-300 px-4 py-2 rounded-full border border-[#0f3460] hover:border-[#e94560] hover:text-[#e94560] transition duration-200">
          LinkedIn
        </a>
      </div>

    </aside>
  )
}

export default Sidebar