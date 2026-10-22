import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <main className="min-h-screen bg-[#0a0a0a] p-8 text-white">
        <h1 className="text-4xl font-bold text-cyan-400">
          James Louie
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Frontend Development + eCommerce + CMS
        </p>
      </main>
    </>
  )
}

export default App
