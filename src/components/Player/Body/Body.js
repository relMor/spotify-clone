import React from "react";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import classes from "./Body.module.css";
import Header from "./Header/Header";
import { useDataLayerValue } from "../../../logic/DataLayer";
import SongRow from "./SongRow/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcUPqg3hVtEFB`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className={classes.body}>
      <Header spotify={spotify} />
      <div className={classes.info}>
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className={classes.infoText}>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className={classes.songs}>
        <div className={classes.songsIcon}>
          <PlayCircleFilledIcon
            className={classes.iconShuffle}
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" className={classes.sideIcon} />
          <MoreHorizIcon className={classes.sideIcon} />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
