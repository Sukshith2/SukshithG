import React from 'react'
import {personal, TechTags} from '../data/information'
import '../styles/about.css'
import susiImg from "../assets/susi.jpg";
import useInView from '../hook/useInView'

const AboutUs = () => {
  const [ref, inView] = useInView();

  return (
   <section className='about' id='about'>
    <div ref={ref} className='about_inner'>
       <div className={`about__visual ${inView ? "about__visual--visible" : ""}`}>
        <div className='about_avatar'>
          <div className='about_avata   r-glow'/>
        <img src={susiImg} alt="Susi" style={{width:"100%"}} />
             <span className="about__avatar-initials text-gold"> </span>
            <div className="about__avatar-tag">
              <span className="about__avatar-tag-text">
                // since 2024
              </span>
            </div>
            </div>
        </div>
    
    <div className={`about_text ${inView ? "about__text--visible" : ""}`}>
    <span className="section-label">About Me</span>
    <h2 className='section_title'>The Story Behind <br/ >The Code</h2>
    <p className="about__bio">{personal.bio1}</p>
    <p className="about__bio">{personal.bio2}</p>   
    <div className='about_tags'>    {
        TechTags.map((tags)=>(
            <span className="about__tag" key={tags}>{tags}</span>

        ))
    }
    </div>
    <a href={personal.resume} className="btn-outline about__resume">Download Resume ↓</a>
   </div>
   </div>
   </section>
  )
}

export default AboutUs