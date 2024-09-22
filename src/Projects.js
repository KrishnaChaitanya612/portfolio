import React, { useState } from 'react';
import {projects} from './Data';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const allCategories = ['all', ...new Set(projects.map((project) => project.category))];

const Projects = () => {
  const [myProjects, setMyProjects] = useState(projects);
  const [categories, setCategories] = useState(allCategories);
  const [active, setActive] = useState(0);

const filterProjects = (category,index) => {

if (category === 'all') {
    setMyProjects(projects);
    setActive(index);
    return;
}
const newProjects = projects.filter((project) => project.category === category);
setMyProjects(newProjects);
setActive(index);
};

    return (
        <>
        <section id="projects">
        <Fade right>
         <div className="projects-title">PROJECTS</div>
         </Fade>
         <Fade left delay={700}>
         <div className="header-bar "></div>
         </Fade>
         <Categories categories={categories} active = {active} filterProjects={filterProjects} />
         <Portfolio myProjects={myProjects} />
        </section>
        </>
    )
}

const Categories = ({ categories, filterProjects, active }) => {
  return (
    <>
    <Zoom delay={800}>
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className= {active == index ? 'filter-btn active-category' : 'filter-btn'}
            key={index}
            onClick={() => filterProjects(category, index)}
          >
            {category}
          </button>
        );
      })}
    </div>
    </Zoom>
    </>
  );
};

const Portfolio = ({ myProjects }) => {
  return (
    <>
    <Fade up delay={900}>
    <ul id="rig">
      {myProjects.map((project) => {
        const { id, img, title, desc, techs, link  } = project;
        return (
        
   <li key={id}>
     
        <div className="rig-cell" >
            <img className="rig-img" src={img} alt={title}/>
            <span className="rig-overlay"></span>
            <div className="rig-text">
             <div className="rig-title">{title} </div> <br/>
             <div className="rig-desc">{desc}</div><br/>
             <div className="rig-techs">
               <ul>
                 {
                   techs.map((tech,index) => {
                     return(
                       <li key={index}>{tech}</li>
                     )
                   })
                 }
               </ul>
             </div><br/>
             <a href={link} rel="noreferrer" target="_blank" className="rig-link">Visit Site</a>
            </div>
            
        </div>
    </li>
   
        );
      })}
    </ul>
    </Fade>
    </>
  );
};

export default Projects;
