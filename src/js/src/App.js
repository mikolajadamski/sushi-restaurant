import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './header/Header';
import fetch from 'unfetch';

function App(props) {

  const [navbarItems, setNavbarItems] = useState([]);

  useEffect(() => {
    fetch('/api/navbar_items')
    .then(resp => resp.json()
    .then(navbarItems => setNavbarItems(navbarItems)
    ))},[]);
  
    console.log(navbarItems);

  return <div>
    <Header navbarItems={navbarItems} />
    </div>;

}

export default App;
