export default function Hero() {
  return (
    <section className="h-[65vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white px-4 sm:px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
        Hi, I'm Supriya
      </h1>
      <p className="mt-3 text-lg sm:text-xl text-gray-200 text-center">
        Full Stack Developer
      </p>
      <a
        href="#experience"
        className="mt-8 px-6 py-3 bg-white text-pink-500 rounded-full shadow-lg hover:bg-pink-100 transition" >
        View My Work
      </a>
    </section>
  );
}
