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
      {/* <div className="arrow-up-router-fixed"> */}
      <Link to={{ pathname: "/" }} className="arrow-up-router">
        <img
          className="arrow-up"
          src={ArrowUp}
          alt="upwards arrow to move to the main page"
        >
        </img>
      </Link>
      {/* </div> */}

      <section className="project-page">
        <hr className="line"/>
        <div className="project">

          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/myBodyBack.png")}
            alt="project"
            ></img>
            <div className="overlay">
              <div className="text">
                <p>
                <a href="https://mybodyback.netlify.com/" target="_blank" className="project-link">My Body Back </a>
                <br></br>
                has been built as part of the Founders&Coders' Tech for Better programme

                <br>
                </br>
                <br></br>
                The app aim is to provide support for people with experience of sexual assault encuraging them to go for a routine cervical screening
                </p>
                <a href="https://github.com/fac-17/My-Body-Back" target="_blank" className="github-link">
                  Go to Github
                </a>
              </div>
            </div>
          </article>

          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/NomNom.png")}
            alt="project"
            ></img>
            <p>

            </p>
            <div className="overlay">
              <div className="text">
                <p>
                  <a href="https://nom-nom-fac.herokuapp.com/ " target="_blank" className="project-link">NonNom</a> 
                  <br></br>
                    has been built as part of the 
                  <br></br>
                  <a href="https://www.foundersandcoders.com/" target="_blank" className="project-link"> 
                  Founders&Coders' 

                  </a> 
                  student project
                  
                <br></br>
                <br></br>
                The app is a meal planning that suggest a week-long meal plans with common ingredients and provides healthy options in order to reduce food waste
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
      {/* <div className="arrow-down-router-fixed"> */}
      <Link to={{ pathname: "/contact-me" }} className="arrow-down-router">
        <img
          className="arrow-down"
          src={ArrowDown}
          alt="downwards arrow to move to the main page"
        >
        </img>  
      </Link>
      {/* </div> */}
    </section>
    )

};

export { Projects };

