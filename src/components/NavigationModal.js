import React, { useState } from "react";
import "../styles/components/NavigationModal.scss";
import { CgMenuGridO, CgClose } from "react-icons/cg";

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
            <CgClose onClick={() => setShouldShow(false)} />
            {children}
          </nav>
        </div>
      )}
    </>
  );
}

export default NavigationModal;