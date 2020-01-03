import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import ArrowUp from '../../Assets/Arrow-up.svg';
import ArrowDown from '../../Assets/Arrow-down.svg';
import { NavBar } from '../mutual/navBar/NavBar';

const Projects = () => {
    return (
    <section className="my-projects">
      <NavBar />
      <Link to={{ pathname: "/" }} className="arrow-up-router">
        <img
          className="arrow-up"
          src={ArrowUp}
          alt="upwards arrow to move to the main page"
        >
        </img>
      </Link>

      <section className="project-page">
        <h1 className="my-projects">Projects</h1>
        <hr className="line"/>
        <div className="project">
          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/myBodyBack.png")}
            alt="project"
            ></img>

          </article>
          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/NomNom.png")}
            alt="project"
            ></img>

          </article>

          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/githubPage.png")}
            alt="project"
            ></img>

          </article>
        </div>
      </section>
     
      <Link to={{ pathname: "/contact-me" }} className="arrow-down-router">
        <img
          className="arrow-down"
          src={ArrowDown}
          alt="downwards arrow to move to the main page"
        >
        </img>  
      </Link>
    </section>
    )

};

export { Projects };

