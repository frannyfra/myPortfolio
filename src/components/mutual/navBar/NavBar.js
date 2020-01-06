import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo.svg';
import profilePic from '../../../Assets/Francesca.jpeg';
import "./NavBar.css";
// import { url } from 'inspector';
// import projects from './Projects';
// import introduction from './Introduction';

const NavBar = () => {
		return (
      <div className="navigation">

        <div className="text-center">
          <img src={logo} className="logo" alt="full name initials" />
          <img src={profilePic} className="author-img" alt="Smiling Francesca"/>
          {/* <h3 id="full-name">Francesca De Laurentis</h3> */}
          <span className="email">Francesca De Laurentis</span>
        </div>
    
        <div className="navigation-sub">
          <ul id="nav">
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact-me">Contact me</a></li>
            
          </ul>
        </div>

        {/* <div className="navigation-sub_links">
            <ul id="sub-nav">
                <li><a href="https://www.freecodecamp.org/frannyfra" target="_blank" >Freecodecamp</a></li>
                <li><a href="https://github.com/frannyfra" target="_blank">?</a></li>
                <li><a href="https://www.linkedin.com/in/frannyfra/" target="_blank">Linkedin</a></li>
            </ul>
        </div> */}
      </div>
        )
    };
    

export { NavBar };



//             <a
//               href={require("../../../assets/Christine Altmann-CV pdf")}
//               download="Christine Altmann - Full-Stack Developer - CV"
//             >
//               <li>Download CV</li>
//             </a>
//           </ul>
//         </div>
//       </nav>
//       <section className="contact">
//         <Link to={{ pathname: "/contact-me" }}>
//           <img
//             className="contact-icon"
//             src={require("../../../assets/contact.svg")}
//             alt="contactme"
//           />
//         </Link>
//       </section>
//     </>
