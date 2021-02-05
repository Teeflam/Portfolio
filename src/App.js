import Navbar from "./component/Navbar";
import { About } from "./component/About";
import { Formation } from "./component/Formation";
import { Competence } from "./component/Competence";
import { Experience } from "./component/Experience";
import { Projet } from "./component/Projet";
import { Activite } from "./component/Activite";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

        <Switch>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
