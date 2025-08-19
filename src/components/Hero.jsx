export default function Hero() {
  return (
    <section className="h-[70vh] flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-5xl font-bold">Hi, I'm Supriya</h1>
      <p className="mt-4 text-lg">Full Stack Developer</p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-pink-500 rounded-full shadow-lg hover:bg-pink-100 transition"
      >
        View My Work
      </a>
    </section>
  );
}
