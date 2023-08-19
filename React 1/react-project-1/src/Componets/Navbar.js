import React from "react";
import "../Style.css";
// className="brand-logo"

const Navbar = () =>{
    return (<>
        <nav className="navbar">
        <img src={require("../img/logo.png")} className="brand-logo" alt="Disney" />
        <ul className="nav-links">
          <li className="nav-items"><a href="#">TV</a></li>
          <li className="nav-items"><a href="#">Movies</a></li>
          <li className="nav-items"><a href="#">Sports</a></li>
          <li className="nav-items"><a href="#">Premium</a></li>
        </ul>
  
        <div className="right-container">
          <input type="text" className="search-box" placeholder="search" />
          <button className="sub-btn">subscribe</button>
          <a href="#" className="login-link">Login</a>
        </div>
      </nav>
    </>);
}
 
export default Navbar;