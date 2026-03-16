import React from 'react'
import { personal } from '../data/information'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <span className='footer-logo text-gold'>
            {`<${personal.name.split(" ")[0]}/>`}
        </span>

        <span className='footer_copy'>
            @{new Date().getFullYear()} - Built with Susi </span>
        
        <button className='btn-outline footer_top' onClick={()=> window.scrollTo({top:0, behavior:"smooth"})}>Top ↑</button>

        </footer>
  )
}

export default Footer