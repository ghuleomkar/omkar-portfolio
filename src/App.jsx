import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CodingProfiles from "./sections/CodingProfiles";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";
import Footer from "./components/Footer"

function App() {
return (
<>
 <Navbar />
  <main>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <CodingProfiles/>
    <Journey/>
    <Contact/>
    <Footer/>
  </main>
</>

);
}

export default App;
