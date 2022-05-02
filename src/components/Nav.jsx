import React from "react";
import Logo from "../logo.png";
import SearchBar from "./SearchBar.jsx";
import  "./Nav.css";
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <div className="nav-div">
      <nav className="navbar">
      <Link  to='/'>
      <img className="img-navbar" src={Logo} alt="logo" width={50} /><span className="align">Weather App</span>
      </Link>
      <Link to='/about'>
        <span className="text-nav align">About Me</span>
      </Link>
      <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
}


