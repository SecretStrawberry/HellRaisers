import React, { useState } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

import { CgMenuGridO } from "react-icons/cg";
import "../styles/components/Header.scss";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav ? <Navigation /> : ""}
      <header className="Header">
        <Logo />
        <div className="Header_Title">
          <h1>GODS</h1>
          <h2>HellRaisers</h2>
        </div>
        <CgMenuGridO
          className="Header_NavigationButton"
          onClick={() => setShowNav(!showNav)}
        />
      </header>
    </>
  );
}

export default Header;
