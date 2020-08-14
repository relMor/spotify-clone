import React from "react";

import classes from "./Player.module.css";

import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function Player({ spotify }) {
  return (
    <div className={classes.player}>
      <div className={classes.body}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
