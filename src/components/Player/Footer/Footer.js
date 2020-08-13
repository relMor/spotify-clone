import React from "react";

import classes from "./Footer.module.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <img className={classes.albumLogo} src="" alt=""/>
        <div className={classes.songInfo}>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className={classes.center}>
        <ShuffleIcon className={classes.footer_green} />
        <SkipPreviousIcon className={classes.footer_icon} />
        <PlayCircleOutlineIcon
          fontSize="large"
          className={classes.footer_icon}
        />
        <SkipNextIcon className={classes.footer_icon} />
        <RepeatIcon className={classes.footer_green} />
      </div>
      <div className={classes.right}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className={classes.slider}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
