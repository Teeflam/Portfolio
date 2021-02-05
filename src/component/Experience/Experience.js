import { ExperienceInfo } from "./ExperienceInfo";
import "./Experience.css";
import "./ExperienceInfo.css";
export const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h1>Experience</h1>
      <hr />

      <div className="experience-container">
        <ExperienceInfo
          date="Janvier 2019- Fevrier 2019"
          name="Joli B-Aubervilliers (93200)"
          poste="Conseiller de vente"
          describe="Conseil/Gestion de la clientèle, Gestion des stock."
        />
        <ExperienceInfo
          date="Juillet 2016 - Août 2016 "
          name="Nouvelle Peninsula Courbevoie la Défense (92400)"
          poste="Serveur"
          describe="Communication, Travail d'équipe."
        />
      </div>
    </div>
  );
};
