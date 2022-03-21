import React from "react";

import Intro from "../testComponents/Intro";

import Header from "../components/Header";
import PanelLeft from "../components/PanelLeft";
import PanelRight from "../components/PanelRight";

import "../styles/pages/Home.scss";

function Home() {
  return (
    <>
      <Intro />
      <div className="Home">
        <Header />

        <div className="Panels">
          <PanelLeft />
          <PanelRight />
        </div>
      </div>
    </>
  );
}

export default Home;
