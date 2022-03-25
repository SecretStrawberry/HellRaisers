import React from "react";

function NavigationItems() {
  return (
    <ul>
      <a href="/home">
        <li data-title="home">home</li>
      </a>
      <a href="/hellraisers">
        <li data-title="hellraisers">hellraisers</li>
      </a>

      <a href="/team">
        <li data-title="team">team</li>
      </a>
    </ul>
  );
}

export default NavigationItems;
