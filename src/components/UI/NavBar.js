import './NavBar.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
        <nav className="navbar">
            <li><HashLink to={"/shop#bottles"} spy={true} smooth={true}>Shop</HashLink></li>
            <li><a href="https://shop.spacefoodscompany.com/">Merch</a></li>
            <li><a href="https://linktr.ee/spacefoodscompany">Our Friends</a></li>
        </nav>
      );
}

export default NavBar;