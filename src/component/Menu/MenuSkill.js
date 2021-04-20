import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Formation } from '../Formation'
import { Competence } from '../Competence'
import { Experience } from '../Experience'
import './MenuSkill.css'
export const MenuSkill = () => {
  const [activeItem, setActiveItem] = useState('home')

  const handleClick = (e, { name }) => {
    setActiveItem(name)
  }
  const clickElement =
    activeItem === 'skill' ? (
      <Competence />
    ) : activeItem === 'experience' ? (
      <Experience />
    ) : (
      <Formation />
    )
  return (
    <div id="menuSkill" className="menuSkill">
      <Menu widths="3">
        <Menu.Item
          name="formation"
          active={activeItem === 'formation'}
          onClick={handleClick}
        ></Menu.Item>
        <Menu.Item
          name="skill"
          active={activeItem === 'skill'}
          onClick={handleClick}
        ></Menu.Item>
        <Menu.Item
          name="experience"
          active={activeItem === 'experience'}
          onClick={handleClick}
        ></Menu.Item>
      </Menu>
      {clickElement}
    </div>
  )
}
