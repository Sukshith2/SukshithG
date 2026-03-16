import React, { useState } from 'react'
import useInView from '../hook/useInView'
import { socials } from '../data/information';
import "../styles/contact.css"
import { sendContact } from '../services/contactApi';

const contact = () => {
    const [ref, inView] = useInView();
    const [form , setForm ] = useState({name:"", email : "", phone: "", message : ""});
    const [sent, setSent] = useState(false);


    function handleChnage(e){
        setForm((prev)=> ({...prev, [e.target.name]:e.target.value}))
    }

    async function handleSumbit (e){
        e.preventDefault();
        const res = await sendContact(form);
        
        if(res.success){
        setSent(true);
        }
    }

  return (
    <section id='contact' className='contact'>
        <div  ref= {ref} className={`conatct_inner ${inView ? "contact-inner-visible" : ""}`}>
            <div className='contact-header'>
                <span className='section-label'>Get in Touch</span>
                <h2 className='section-title'>Let's Build Something<br />Together</h2>
                <p className='section-subtitle' style={{margin : "auto 0"}}>
                      Open to freelance, full-time, and collaboration. I reply within 24h.
                </p>
            </div>
            <div className='contact-card'>
                <div className="conatct-row">
                    <div className="contact-filed">
                        <label className='contact-label'>name</label>
                        <input className='form-input' type="text" name='name' placeholder='Enter Name' value={form.name} onChange={handleChnage}/>
                    </div>
                    <div className="contact-filed">
                        <label className='contact-label'>Email</label>
                        <input className='form-input' type="text" name='email' placeholder='your@gmail.com' value={form.email} onChange={handleChnage} />
                    </div>
                    <div className="contact-filed">
                        <label className='contact-label'>PhoneNumber</label>
                        <input className='form-input' type="phone" name='phone' placeholder='+919606715413' value={form.phone} onChange={handleChnage}/>
                    </div> 
                    </div>
                    
                    <div className="contact-filed">
                        <label className='contact-label'>Message</label>
                        <input className='form-textarea'  name="message" rows={5}              placeholder="Tell me about your project..." value={form.message} onChange={handleChnage} />
                    </div>
                    <button className='btn-primary contact-submit' onClick={handleSumbit}>
                        {sent ? "✓ Message Sent! Thankyou..." : "Send Message →"}
                    </button>
                </div>

                <div className='conatct-social'>
                    {
                        socials.map((s)=>(
                               <a
              key={s.label}
              href={s.href}
              className="contact__social-btn"
              aria-label={s.label}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color       = "var(--gold)";
                e.currentTarget.style.boxShadow   = "0 0 20px rgba(245,185,50,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color       = "var(--text-secondary)";
                e.currentTarget.style.boxShadow   = "none";
              }}
            >
              {s.icon}
            </a>
        ))}
    </div>
    </div>
    </section>

  )
}

export default contact