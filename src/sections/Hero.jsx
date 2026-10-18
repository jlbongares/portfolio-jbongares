

function Hero() {
  return (
    <section id="home" className="flex items-center px-6 py-20 min-h-[80vh] bg-[#0a0a0a] text-white">
      <div className="max-w-3xl">
        <p className="text-cyan-400 mt-4 text-sm font-semibold tracking-wider">FRONTEND DEVELOPMENT + ECOMMERCE + CMS</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-6">That's where I build.</h1>
        <p className="mt-4 text-gray-300 text-lg">
            Junior Frontend Developer with professional experience in eCommerce and CMS platforms.
        </p>
        <a href="#projects" className="inline-block mt-8 rounded-lg bg-cyan-400 hover:bg-cyan-500 px-6 py-3 font-semibold">
            Explore My Work ↗
        </a>
      </div>
    </section>
  );
}

export default Hero