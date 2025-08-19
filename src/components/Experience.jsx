import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-8">Experience</h2>
        <ul className="space-y-6">
          {experience.map((exp, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} — {exp.years}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
