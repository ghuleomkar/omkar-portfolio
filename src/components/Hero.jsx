import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-dot" />
            ASPIRING SOFTWARE ENGINEER
          </p>

          <h1>
            Hi, I'm <span>Omkar Ghule.</span>
          </h1>

          <h2>
            I build software and solve
            <br />
            challenging problems.
          </h2>

          <p className="hero-description">
            I build full-stack web applications and enjoy solving complex
            problems using Data Structures and Algorithms.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work 
              <ArrowDown size={17}/>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me 
               <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-socials">
  <a
    href="https://github.com/ghuleomkar"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub size={20} />
  </a>

  <a
    href="https://www.linkedin.com/in/omkar-ghule-993512345"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn size={20} />
  </a>

  <a
    href="https://leetcode.com/u/Omkar_1234/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
  >
    <SiLeetcode size={20} />
  </a>
</div>
</div>

        <div className="hero-side">
          <p className="hero-status">
            <span className="status-dot" />
            Building & learning continuously
          </p>

          <div className="hero-code-card">
            <div className="code-card-header">
              <span />
              <span />
              <span />
            </div>

            <div className="code-content">
              <p>
                <span className="code-key">const</span>{" "}
                <span className="code-name">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                role:{" "}
                <span className="code-string">"Software Engineer"</span>,
              </p>

              <p className="code-indent">
                focus:{" "}
                <span className="code-string">"Full Stack & DSA"</span>,
              </p>

              <p className="code-indent">
                mindset:{" "}
                <span className="code-string">"always learning"</span>
              </p>

              <p>{"}"};</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;