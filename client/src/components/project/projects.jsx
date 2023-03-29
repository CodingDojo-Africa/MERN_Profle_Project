import React,{useState,useEffect} from 'react'

import { Link } from "react-router-dom";
import '../../status/css/project.css'
import '../../status/css/projects.css'
import '../../status/css/title.css'
const Projects=({projects})=> {


  return (
    
    <section id="projects">
    <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div className="project-grid-box" id="bg">
  {projects.map((project) =>
    project.catagorie === "Ai Project" ? (
      <div className="project" key={project._id}>
        <span className="project-link-box">
          <Link to={`/show/${project._id}`}>
            <i className="fas fa-eye"></i>
          </Link>
          <Link to={`/show/${project._id}`}>
            <i className="fab fa-github"></i>
          </Link>
        </span>
        <div className="project-img-box">
          <Link to={`/show/${project._id}`}>
            <img src={project.picturePath}alt="" />
          </Link>
          <h2>{project.title}</h2>
        </div>
      </div>
    ) : null
  )}
</div>

  </section>
  );
};

export default Projects