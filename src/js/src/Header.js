import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = (props) => {
    return (
        <div class="header">
            <Logo />
            <Navbar />
        </div>
        
    )
}

export default Header;