import React from "react";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyWebsite</div>

        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome To My Website</h1>

          <p>
            Build modern web applications with React.js. Fast, responsive and
            user-friendly designs.
          </p>

          <button>Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MyWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
