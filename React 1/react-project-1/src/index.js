import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Componets/Slide.js';
import Gif from './Componets/Gif.js';
import Navbar from './Componets/Navbar.js';
import './Style.css';


ReactDOM.render(
  <>
    <Navbar/>
    <Slide/>
    <Gif/>
  </>,
  document.getElementById("root")
);
