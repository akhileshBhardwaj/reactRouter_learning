import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        <ul className="flex gap-6 text-lg">
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to My Website
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Build modern and responsive web applications using React.js and
            Tailwind CSS. Fast, beautiful and user-friendly designs.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-4">
        <p>© 2026 MyWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;