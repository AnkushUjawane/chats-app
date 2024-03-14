import React from "react";
import { useNavigate } from "react-router-dom";
import "./sideBar.css";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

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
            <button onClick={navigateToDashboard}>
              <IoChatboxEllipsesOutline size={25} cursor="pointer" />
            </button>
          </div>
        </div>
        <div className="bottom_section">
          <div className="setting_logo logos">
            <button onClick={navigateToSetting}>
              <IoSettingsOutline size={25} cursor="pointer" />
            </button>
          </div>
          <div className="profile_logo logos">
            <button onClick={navigateToProfile}>
              <FaRegUserCircle size={25} cursor="pointer" />
            </button>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
