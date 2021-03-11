import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    const navbarItems = props.navbarItems
    const listItems = navbarItems.map(item => 
    <li key={item["name"]}>{item["name"]}</li>)
    return (
        <div className="navbar">
            <ul>{listItems}</ul>
        </div>
    );
}

export default Navbar;