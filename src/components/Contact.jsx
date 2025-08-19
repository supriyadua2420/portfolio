export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-4">Get in Touch</h2>
      <p className="mb-8">Feel free to reach out for collaborations or just a friendly hello 👋</p>
      <a
        href="mailto:youremail@example.com"
            className="px-6 py-3 bg-pink-400 text-white rounded-full shadow-md hover:bg-pink-500 transition-colors duration-300"
        >
        Email Me
      </a>
    </section>
  );
}
