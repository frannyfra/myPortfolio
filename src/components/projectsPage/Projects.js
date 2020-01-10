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
        <hr className="line"/>
        <section className="project">
          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/MyBodyBack.png")}
            alt="project"
            ></img>
            <section className="overlay">
              <section className="text">
                <p>
                  <a href="https://mybodyback.netlify.com/" target="_blank" className="project-link">My Body Back </a>
                  <br></br>
                  has been built as part of the Founders&Coders' Tech for Better programme
                  <br></br>
                  <br></br>
                  The app aim is to provide support for people with experience of sexual assault encuraging them to go for a routine cervical screening
                </p>
                  <a href="https://github.com/fac-17/My-Body-Back" target="_blank" className="github-link">
                  Go to Github
                  </a>
              </section>
            </section>
          </article>
          
          <article className="project-item">
            <img 
            className="project-image"
            src={require("../../Assets/NomNom.png")}
            alt="project"
            ></img>
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
            src={require("../../Assets/GithubPage.png")}
            alt="project"
            ></img>
            <div className="overlay">
              <div className="text">
                <p>
                  Visit my Github profile to find out about more projects&repositories
                <br></br>
                <br></br>
                Weekly projects realised to practise the skills learnt at Founders&Coders
                </p>
                <a href="https://github.com/frannyfra" target="_blank" className="github-link">
                Go to Github
                </a>
              </div>
            </div>
          </article>
          </section>
        <hr className="line"/>
      </section>
-
      <section className="tech-stack">
        <section className="tech-stack-three">
          <article className="tech-stack-image">
            <img 
            className="stack-image"
            src={require("../../Assets/Git.svg")}
            alt="tech stack"
            ></img>
            </article>
            <article className="tech-stack-image">
              <img 
                className="stack-image"
                src={require("../../Assets/Travis.svg")}
                alt="tech stack"
              ></img>
            </article>
            <article className="tech-stack-image">
              <img 
                className="stack-image"
                src={require("../../Assets/Heroku.svg")}
                alt="tech stack"
              ></img>
            </article>
            <article className="tech-stack-image">
              <img 
                className="stack-image"
                src={require("../../Assets/Handlebars.svg")}
                alt="tech stack"
                ></img>
            </article>
        </section>
        
        <section className="tech-stack-one">
          <section className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/Express.png")}
              alt="tech stack"
            ></img> 
          </section>
          <section className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/React.png")}
              alt="tech stack"
            ></img>
          </section>
          
          <section className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/Sequel.png")}
              alt="tech stack"
            ></img> 
          </section>
          <section className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/Netlify.svg")}
              alt="tech stack"
            ></img> 
          </section>
        </section>
        
        <section className="tech-stack-two">
          <article className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/Html5.svg")}
              alt="tech stack"
            ></img> 
          </article>
          <article className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/Css.svg")}
              alt="tech stack"
            ></img> 
          </article>
          <article className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/JS.svg")}
              alt="tech stack"
            ></img> 
          </article>
          <article className="tech-stack-image">
            <img 
              className="stack-image"
              src={require("../../Assets/NodeJs.svg")}
              alt="tech stack"
            ></img>
          </article>
          <hr className="line"/>
          </section>
          </section>
          <Link to={{ pathname: "/contact-me" }} className="arrow-down-router">
            <img
              className="arrow-down"
              src={ArrowDown}
              alt="downwards arrow to move to the main page">
            </img>
          </Link>
      </section>
    )

};

export { Projects };

