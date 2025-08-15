export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-pink-200 text-center">
      <h1 className="text-5xl font-bold text-white">Hi, I’m Supriya Dua</h1>
      <p className="mt-4 text-lg text-white max-w-xl">
        Full-Stack Developer | Crafting Clean & Modern Web Apps
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-pink-500 rounded-full shadow-lg hover:bg-pink-100 transition"
      >
        View My Work
      </a>
    </section>
  );
}
