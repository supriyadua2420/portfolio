export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-500">Supriya Dua</h1>
        <ul className="flex space-x-6 text-gray-600">
          <li><a href="#about" className="hover:text-pink-500">About</a></li>
          <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
          <li><a href="#experience" className="hover:text-pink-500">Experience</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
