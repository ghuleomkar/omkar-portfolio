import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },
{ name: "Projects", href: "#projects" },
{ name: "Coding Profiles", href: "#coding" },
{ name: "Contact", href: "#contact" },
];

function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const handleLinkClick = () => {
setIsOpen(false);
};

return (
    <header className="navbar"> <div className="container navbar-container"> <a href="#home" className="logo" onClick={handleLinkClick}> <span className="logo-mark">O</span> <span>Omkar</span> </a>

    <nav className={`nav-links ${isOpen ? "open" : ""}`}>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={handleLinkClick}
        >
          {link.name}
        </a>
      ))}
    </nav>

    <div className="navbar-actions">
        <a href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-btn">
          View Resume
        <ArrowUpRight size={16} />
      </a>

      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  </div>
</header>


);
}

export default Navbar;
