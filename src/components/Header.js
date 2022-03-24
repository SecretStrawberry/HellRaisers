import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationItems from "./NavigationItems";

import "../styles/components/Header.scss";

function Header() {
  return (
    <>
      <header className="Header">
        <div className="Header_Left">
          <Logo />
          <Navigation>
            <NavigationItems />
          </Navigation>
        </div>
        <div className="Header_Right">social</div>
      </header>
    </>
  );
}

export default Header;
