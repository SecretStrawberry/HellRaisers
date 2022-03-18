import React from "react";

import Header from "../components/Header";
import PanelLeft from "../components/PanelLeft";
import PanelRight from "../components/PanelRight";

import "../styles/pages/Home.scss";

function Home() {
  return (
    <div className="Home">
      <Header />

      <div className="Panels">
        <PanelLeft />
        <PanelRight />
      </div>
    </div>
  );
}

export default Home;
