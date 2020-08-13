import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import classes from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption/SidebarOption";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <img
        className={classes.logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      ></img>
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className={classes.title}>PLAYLISTS</strong>
      <hr />
      <SidebarOption title="HIP HOP"/>
      <SidebarOption title="HIP HOP"/>
      <SidebarOption title="HIP HOP"/>
    </div>
  );
}

export default Sidebar;
