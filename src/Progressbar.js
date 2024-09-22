import React,{useState,useEffect} from 'react';
import {SKILLS_LIST} from './Data';
import Fade from 'react-reveal/Fade';


const ProgressLine = ({ label, percentage, barBg, progresBg, barHeight }) => {
    const [widths, setWidths] = useState(0);

    useEffect(() => {
        requestAnimationFrame(() => setWidths(percentage));
    }, [percentage]);

    return (
        
        <section className="progress-line">
            <span className="progress-line__label">{ label }</span>
            
            <div 
                className="progress-line__outer"
                style={ {
                    background: barBg,
                    height: `${barHeight}px`,
                }}>
                    
                <div 
                    className="progress-line__inner" 
                    style={ {
                        width: widths,
                        background: progresBg,
                        transition: 'width 2s',
                   } } />
                  
            </div>
             
        </section>
    );
};

const Progressbar = ()=> (
    <Fade right delay={800}>
  <section className="flex my-flex">
     
       
          {
              SKILLS_LIST.map((skill, index) => (
                  <ProgressLine
                      key={ index }
                      barHeight="15"
                      barBg="#efefef"
                      progresBg="#04c2c9"
                      label={ skill.label }
                      percentage={ skill.percentage } /> 
              ))
           }
      
      
    </section>
    </Fade>
);

export default Progressbar
