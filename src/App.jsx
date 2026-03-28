import Sidebar from './component/Sidebar'
import Hero from './component/Hero'
function App() {
  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-[#1a1a2e]'>
   <Sidebar />
   <Hero/>
    </div>
  )
}

export default App
