

function Projects() {
    return (
        <section id="projects" className="px-6 py-20 bg-[#0a0a0a] text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
                <p className="text-gray-300 text-lg">
                    A collection of projects exploring frontend development, eCommerce experiences, and web interfaces.
                </p>

                <div className="mt-12 rounded-lg border border-gray-800 p-6 hover:border-cyan-400">
                    <h3 className="text-xl font-semibold">
                        eCommerce Product Experience
                    </h3>
                    <p className="text-gray-300 text-base">
                        A responsive product interface exploring reusable components, product information, and a clear shopping experience.
                    </p>
                    <ul className="flex flex-wrap gap-2 text-sm text-gray-400 mt-4">
                        <li className="bg-gray-800 px-3 py-1 rounded-xl">React</li>
                        <li className="bg-gray-800 px-3 py-1 rounded-xl">JavaScript</li>
                        <li className="bg-gray-800 px-3 py-1 rounded-xl">Tailwind CSS</li>
                    </ul>
                    <a href="#projects" className="inline-block mt-5 text-cyan-400 hover:text-cyan-500 font-semibold">
                        View Project
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects