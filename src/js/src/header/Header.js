import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = (props) => {
    return (
        <div className="header">
            <Logo />
            <Navbar navbarItems={props.navbarItems} />
        </div>
        
    )
}

export default Header;