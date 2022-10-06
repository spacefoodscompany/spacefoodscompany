import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from 'react-router-hash-link';

const Header = () => {


  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img
            href="/"
            src="../../images/logo_eyes.png"
            alt="Space Foods Company Logo"
          ></img>
        </Link>
        <NavBar />
        <div className="chevron">
        <HashLink to={"/#about"} spy={true} smooth={true}><FontAwesomeIcon icon={faChevronCircleDown} /></HashLink>
  </div>
      </div>
    </div>
  );
};

export default Header;
