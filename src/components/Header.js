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

        <NavigationModal>
          <NavigationItems />
        </NavigationModal>
      </header>
    </>
  );
}

export default Header;
