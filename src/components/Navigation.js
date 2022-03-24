import React from "react";

import "../styles/components/Navigation.scss";

function Navigation({ children }) {
  return (
    <nav className="Navigation" onClick={(e) => e.stopPropagation()}>
      {children}
    </nav>
  );
}

export default Navigation;
