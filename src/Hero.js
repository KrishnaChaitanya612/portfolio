import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Hero = () => {
    
    return (
        <>
        <section id="hero" >
            <div className="flex-container">
                <div className="row">
                <Slide left>
                    <div className="hero-text">Hello, I'm <span>Krishna Chaitanya</span>.
                    <br/>
                    I'm a full-stack web developer.
                    </div>
                </Slide>
                    
                </div>    
                <Zoom delay={500}>
                 <a href="#projects" className="hero-button">View my work <ArrowForwardIcon className="arrow"/> </a>                  
                </Zoom>                
            </div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
        </section>
            
        </>
    )
}



export default Hero;

