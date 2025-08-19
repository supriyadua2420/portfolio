import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div key={index}
              className="bg-white shadow rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
              {/* <img src={proj.image} alt={proj.title} className="rounded-lg mb-4" /> */}
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2 text-gray-600">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
