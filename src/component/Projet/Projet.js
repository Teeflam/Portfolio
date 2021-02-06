import React from "react";
import "./Projet.css";
import late from "../../assets/late.png";
import rdv from "../../assets/rdv.png";
import fevent from "../../assets/fevent.png";
import sql from "../../assets/sql.png";
import java from "../../assets/java.png";
import unity from "../../assets/unity.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/node.png";

export const Projet = () => {
  return (
    <div className="project-container">
      <h1> Projet</h1>
      <hr />
      <div className="project-poster">
        <div className="project-img">
          <img src={late} alt="Projet 1" />
          <div className="project-info">
            <div className="project-text">
              <p className="project-title">Don't Be Late</p>
              <p className="project-describe">
                Jeux de plateforme 2D. <br />
                Vous incarner le rôle d'une élève qui n'a jamais été en retard
                qui devras arrivé à l'ecole à l'heure mais le monde à changer un
                événement apocalyptique sur la terre à eu lieu mais peu importe
                les circonstance rien ne pourras vous empêcher d'arrivé a
                l'heure peu importe les obstacles..
              </p>
            </div>
            <div className="project-dev">
              <p className="project-dev-tools">Developpement tools :</p>
              <img src={unity} alt="unity" />
            </div>
          </div>
        </div>

        <div className="project-img">
          <img src={rdv} alt="Projet 2" />
          <div className="project-info">
            <div className="project-text">
              <p className="project-title">Gestionnaire de RDV</p>
              <p className="project-describe">
                Dans l'optique de pouvoir gérer plus simplement les rendez vous,
                une application de gestion été nécessaire pour un cabinet
                médical qui avait de plus en plus de clientèle.
                <br />
                L'application va permettre au médecin de pouvoir avoir tout sur
                la main la création de nouveau client,ajouter un rendez-vous,
                les information de la séanceet aussi un planning détaillés des
                rendez-vous à venir.
                <br />
                Une partie client est aussi mis en place pour que les clients
                voient les rendez-vous à venir
              </p>
            </div>
            <div className="project-dev">
              <p className="project-dev-tools">Development tools :</p>
              <img src={sql} width="120px" alt="sql" />
              <img src={java} alt="java" />
            </div>
          </div>
        </div>

        <div className="project-img">
          <img src={fevent} alt="Projet 3" />
          <div className="project-info">
            <div className="project-text">
              <p className="project-title">FEvent (En cours...)</p>
              <p className="project-describe"></p>
            </div>
            <div className="project-dev">
              <p className="project-dev-tools">Development tools :</p>
              <img src={react} alt="react" />
              <img src={nodejs} alt="nodejs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
