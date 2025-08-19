// About Section
export default function About() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-pink-50 to-white text-gray-700">
      <div className="max-w-4xl mx-auto px-4 bg-white rounded-xl shadow-md p-6 space-y-4">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
        </div>
        <h2 className="text-3xl font-bold text-pink-500 mb-2 text-center">About Me</h2>
        <p>
          Full-stack developer with experience in C# .NET, Java, React, MongoDB, and C++, building everything from scalable microservices and secure APIs to polished, interactive user interfaces.
        </p>
        <p>
          I’ve contributed to backend migrations, performance optimizations, authentication integrations, and deployment pipelines with Docker. I’m a quick learner who thrives on tackling new challenges, adapting to emerging technologies, and delivering solutions that are reliable, maintainable, and impactful.
        </p>
        <p>
          Hardworking, detail-oriented, and passionate about creating software that not only works well but makes a difference for its users.
        </p>
      </div>
    </section>
  );
}
