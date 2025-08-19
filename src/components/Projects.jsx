import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 transition-transform transform hover:-translate-y-2 hover:shadow-lg duration-300 hover:bg-pink-50">
                <h3 className="text-xl font-semibold text-pink-500">{proj.title}</h3>
                <p className="mt-2 text-gray-600">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-pink-500 hover:underline font-medium"
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
