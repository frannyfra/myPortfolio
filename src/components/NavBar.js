import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../Assets/Logo.svg';
import "./NavBar.css";
// import about from './About';
// import projects from './Projects';
// import introduction from './Introduction';

class NavBar extends React.Component {
	render() { 
		return (
        <div className="navigation">
        <img src={logo} className="logo" alt="full name initials" />


        
        
        <div className="navigation-sub">
          <ul id="nav">
            <span>francescadelaurentis1987@gmail.com</span>
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

