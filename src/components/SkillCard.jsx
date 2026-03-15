import React from 'react'
import '../styles/skills.css';

const SkillCard = ({inView, skill, index}) => {
  return (
    <div className='skill-card' style={{opacity : inView ?  "1" : '0', transform: inView ? "translateY(0)" : "translateY(24px)",  transitionDelay:  `${index * 60}ms`}}>
        <div className='skill-card__header'>
            <div className='skill-card-left'>
                <span className='skill-card_icon'>{skill.icon}</span>
                <span className='skill-card_name'>{skill.name}</span>
            </div>
            <span className='skill-card_percent'>{skill.level}%</span>
        </div>

        <div className='skill-card-bar-big'>
            <div className='skill-card-bar-fill' style={{ width: inView ? `${skill.level}%` : "0%" }}>
            </div>
        </div>
   </div>
  )
}

export default SkillCard