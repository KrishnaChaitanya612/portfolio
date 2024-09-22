import React from 'react';
import {sociallinks} from './Data';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
const Contact = () => {
    return (
        <>
        <section id='contact'>
        <Fade left>
         <div className="contact-title">CONTACT</div>
         </Fade>
         <Fade right delay={700}>
         <div className="contact_headerBar "></div>
         </Fade>
         <Fade delay={800}>
         <h3>LET'S WORK TOGETHER</h3>
         <p>Currently I'm looking for new oppurtunities. <br/> Wanna hire me or do you have something to tell me? <br/> You are always welcome   </p>
         </Fade>
         <Bounce delay={900}>
          <div className="rounded-social-buttons">
            {
                sociallinks.map((socaillink)=>{
                    const {id,iconStyle,link,icon} = socaillink;
                    return (
                        <span key={id}>
                        <a  className={`social-button ${iconStyle}`} href={link} rel="noreferrer" target="_blank">{icon}</a>
                        </span>
                    )
                })
            }
                   
                </div>
         </Bounce>
        </section>
            
        </>
    )
}

export default Contact;
