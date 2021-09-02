import React from "react";
import { PersonPinCircleOutlined, Mail } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className='topbar-container'>
        <div className='left-container-side'>
          <a href='#intro' className='logo'>
            GDEV
          </a>
          <div className='info-container'>
            <PersonPinCircleOutlined className='contact-icon' />
            <span>(510)417-6757</span>
          </div>
          <div className='info-container'>
            <Mail className='contact-icon' />
            <span>Gruiz0803@icloud.com</span>
          </div>
        </div>
        <div className='right-container-side'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
