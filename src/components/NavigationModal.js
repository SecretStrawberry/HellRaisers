import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import "../styles/components/NavigationModal.scss";

// CgClose THE X BUTTON FROM MENU

function NavigationModal({ children }) {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <CgMenuGridO
        className="NavigationButton"
        onClick={() => setShouldShow(true)}
      />

      {shouldShow && (
        <div className="Background" onClick={() => setShouldShow(false)}>
          <nav className="Nav" onClick={(e) => e.stopPropagation()}>
            {/* <CgClose
              className="CloseButton"
              onClick={() => setShouldShow(false)}
            /> */}
            {children}
          </nav>
        </div>
      )}
    </>
  );
}

export default NavigationModal;
