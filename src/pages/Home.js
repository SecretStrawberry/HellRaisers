import React from "react";

import Intro from "../testComponents/Intro";
import Header from "../components/Header";
// import Presentation from "../components/Presentation";
// import Team from "../testComponents/Team";
// import PanelLeft from "../components/PanelLeft";
// import PanelRight from "../components/PanelRight";

import "../styles/pages/Home.scss";

function Home() {
  return (
    <>
      <Intro />
      <div className="Home">
        <Header />
        <div className="Title">
          <h1>GODS</h1>
          <h2>HellRaisers</h2>
        </div>

        {/* <div className="Panels">
          <PanelLeft />
          <PanelRight />
        </div> */}
      </div>
    </>
  );
}

export default Home;
