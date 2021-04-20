import React from 'react'
import './FormationInfo.css'
export const FormationInfo = ({ date, name, title, describe }) => {
  return (
    <div className="formation-info">
      <div className="formation-date">{date}</div>
      <div className="formation-name">{name}</div>
      <div className="formation-title">{title}</div>
      <div className="formation-describe">{describe}</div>
    </div>
  )
}
