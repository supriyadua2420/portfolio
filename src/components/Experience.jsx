import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-8">Experience</h2>
        <ul className="relative border-l-2 border-pink-300 ml-4">
          {experience.map((exp, index) => (
            <li key={index} className="mb-8 ml-6 relative">
              <span className="absolute -left-4 top-0 w-3 h-3 bg-pink-500 rounded-full"></span>
              <h3 className="text-gray-600 text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} — {exp.years}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </li>
          ))}
      </ul>
      </div>
    </section>
  );
}
