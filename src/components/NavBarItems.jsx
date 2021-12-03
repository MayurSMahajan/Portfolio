import React from 'react';
import { Link } from "react-scroll";

function NavBarItems(){
    return (
        <div className="navbar-items"> 
            <div className="navbar-links">
            <Link
                className="scroll-links"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration= {800}
            >Let's Connect</Link>
            <Link
                className="scroll-links"
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration= {800}
            >About Me</Link>
                <a href="/resume.pdf" className="resume-link" download>Resume</a>
            </div>
        </div>
    )
}

export default NavBarItems;