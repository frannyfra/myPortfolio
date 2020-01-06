import React from "react";
import "./Introduction.css";
import { NavBar } from "../mutual/navBar/NavBar";
import { Link } from "react-router-dom";
import Typing from 'react-typing-animation';


const Introduction = () => {
  return (
    <>
      <NavBar />
      <section className="introduction">
        <Typing>
        <section className="introduction-description">
          <section className="introduction-description__main">
            <section className="introduction-description__main-greating">
              <p>Hello!.....</p>
            </section>
          <p>
            I am Francesca.
          Italian girl and full-stack
          web-developer.<br></br>My passion is .......
          </p>
          </section>
          
        </section>
        </Typing>
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


