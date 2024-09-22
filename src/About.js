import React from 'react';
import Progressbar from "./Progressbar";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function About() {
    return (
        <>
        <section id='about'>
        <Fade left>
          <div className="about-title">ABOUT</div>
        </Fade>
        <Fade left delay={700}>
           <div className="header-bar "></div>
        </Fade>
          <div className="flex">
            <div className="flex my-flex ">
                <Fade left delay={800}>  
                <img src='images/my_image.png' alt="my_image" className="myImage"/>
                </Fade>
                <Bounce delay={900}>
                <div className="myTitle">Who's this guy?</div>
                </Bounce>
                <Fade down delay={1000}>
                <div className="myDesc">Hello! I'm Krishna Chaitanya, a Full Stack Web Developer and UI/UX enthusiast from India. I love building awesome and beautiful websites. </div>
                </Fade>
                <Bounce delay={1000}>
                  <a href="#contact">Let's have a talk</a>
                </Bounce>
            </div>
               
               <Progressbar /> 
               
          </div>   
        </section>
            
        </>
    )
}

export default About
