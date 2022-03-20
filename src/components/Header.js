import React from "react";
import NavigationItems from "./NavigationItems";
import NavigationModal from "./NavigationModal";
import Logo from "./Logo";

import "../styles/components/Header.scss";

function Header() {
  return (
    <>
      <header className="Header">
        <Logo />
        <div className="Header_Title">
          <h1>GODS</h1>
          <h2>HellRaisers</h2>
        </div>
        <NavigationModal>
          <NavigationItems />
        </NavigationModal>
      </header>
    </>
  );
}

export default Header;
