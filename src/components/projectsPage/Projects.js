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
        {/* <h2 className="projects-title">Projects</h2> */}
        <hr className="line"/>
        <div className="project">

          <article className="project-item">
            {/* <h3>
              My Body Back
            </h3> */}
            <img 
            className="project-image"
            src={require("../../Assets/myBodyBack.png")}
            alt="project"
            ></img>
            {/* <h3>
              My Body Back
            </h3>
            <p>
              React | Netlify | Lambda | Jest | Enzyme | Airtable | React-Swipeable
            </p> */}
            <div className="overlay">
              <div className="text">
                <p>
                A MVP built as part of the Founders&Coders' Tech for Better programme

                <br>
                </br>
                <br></br>
                The app aims to provide support for people with experience of sexual assault. The app will encourage more people to go for a routine cervical screening
                </p>
                <p>
                  Role: <br></br>UX/UI & developer<br></br>
                </p>
                <a href="https://github.com/fac-17/My-Body-Back" target="_blank" className="github-link">
                  Go to Github
                </a>
              </div>
            </div>
          </article>

          <article className="project-item">
            {/* <h3>
              NomNom
            </h3> */}
            <img 
            className="project-image"
            src={require("../../Assets/NomNom.png")}
            alt="project"
            ></img>
            {/* <h3>
              NomNom
            </h3> */}
            <p>

            </p>
            <div className="overlay">
              <div className="text">
                <p>
                A MVP built as part of the Founders&Coders' student project

                <br>
                </br>
                <br></br>
                Build a planning meal app that suggest a week-long meal plans with common ingredients and provides healthy options in order to reduce food waste.
                </p>
                <p>
                  Role: <br></br>DevOps & developer<br></br>
                </p>
                <a href="https://github.com/fac-17/NomNom" target="_blank" className="github-link">
                  Go to Github
                </a>
              </div>
            </div>

          </article>

          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/githubPage.png")}
            alt="project"
            ></img>
            <div className="overlay">
              <div className="text">
                <p>
                  Visit my Github profile to find out about more projects&repositories
                <br>
                </br>
                <br></br>
                Weekly projects realised to practise the skill the learnt at Founders&Coders
                </p>
                <a href="https://github.com/frannyfra" target="_blank" className="github-link">
                  Go to Github
                </a>
              </div>
            </div>

          </article>
        </div>
        <hr className="line"/>
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

