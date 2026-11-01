import { useEffect, useRef, useState } from 'react';




const experiences = [
  {
    period: "2026 — Present",
    year: "2026",
    role: "Junior Web Specialist",
    category: "eCommerce & CMS",
    description: "Maintaining and improving web experiences across eCommerce and CMS platforms.",
    responsibilities: [
      "● Manage website content updates across Shopify, Drupal, and Craft CMS.",
      "● Perform QA checks to ensure content accuracy, layout consistency, and functionality before publishing.",
      "● Support content migration and website updates while maintaining brand consistency.",
    ],
  },
  {
    period: "2022 — 2025",
    year: "2022–25",
    role: "Junior Salesforce Commerce Cloud Frontend Developer",
    category: "eCommerce Development",
    description: "Working on storefront interfaces, UI improvements, and Salesforce Commerce Cloud projects.",
    responsibilities: [
      "● Supported Salesforce Commerce Cloud merchandising activities for Galderma, including product creation, product and category updates, translations, and logo updates.",
      "● Developed and updated email templates for Dynamite and Garage, ensuring accurate layouts and visual consistency.",
      "● Implemented frontend UI fixes, including JavaScript enhancements to resolve mobile textbox placeholder display issues.",
      "● Worked with Salesforce Aura Components and completed training in React.js and Lightning Web Components.",
      "● Earned the Salesforce AI Associate certification.",
    ],
  },
  {
    period: "2019 — 2022",
    year: "2019–22",
    role: "Digital Specialist",
    category: "Digital Operations",
    description: "Building professional experience in digital and website-related work.",
    responsibilities: [
      "● Supported Salesforce Commerce Cloud website operations by creating and updating product content, categories, and landing pages.",
      "● Managed website content using Content Slots, Page Designer, and XML imports.",
      "● Assisted with promotional setup and bulk product or category updates through XML imports.",
      "● Supported eCommerce websites for brands including Lancôme, YSL, Mugler, and Kiehl's.",
    ],
  },
];

function Experience() {
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.7; // Adjust this value to control when the progress starts

      const rawProgress = (triggerPoint - rect.top) / rect.height;

      const nextProgress = Math.min(1, Math.max(0, rawProgress)); // Clamp between 0 and 1
      setProgress(nextProgress);
    };

    updateProgress();

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mt-4 text-sm font-semibold tracking-wider text-cyan-400">
          MY PROFESSIONAL JOURNEY
        </p>

        <h2 className="mb-6 mt-2 text-3xl font-bold md:text-4xl">
          Experience
        </h2>

        <p className="text-lg leading-relaxed text-gray-300">
          My professional journey across eCommerce, CMS, and frontend development.
        </p>

        <div ref={timelineRef} className="relative mt-12 grid gap-y-8">
          <div className="absolute bottom-2 left-[7.45rem] top-2 w-px bg-cyan-900">
            <div
              className="absolute inset-0 w-full bg-cyan-400 origin-top"
              style={{
                transform: `scaleY(${progress})`,
              }}
            />
          </div>
          {experiences.map((experience) => (
            <div
              key={experience.period}
              className="relative grid grid-cols-[5.5rem_1rem_minmax(0,1fr)] gap-4 md:gap-6"
            >
              <p className="pt-1 text-right text-sm font-medium text-cyan-400">
                {experience.year}
              </p>

              <div className="relative z-10 flex justify-center">
                <span className="mt-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-[#0a0a0a]" />
              </div>

              {/* Experience card */}
              <div className="rounded-xl border border-gray-800 p-5 transition-colors duration-300 hover:border-cyan-400 md:p-6">
                <p className="mb-2 text-sm text-gray-400">
                  {experience.category}
                </p>

                <h3 className="text-lg font-semibold md:text-xl">
                  {experience.role}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {experience.description}
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="block">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
