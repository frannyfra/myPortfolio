import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../Assets/Logo.svg';
import profilePic from '../Assets/Francesca.jpeg';
import "./NavBar.css";
// import { url } from 'inspector';
// import about from './About';
// import projects from './Projects';
// import introduction from './Introduction';

class NavBar extends React.Component{
	render() { 
		return (
      <div className="navigation">

        <div className="text-center">
          <img src={logo} className="logo" alt="full name initials" />
          <img src={profilePic} className="author-img"/>
          {/* <h3 id="full-name">Francesca De Laurentis</h3> */}
          <span className="email">francescadelaurentis1987@gmail.com</span>
        </div>
    
        <div className="navigation-sub">
          <ul id="nav">
            <li><a href="introduction">Introduction</a></li>
            <li><a href="about">About</a></li>
            <li><a href="projects">Projects</a></li>
          </ul>
        </div>

        <div className="navigation-sub_links">
            <ul id="sub-nav">
                <li><a href="https://www.freecodecamp.org/frannyfra" target="_blank" >Freecodecamp</a></li>
                <li><a href="https://github.com/frannyfra" target="_blank">?</a></li>
                <li><a href="https://www.linkedin.com/in/frannyfra/" target="_blank">Linkedin</a></li>
            </ul>
        </div>
      </div>
        )
    } 
    };
    

export default NavBar;

