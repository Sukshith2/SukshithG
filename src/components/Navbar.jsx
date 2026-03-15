import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/information'
import  '../styles/navbar.css'

const Navbar = () => {

const [active, setActive] = useState('Home');
const [scroll, setScrolled] = useState(false);

useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
},[]);

const scrollTo = (id) =>{
    setActive(id);
    if(id === "Home"){
        window.scrollTo({top : 0, behavior: 'smooth'});
        return;
    }
    document.getElementById(id.toLowerCase())?.scrollIntoView({behavior: 'smooth'});

}




  return (
    <nav className={`navbar ${scroll ? "navbar--scrolled": ""}`}>
        <div className='navbar_logo' onClick={() => scrollTo("Home")}>
            {"{(`< Sukshith />`)}"}
        </div>

        <ul className='navbar_links' >
            {navLinks.map((data)=>(
                <li key={data}>
                    <button className={`navbar_link ${active === data ? "navbar_links--active" : ""}`} onClick={()=> scrollTo(data)}>{data}</button>

                </li>
            ))}        
        </ul>

        <a href="#contact" className='btn-primary navbar_cta' onClick={() => scrollTo("Contact")}>Hire Me</a>


    </nav>
  )
}

export default Navbar