import React, { useState } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import "../styles/components/NavigationModal.scss";

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
            <CgClose
              className="CloseButton"
              onClick={() => setShouldShow(false)}
            />
            {children}
          </nav>
        </div>
      )}
    </>
  );
}

export default NavigationModal;
