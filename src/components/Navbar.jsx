import React, { useState } from 'react'
import { navLinks } from '../data/information'
import  '../styles/navbar.css'

const Navbar = () => {

const [active, setActive] = useState('Home');

  return (
    <nav className='navbar'>
        <div className='navbar_logo'>
            {"{(`< Sukshith />`)}"}
        </div>

        <ul className='navbar_links'>
            {navLinks.map((data)=>(
                <li key={data}>
                    <button className={`navbar_link ${active === data ? "navbar_links--active" : ""}`}>{data}</button>

                </li>
            ))}        
        </ul>

        <a href="" className='btn-primary navbar_cta'>Hire Me</a>


    </nav>
  )
}

export default Navbar