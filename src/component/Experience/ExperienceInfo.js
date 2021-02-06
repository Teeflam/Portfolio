import React from "react";
import "./ExperienceInfo.css";
export const ExperienceInfo = ({ date, name, poste, describe }) => {
  return (
    <>
      <div className="experience-info">
        <div className="experience-date">{date}</div>
        <div className="experience-name">{name}</div>
        <div className="experience-poste">{poste}</div>
        <div className="experience-describe">{describe}</div>
      </div>
    </>
  );
};
