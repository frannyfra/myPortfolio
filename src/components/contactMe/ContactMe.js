import React from 'react';
import { Link } from 'react-router-dom';
import './ContactMe.css';
import download from '../../Assets/Cloud-storage-download.svg';
import linkedIn from '../../Assets/Linkedin.svg';
import github from '../../Assets/Github.svg';
import ArrowUp from '../../Assets/Arrow-up.svg';
import HomePage from '../../Assets/Logo.svg';

const ContactMe = () => {
    return (
    <section className="contact-me">
      <Link to={{ pathname: "/projects" }} className="arrow-up-router">
        <img
          className="arrow-up"
          src={ArrowUp}
          alt="upwards arrow to move to project page"
        >
        </img>  
      </Link>
      <Link to={{ pathname: "/" }} className="homepage-router">
        <img
          className="home-page"
          src={HomePage}
          alt="home to go back to the main page"
        >
        </img>  
      </Link>
        <div className="navigation-sub_links">
          <ul>
            <li>
              <a href="https://github.com/frannyfra" target="_blank"><img src={github} alt="github logo" className="logos"/></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/frannyfra/" target="_blank"><img src={linkedIn} alt="linkedin logo" className="logos"/></a>
            </li>
            <li>
              <a href={require("../../Assets/DeLaurentisCV.pdf")} download="Francesca De Laurentis - CV"><img src={download} alt="cloud storage download" className="logos"/></a></li>
            <li className="logos">
              E-mail: francescadelaurentis1987@gmail.com
            </li>
          </ul>
        </div>
    </section>
    )
};

export { ContactMe };