import React from "react";
import Logo from "../logo.png";
import SearchBar from "./SearchBar.jsx";
import  "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className="nav-div">
      <nav className="navbar">
      <a href="#" className="d-inline-block align-top">
      <img className="img-navbar" src={Logo} alt="logo" width={50} />Weather App</a>
      <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
}

export default Nav;
