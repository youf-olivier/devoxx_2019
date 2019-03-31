import React from "react";
import "./header.scss";
const Header = () => (
  <header className="header">
    <div className="header__logo-container">
      <img
        src="https://www.axa.fr/content/dam/logo/logo-axa.svg"
        alt="logo axa"
        className="logo"
      />
    </div>
    <span className="header__name">Ma belle application</span>
  </header>
);

export default Header;
