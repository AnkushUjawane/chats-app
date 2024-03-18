import React from "react";
import { useNavigate } from "react-router-dom";
import "./sideBar.css";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
const PLACES = ['top-end', 'top-end',];
const Place = ['right'];

const SideBar = ({ children }) => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/Dashboard");
  };

  const navigateToSetting = () => {
    navigate("/Setting");
  };

  const navigateToProfile = () => {
    navigate("/Profile");
  };

  return (
    <div className="main_container">
      <div className="sidebar">
        <div className="top_section">
          <div className="chat_logo logos">
            <button onClick={navigateToDashboard} className="tip">
              <IoChatboxEllipsesOutline size={25} cursor="pointer" />
            </button>
            {PLACES.map(place =>(<Tooltip
              anchorSelect=".tip"
              style={{ backgroundColor: "transperent", color: "#FFF", zIndex: 1 , padding: "4px"}}
              content="Chats"
              key={place}
              place={place}
            />
            ))}
          </div>
        </div>
        <div className="bottom_section">
          <div className="setting_logo logos">
            <button onClick={navigateToSetting} className="ttip">
              <IoSettingsOutline size={25} cursor="pointer" />
            </button>
            {PLACES.map(place =>(<Tooltip
              anchorSelect=".ttip"
              style={{ backgroundColor: "transperent", color: "#FFF", zIndex: 1 , padding: "3px"}}
              content="Settings"
              key={place}
              place={place}
            />
            ))}
          </div>
          <div className="profile_logo logos">
            <button onClick={navigateToProfile} className="tttip">
              <FaRegUserCircle size={25} cursor="pointer" />
            </button>
            {Place.map(place =>(<Tooltip
              anchorSelect=".tttip"
              style={{ backgroundColor: "transperent", color: "#FFF", zIndex: 1 , padding: "5px"}}
              content="Profile"
              key={place}
              place={place}
            />
            ))}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
