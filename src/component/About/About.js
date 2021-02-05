import profile from "../../assets/profile.png";

import "./About.css";
export const About = () => {
  return (
    <div id="about" className="about">
      <h1> à Propos</h1>
      <hr />
      <div className="about-container">
        <div className="about-name">Franck DI</div>
        <img className="about-picture" src={profile} alt="Profile" />
        <div className="about-description">
          Etudiant à EFREI PARIS en majeur Software Engineering. Actuellement en
          recherche de stage d'une durée d'au moins 4 mois à partir du 26 avril
          2021
        </div>
      </div>
    </div>
  );
};
