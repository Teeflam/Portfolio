import Navbar from "./component/Navbar/Navbar";
import { About } from "./component/About";
import { Formation } from "./component/Formation";
import { Competence } from "./component/Competence/Competence";
import { Experience } from "./component/Experience";
import { Projet } from "./component/Projet/Projet";
import { Activite } from "./component/Activite";
import { Contact } from "./component/Contact/Contact";
import { Footer } from "./component/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <About />
        <div className="formation_skill">
          <Formation />
          <Competence />
        </div>
        <Experience />
        <Projet />
        <Activite />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
