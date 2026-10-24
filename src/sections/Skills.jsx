import { Code2, ShoppingBag, Layers3, Wrench } from 'lucide-react';


function SkillTags({ skills }) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-md border border-gray-800 bg-gray-900 px-3 py-2 text-sm text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-cyan-400 mt-4 text-sm font-semibold tracking-wider">WHAT I BRING TO THE TABLE</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">
          Skills & Expertise
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          A combination of frontend development, eCommerce experience, and CMS expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="rounded-xl border border-cyan-900 p-6 transition-colors duration-300 hover:border-cyan-400">
                <div className="flex items-center justify-between gap-3 min-w-0 mb-4">
                    <div className="shrink-0 rounded-lg bg-cyan-950 p-2">
                        <Code2 size={24} className="text-cyan-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">Frontend Development</h3>
                    <span className="shrink-0 text-cyan-400 text-sm">01</span>
                </div>

                <SkillTags
                    skills={[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "React",
                        "Tailwind CSS",
                        "Responsive Design",
                        "Cross-Browser Compatibility"
                    ]}
                />
            </div>
            <div className="rounded-xl border border-teal-900 p-6 transition-colors duration-300 hover:border-teal-400">
                <div className="flex items-center justify-between gap-3 min-w-0 mb-4">
                    <div className="shrink-0 rounded-lg bg-teal-950 p-2">
                        <ShoppingBag size={24} className="text-teal-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">eCommerce Development</h3>
                    <span className="shrink-0 text-teal-400 text-sm">02</span>
                </div>

                <SkillTags
                    skills={[
                        'Salesforce Commerce Cloud',
                        'Shopify',
                        'Product & Category Management'
                    ]}
                />
            </div>
            <div className="rounded-xl border border-blue-900 p-6 transition-colors duration-300 hover:border-blue-400">
                <div className="flex items-center justify-between gap-3 min-w-0 mb-4">
                    <div className="shrink-0 rounded-lg bg-blue-950 p-2">
                        <Layers3 size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">CMS Platforms</h3>
                    <span className="shrink-0 text-blue-400 text-sm">03</span>
                </div>

                <SkillTags
                    skills={[
                        'Drupal',
                        'Craft CMS',
                        'Content Management',
                        'UI Improvements',
                    ]}
                />
            </div>
            <div className="rounded-xl border border-violet-900 p-6 transition-colors duration-300 hover:border-violet-400">
                <div className="flex items-center justify-between gap-3 min-w-0 mb-4">
                    <div className="shrink-0 rounded-lg bg-violet-950 p-2">
                        <Wrench size={24} className="text-violet-400" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">Tools & Workflow</h3>
                    <span className="shrink-0 text-violet-400 text-sm">04</span>
                </div>

                <SkillTags
                    skills={[
                        'Git',
                        'GitHub',
                        'Bitbucket',
                        'Cursor',
                        'VS Code',
                        'Figma',
                        'Confluence',
                        'Jira',
                        'Agile Methodologies'
                    ]}
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills