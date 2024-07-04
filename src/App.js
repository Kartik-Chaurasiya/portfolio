import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {Skills} from "./components/Skills";
import {Project} from "./components/Project";
import Exp from "./components/Exp";
import Contact from "./components/Contact";
import {Footer_comp} from "./components/Footer_comp";
import {projects, skills, certifications, courses, papers} from "./assets/data";
import {Certifications} from "./components/Certifications";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills categorizedSkills={skills} />
      <Certifications certifications={certifications} courses={courses} papers={papers} />
      <Project categorizedProjects={projects} />
      <Exp />
      <Contact />
      <Footer_comp />
    </div>
  );
}

export default App;
