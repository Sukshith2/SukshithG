import React from 'react'
import { projects } from '../data/information'
import useInView from '../hook/useInView'
import ProjectsCrad from './ProjectsCrad';
import '../styles/project.css';

const Projects = () => {
    const [ref, inView] = useInView();
  return (

    <section className='projects' id='projects'>
        <div className='project-header'>
            <span className='section-label'>My Work</span>
            <h2 className='section-title'>Projects</h2>
            <p className='section-subtitle' style={{margin : "0 auto"}}> A handful of things I've built that I'm particularly proud of.</p>
        </div>
        <div ref={ref} className='projects-grid'>
            {projects.map((pro, i)=>(
                 <ProjectsCrad inView={inView} key={pro.title} pro={pro} index={i}/>
            ))}
        </div>

    </section>
  )
}

export default Projects