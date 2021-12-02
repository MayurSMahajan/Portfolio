import React from 'react';
import NavBarNameBranding from './NavBarNameBranding'
import NavBarItems from './NavBarItems';

function NavBar(){
    return (
        <div className="navbar">
            <NavBarNameBranding/>
            <NavBarItems />
        </div>
    )
}

export default NavBar;