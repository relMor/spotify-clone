import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import classes from "./Header.module.css";
import { useDataLayerValue } from "../../../../logic/DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>
      <div className={classes.right}>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
