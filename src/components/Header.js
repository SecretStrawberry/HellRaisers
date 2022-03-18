import React from "react";

import Logo from "./Logo";

import { CgMenuGridO } from "react-icons/cg";
import "../styles/components/Header.scss";

function Header() {
  return (
    <header className="Header">
      <Logo />
      <div className="Header_Title">
        <h1>GODS</h1>
        <h2>HellRaisers</h2>
      </div>
      <CgMenuGridO className="Header_NavigationButton" />
    </header>
  );
}

export default Header;
