function About() {
  return (
    <section id="about" className="px-6 py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Building on experience. Growing through code.
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
            Hello there! I'm a web professional with 6+ years of experience across eCommerce and CMS platforms. 
            My work has involved maintaining website content, refining user interfaces, and helping deliver reliable digital experiences.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4 mb-6">
            I'm currently building on that foundation by strengthening my frontend development skills and creating responsive, user-focused web experiences.
        </p>
        <hr className="h-px bg-cyan-900 border-0"/>
        <h3 className="text-lg font-semibold mt-6">
            Key Themes
        </h3>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-400 mt-4">
            <li className="bg-gray-800 px-3 py-1 rounded-xl">eCommerce experience</li>
            <li className="bg-gray-800 px-3 py-1 rounded-xl">CMS Platforms</li>
            <li className="bg-gray-800 px-3 py-1 rounded-xl">Frontend growth</li>
            <li className="bg-gray-800 px-3 py-1 rounded-xl">Attention to detail</li>
        </ul>
      </div>
    </section>
  );
}

export default About;