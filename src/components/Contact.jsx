export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-4 transition-transform transform hover:scale-105">Get in Touch</h2>
      <p className="text-gray-600 mb-8">
        Feel free to reach out for collaborations or just a friendly hello
      </p>
      <a
  href="mailto:youremail@example.com"
  className="px-6 py-3 bg-pink-300 text-white font-semibold rounded-full shadow-md hover:bg-pink-400 hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
>
  Email Me
</a>


    </section>
  );
}
