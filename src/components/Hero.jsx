import React from 'react'
import { personal } from '../data/information'
import  '../styles/Hero.css' 

const Hero = () => {

  // const { text, cursor } = useTypewriter(personal.roles);

  const scrollTo = (id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <section className='hero' id='hero'>
      <div className='hero_orb hero_orb--top'/>
      <div className='hero_orb hero_orb--bottom'/>
      <div className='hero_grid'/>


        <div className='hero_content'>
        <div className='hero_badge fade_up'>
          <span className='hero_badge-dot'/>
          <span>Available for Work</span>
         </div>


   <h1 className='hero_title fade_up'>
      Hello, I'm <br/> <span className='text-gold'>{personal.name}</span></h1>

      <div className='hero_role fade_up'>
        <span className='hero_role-coment'>{"//"}</span>
        <span className='hero_role-text'>FRONTEND DEVELOPER</span>
        <span className="hero__role-cursor">|</span>
      </div>
      <p className='hero_bio'>{personal.bio1}</p>

      <div className='hero_actions fade_up'>
        <button className='btn-primary' onClick={()=> scrollTo("projects")}>View My Work ↓</button>
        <button className='btn-outline' onClick={()=> scrollTo("contact")}>Let's Talk →</button>

      </div>
        </div>

        <div className="hero__ring-wrap" aria-hidden="true">
        <div className="hero__ring hero__ring--outer" />
        <div className="hero__ring hero__ring--dashed" />
        <div className="hero__ring hero__ring--inner" />
        <div className="hero__badge-circle">
          <span className="hero__badge-circle-text">{personal.shortName}</span>
          <span className="hero__badge-circle-sub">DEV</span>
        </div>
      </div>
   
        
    </section>
  )
}

export default Hero