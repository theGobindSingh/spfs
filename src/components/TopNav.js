import "./TopNav.css";
import React from "react";

import logo from "../assets/images/Google-logo.png";
import { HashLink } from "react-router-hash-link";

import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function TopNav() {
  return (
    <div id="TopNav">
      <img src={logo} alt="logo"></img>
      <div className="links">
        <HashLink smooth to="/#home">
          Home
        </HashLink>
        <HashLink smooth to="/#intro">
          Intro
        </HashLink>
        <HashLink smooth to="/#team">
          Team
        </HashLink>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </div>
      <div className="social">
        <a
          href="https://instagram.com/instagram"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <br></br>
        <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
}
