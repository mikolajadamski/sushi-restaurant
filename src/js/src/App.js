import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Header';
import { getAllNavbarItems } from './client';




const App = (props) => {

  let isFetching = useRef(null);
  let navbarItems = {};

  useEffect(() => {
    isFetching = true;
    getAllNavbarItems()
      .then(response => response.json())
      .then(items => {
        isFetching = false;
        navbarItems = items;
      })
      .catch(error => {
        console.log(error.error.message);
      });
  
  }, []);

  return (
    <Header navbarItems={ navbarItems }/>
  );
}



export default App;
