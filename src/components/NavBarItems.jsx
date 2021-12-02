import React from 'react';
import { Link } from "react-scroll";

function NavBarItems(){
    return (
        <div className="navbar-items"> 
            <div className="navbar-links">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration= {800}
            >Let's Connect</Link>
            <Link
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration= {800}
            >About Me</Link>
                <a>Resume</a>
            </div>
        </div>
    )
}

export default NavBarItems;