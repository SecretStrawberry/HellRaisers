import React from "react";

import "../styles/components/PanelRight.scss";

function PanelRight() {
  const grid = [];

  function makeGrid(cellNumber) {
    for (let i = 0; i < cellNumber; i++) {
      grid.push(
        <div key={i} id={"cell_" + i}>
          <h3>{"cell_" + i}</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          magnam quam in, reiciendis dolor id veniam ab facere, dolorem placeat
          blanditiis ipsum perspiciatis deleniti, aperiam iste esse quos ducimus
          harum!
        </div>
      );
    }
    return grid;
  }

  return (
    <div className="PanelRight">
      <h2>Panel Right</h2>
      <div className="PanelRight_Items">{makeGrid(6).flat()}</div>
    </div>
  );
}

export default PanelRight;
