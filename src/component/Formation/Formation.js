import { FormationInfo } from "./FormationInfo";
import "./Formation.css";

export const Formation = () => {
  return (
    <div id="formation" className="formation">
      <div className="formation-container">
        <h1>Formation</h1>
        <hr />
        <div className="formation-info">
          <FormationInfo
            date="2017-2021"
            name="EFREI PARIS - VILLEJUIF"
            title="Majeur Software Engineering"
            describe="Java, C#, UI/UX Design, DevOps, Méthodologie Agile, Management de projet. "
          />
          <FormationInfo
            date="2019"
            name="SOUTHEAST UNIVERSITY NANJING"
            title="Semestre d'immersion"
            describe="UML, Operating System, Network and Protocols,
            Databases, Java."
          />
          <FormationInfo
            date="2015-2017"
            name="LYCEE DORIAN, PARIS XI"
            title="BAC STI2D mention Bien"
            describe="Specialité : Système d'Information et Numérique."
          />
        </div>
      </div>
    </div>
  );
};
