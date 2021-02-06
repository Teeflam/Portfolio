import React from "react";
import "./Activite.css";
import efrei from "../../assets/efreiint.png";
import esport from "../../assets/4esport.png";
import anime1 from "../../assets/minato.png";
import anime2 from "../../assets/kimetsu.png";
import FadeInSection from "./../FadeInSection";

export const Activite = () => {
  return (
    <div id="activity" className="activity">
      <h1> Activité & Passion</h1>
      <div className="activity-container">
        <div className="activity-efrei">
          <h3>Efrei International</h3>
          <p>Tresorier</p>
          <FadeInSection>
            <img src={efrei} alt="Efrei International" />
          </FadeInSection>
        </div>

        <div className="activity-esport">
          <h3>4esport</h3>
          <p>Joueur Compétitive sur League Of Legend</p>
          <FadeInSection>
            <img src={esport} alt="4esport" />
          </FadeInSection>
        </div>

        <div className="activity-japan">
          <h3>Culture Japonaise</h3>
          <p>Anime / Manga </p>
          <div className="activity-picture">
            <FadeInSection>
              <img className="activity-anime1" src={anime1} alt="anime" />
              <img className="activity-anime2" src={anime2} alt="anime" />
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};
