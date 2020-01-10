import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo.svg';
import profilePic from '../../../Assets/Francesca.jpeg';
import "./NavBar.css";

const NavBar = ({ navDisplay, aboutDisable, setAboutDisabled, projectsDisable, setProjectsDisabled }) => {
  // const disableAboutButton = () => {
  //   setAboutDisabled(true);
  //   setProjectsDisabled(false);
  // };

  // const disableProjectsButton = () => {
  //   setAboutDisabled(false);
  //   setProjectsDisabled(true);
  // }
		return (
      <div className="navigation">

        <div className="text-center">
          <img src={logo} className="logo" alt="full name initials" />
          <img src={profilePic} className="author-img" alt="Smiling Francesca"/>
          <span className="email">Francesca De Laurentis</span>
        </div>
    
        <div className="navigation-sub">
          <ul id="nav">
            <li><Link to="/">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Contact me</Link></li>
            
          </ul>
        </div>
      </div>
        )
    };
    

export { NavBar };

