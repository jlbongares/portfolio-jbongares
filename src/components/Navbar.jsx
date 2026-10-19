

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0a0a0a] text-white">
      <h1 className="text-2xl font-bold">James Louie</h1>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
        <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar