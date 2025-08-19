// Experience Section
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">Experience</h2>
        <ul className="relative border-l-2 border-pink-300 ml-4 space-y-4">
          {experience.map((exp, index) => (
            <li
              key={index}
              className="ml-6 relative p-4 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:bg-pink-50 duration-300"
            >
              <span className="absolute -left-4 top-0 w-3 h-3 bg-pink-500 rounded-full"></span>
              <h3 className="text-gray-600 text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} — {exp.years}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
