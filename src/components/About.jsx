export default function About() {
  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-b from-pink-50 to-white text-gray-700"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md p-6 space-y-4">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-2 text-center">
          About Me
        </h2>
        <p className="break-words">
          I’m a full-stack developer with hands-on experience in <b>C# .NET</b>,{" "}
          <b>Java</b>, <b>React</b>, <b>MongoDB</b>, <b>PostgreSQL</b> and <b>C++</b>. I enjoy
          building everything from scalable <b>microservices</b> and secure{" "}
          <b>APIs</b> to polished, interactive <b>user interfaces</b>.
        </p>
        <p className="break-words">
          My work spans backend migrations, performance
          optimization and authentication systems. I take pride in writing clean,
          maintainable code and turning complex challenges into elegant,
          reliable solutions.
        </p>
        <p className="break-words">
          Driven, detail-oriented, and passionate about creating software that
          not only works seamlessly but also makes a meaningful impact for its
          users.
        </p>
      </div>
    </section>
  );
}
