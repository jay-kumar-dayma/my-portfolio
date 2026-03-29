import Sidebar from "./component/Sidebar";
import Hero from "./component/Hero";
import About from "./component/About";
import Resume from "./component/Resume";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#1a1a2e]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Hero />
        <About />
        <Resume/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
