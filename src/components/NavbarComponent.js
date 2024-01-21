// src/components/NavbarComponent.js
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();
  
    const handleClick = (sectionName) => {

      // Navigate to the About page first
      navigate('/');

      // Scroll to the contactSection after a short delay
      setTimeout(() => {
        
        if(sectionName === "aboutSection"){
            var check = (document.getElementById('aboutSection'));
            if(check){
                document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
            }
        }else if(sectionName === "contactSection"){
            var check = (document.getElementById('contactSection'));
            if(check){
                document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
            }
        }

      }, 100);
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">React App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/">About</Link> */}
                            {/* <ScrollLink to="aboutSection" smooth={true} duration={500} offset={-50} > About </ScrollLink> */}
                            <a onClick={() => handleClick("aboutSection")} className={"nav-link"}>About</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/contact">Contact</Link> */}
                            {/* <ScrollLink to="contactSection" smooth={true} duration={500} offset={-50} > Contact </ScrollLink> */}
                            <a onClick={() => handleClick("contactSection")} className={"nav-link"}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/custom1">Custom1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/custom2">Custom2</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;