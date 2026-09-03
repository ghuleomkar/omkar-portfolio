// import {
//   FaEnvelope,
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// import SectionHeading from "../components/SectionHeading";
// import ContactForm from "../components/ContactForm";

// function Contact() {
//   return (
//     <section id="contact" className="section contact-section">
//       <div className="container">
//         <SectionHeading
//           label="GET IN TOUCH"
//           title="Let's Build Something Great."
//           description="I'm currently focused on Software Engineering opportunities, internships, and opportunities to collaborate on interesting projects."
//         />

//         <div className="contact-grid">
//           <div className="contact-info">
//             <p className="contact-text">
//               Whether you have an opportunity, an interesting project, or just
//               want to connect, feel free to reach out.
//             </p>

//             <div className="contact-links">
//               <a href="mailto:YOUR_EMAIL_HERE">
//                 <FaEnvelope />
//                 <span>
//                   <small>EMAIL</small>
//                   ghuleomkar515@gmail.com
//                 </span>
//               </a>

//               <a
//                 href="#"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaLinkedin />
//                 <span>
//                   <small>LINKEDIN</small>
//                   Connect with me ↗
//                 </span>
//               </a>

//               <a
//                 href="https://github.com/ghuleomkar"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaGithub />
//                 <span>
//                   <small>GITHUB</small>
//                   View my repositories ↗
//                 </span>
//               </a>
//             </div>
//           </div>

//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;




import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import SectionHeading from "../components/SectionHeading";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Build Something Great."
          description="I'm currently focused on Software Engineering opportunities, internships, and opportunities to collaborate on interesting projects."
        />

        <div className="contact-simple">
          <div className="contact-intro">
            <p>
              Whether you have an opportunity, an interesting project, or just
              want to connect, feel free to reach out.
            </p>
          </div>

          <div className="contact-links">
            <a
              href="mailto:ghuleomkar515@gmail.com"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>EMAIL</span>
                <h3>ghuleomkar515@gmail.com↗</h3>
              </div>
            </a>

            
            <a
              href="https://leetcode.com/u/Omkar_1234/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <FaLinkedin />
              </div>

              <div>
                <span>LINKEDIN</span>
                <h3>Let's connect ↗</h3>
              </div>
            </a>

            <a
              href="https://github.com/ghuleomkar"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >
              <div className="contact-link-icon">
                <FaGithub />
              </div>

              <div>
                <span>GITHUB</span>
                <h3>View my work ↗</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;