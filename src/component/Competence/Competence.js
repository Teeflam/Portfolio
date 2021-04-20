import React from 'react'
import french from '../../assets/french.png'
import british from '../../assets/british.png'
import china from '../../assets/china.png'
import spanish from '../../assets/spanish.png'
import './Competence.css'

export const Competence = () => {
  return (
    <div className="skill">
      <h1>Compétences </h1>
      <hr />
      <h2>Programmation :</h2>

      <div className="skill-prog">
        <div className="skill-prog-title">Langages de Programmation</div>
        <p className="skill-prog-content">C , C++, C#, Java , Python</p>
        <div className="skill-prog-title">Web Development</div>
        <p className="skill-prog-content">
          HTML/CSS, Javascript,PHP, Node.js, Java, React, Angular, SQL, MongoDB
        </p>
      </div>

      <h2>Langue :</h2>

      <div className="skill-lang">
        <img className="skill-lang-flag" src={french} alt="French" />
        <p className="skill-lang-name">Francais : Maternelle</p>
        <img className="skill-lang-flag" src={british} alt="English" />
        <p className="skill-lang-name"> Anglais : Avancé (TOEIC : 905/900)</p>
        <img className="skill-lang-flag" src={china} alt="Chinese" />
        <p className="skill-lang-name"> Chinois : Courant </p>
        <img className="skill-lang-flag" src={spanish} alt="Spanish" />
        <p className="skill-lang-name"> Espagnol : Pré-Intermédiare</p>
      </div>
    </div>
  )
}
