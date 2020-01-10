import React from "react";
import "./Introduction.css";
import { NavBar } from "../mutual/navBar/NavBar";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import Typing from "react-typing-animation"; 


const Introduction = () => {
  return (
    <>
      <NavBar />
      <section className="introduction">
        <section className="introduction-description">
          <section className="introduction-description__main">
            <section className="introduction-description__main-greating">
              <TextLoop children={["Hello!", "!Hola!", "Salut!", "Ciao!"]} className="loop"/>
            </section>
            <p>
            I am Francesca. Italian girl and full-stack web-developer.
            <br></br>
            Fascinated by the good and powerful solutions technology can offer to real-life!
            <br></br>
            <br></br>
            Go ahead and find out a bit more.....
            </p>

          </section>
        </section>
        <div className="arrow-down-router-fixed">
          <Link to={{ pathname: "/projects" }} className="arrow-down-router">
            <img
              className="arrow-down"
              src={require("../../Assets/Arrow-down.svg")}
              alt="downwards arrow to move to the project page"
            >
            </img>
          </Link>
        </div>
      </section>
    </>
  );
};

export { Introduction };


