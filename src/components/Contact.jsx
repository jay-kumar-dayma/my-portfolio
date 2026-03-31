import { useState } from "react";
import info from "../data/info.js";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
    const res = await fetch('https://my-portfolio-server-r4be.onrender.com/api/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }
  return (
    <section id="contact" className="min-h-screen bg-[#1a1a2e] px-8 md:px-16 py-16">
      {/* Section heading */}
      <h2 className="text-white text-4xl font-bold mb-2">
        Contact <span className="text-[#e94560]">Me</span>
      </h2>
      <div className="w-12 h-1 bg-[#e94560] mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-400 leading-relaxed">
            I'm currently open to full-time opportunities and freelance
            projects. Feel free to reach out!
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                Email
              </span>
              <span className="text-gray-300 text-sm">{info.email}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                Phone
              </span>
              <span className="text-gray-300 text-sm">{info.phone}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                Location
              </span>
              <span className="text-gray-300 text-sm">{info.location}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href={info.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-[#e94560] transition duration-200"
            >
              GitHub →
            </a>
            <a
              href={info.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-[#e94560] transition duration-200"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[#16213e] border border-[#0f3460] rounded px-4 py-3 text-gray-300 text-sm placeholder-gray-600 focus:outline-none focus:border-[#e94560] transition duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#16213e] border border-[#0f3460] rounded px-4 py-3 text-gray-300 text-sm placeholder-gray-600 focus:outline-none focus:border-[#e94560] transition duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-[#16213e] border border-[#0f3460] rounded px-4 py-3 text-gray-300 text-sm placeholder-gray-600 focus:outline-none focus:border-[#e94560] transition duration-200 resize-none"
          />
          {status && <p className="text-green-400 text-sm">{status}</p>}
          <button
            type="submit"
            className="px-8 py-3 bg-[#e94560] text-white rounded font-medium hover:opacity-85 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
