import React from "react";
import "../Styles/LeftMenu.css";
import Track from "../img/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
function TrackList() {
  return (
    <div className="trackList">
    <div className="top">
      <img src={Track} />
      <p>
        Chhavi<span>Artist</span>
      </p>
    </div>

    <div className="bottom">
      <i>
        <BsFillVolumeUpFill />
      </i>

      <input type="range" />

      <i>
        <BsMusicNoteList />
      </i>

      <i>
        <FaDesktop />
      </i>
    </div>
  </div>
  )
}

export  {TrackList}