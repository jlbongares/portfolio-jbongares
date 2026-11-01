import { Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-8 md:p-12">
            <p className="text-cyan-400 text-sm font-semibold tracking-wider">LET'S CONNECT</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">
                Have a project in mind?
                <span className="block text-cyan-400 mt-2">
                    Let's talk.
                </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-2xl">
                I'm open to opportunities where I can contribute my eCommerce
                and CMS experience while continuing to grow as a frontend developer.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
                <a
                    href="mailto:bongaresjames@gmail.com"
                    className="flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-[#0a0a0a] hover:bg-cyan-500 transition-colors"
                >
                    <Mail size={18} />
                    Email Me
                    <ArrowUpRight size={16} />
                </a>
                <a
                    href="https://www.linkedin.com/in/james-louie-bongares-b256bb189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                    <FaLinkedin size={18} />
                    LinkedIn
                    <ArrowUpRight size={16} />
                </a>
                <a
                    href="https://github.com/jlbongares"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                    <FaGithub size={18} />
                    GitHub
                    <ArrowUpRight size={16} />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;