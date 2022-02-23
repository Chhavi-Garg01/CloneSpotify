import React from 'react'
import '../Styles/LeftMenu.css';
import {FaSpotify , FaEllipsisH} from "react-icons/fa";
import Spoti from '../img/spoti.png';
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from './Menu';
import {MenuList} from './MenuList';
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';

function LeftMenu() {
  return (
    <div className="leftMenu">
        <div className="logoContainer">
            <img className="chhavi"  src={Spoti} />
            <h2>Spotify</h2>
            <i><FaEllipsisH /></i>
        </div>
        <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>

        <Menu title={'Menu'} menuObject={MenuList}/>
        <MenuPlayList />
        <TrackList />
    </div>
  )
}

export { LeftMenu};