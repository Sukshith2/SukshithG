import React from 'react'
import { skills } from '../data/information'
import useInView from '../hook/useInView'
import SkillCard from './SkillCard';
import '../styles/skills.css';

const Skills = () => {
  const[ref, inView] = useInView();
  return (
    <section className='skills' id='skills'>
        <div className='skills_header'>
            <span className='section-label'>Expertise</span>
            <h2 className='section-title'>Tools of My Tech</h2>
            <p className='section-subtitle' style={{margin: "0px auto"}}>
                  A curated stack I've mastered through real projects, not just tutorials.
            </p>
        </div>

        <div ref={ref} className='skill__grid'>
            {skills.map((skill, i)=>(
              <SkillCard key={skill.name} skill={skill} inView={inView} index={i}/>))}
        </div>

    </section>
  )
}

export default Skills