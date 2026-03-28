import info from "../data/info.js";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#16213e] p-8">
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-full bg-[#0f3460] border-2 border-[#e94560] flex items-center justify-center text-3xl font-bold text-[#e94560]">
          {info.name.charAt(0)}
        </div>
        <h2 className="text-white font-semibold text-xl">{info.name}</h2>
        <span className="text-xs text-[#e94560] bg-[#0f3460] px-4 py-1 rounded-full border border-[#e9456033]">
          Full Stack Developer
        </span>

        {/*Divider*/}
        <div className="h-px w-full bg-[#0f3460] my-6" />
        {/*Info list*/}
        <ul className="flex flex-col gap-4 w-full text-white">
          <li className="flex flex-col gap-1">
            <span className="text-[16px] text-grey-400 uppercase tracking-widest">
              Email
            </span>
            <span className="text-grey-300 text-sm">{info.email}</span>
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[16px] text-grey-400 uppercase tracking-widest">
              Phone
            </span>
            <span className="text-grey-300 text-sm">{info.phone}</span>
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[16px] text-grey-400 uppercase tracking-widest">
              Location
            </span>
            <span className="text-grey-300 text-sm">{info.location}</span>
          </li>
          <li className="flex flex-col gap-1">
            <span className="text-[16px] text-grey-400 uppercase tracking-widest">
              Status
            </span>
            <span
              className={`text-sm font-medium ${info.available ? "text-green-400" : "text-red-400"}`}
            >
              {info.available ? "Available for work" : "Not Available"}
            </span>
          </li>
        </ul>
        {/* Divider */}
        <div className="h-px w-full bg-[#0f3460] my-6"></div>
        {/* Social Links */}
        <div className="h-px w-full bg-[#0f3460] my-6" />

        {/* Social links */}
        <div className="flex gap-3 justify-center">
          <a
            href={info.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 px-4 py-2 rounded-full border border-[#0f3460] hover:border-[#e94560] hover:text-[#e94560] transition duration-200"
          >
            GitHub
          </a>

          <a
            href={info.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 px-4 py-2 rounded-full border border-[#0f3460] hover:border-[#e94560] hover:text-[#e94560] transition duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
