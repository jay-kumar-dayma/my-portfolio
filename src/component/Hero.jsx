import { useTypewriter, Cursor } from "react-simple-typewriter";
import info from "../data/info";
function Hero() {
  const [text] = useTypewriter({
    words: info.role,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="flex-1 min-h-screen bg-[#1a1a2e] flex items-center px-8 md:px-16 py-16 md:py-0">
      <div>
        <p className="text-[#e94560] tracking-widest uppercase text-m mb-4">
          Hello, I'm
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">{info.name}</h1>
        <h2 className="text-2xl font-medium mb-6">
          <span className="text-gray-400">I'm a </span>
          <span className="text-[#e94560]">{text}</span>
          <Cursor cursorColor="#e94560" />
        </h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-8">
          Full Stack Developer based in {info.location}, building scalable
          websites with the MERN stack. Currently open to full-time
          opportunities.
        </p>
        <div className="flex gap-4">
          <a
            href={info.social.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-[#e94560] text-white rounded font-medium hover:opacity-85 transition duration-200"
          >
            View Github
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#e94560] text-[#e94560] rounded font-medium hover:bg-[#e9456011] transition duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
