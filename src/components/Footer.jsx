import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-mark">O</span>
            <span>Omkar Ghule</span>
          </a>

          <p>
            Aspiring Software Engineer building projects,
            solving problems, and continuously learning.
          </p>
          <p>Gmail : ghuleomkar515@gmail.com</p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href="https://github.com/ghuleomkar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/omkar-ghule-993512345"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/Omkar_1234/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Omkar Ghule. Designed and built by me.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;