import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import redbtn from '../../images/red-button.png';
import discord from '../../images/discord.png';
import twitter from '../../images/twitter.png';
import gmail from '../../images/gmail.png';
import ytjobs from '../../images/ytjobs.png';
import GTAV_logo from '../../images/GTAV_logo.webp';
// import PopupComponent from "../PopupComponent/PopupComponent";
import './TopBar.css';
import logo from '../../../public/logo.png';
import RedButtonModal from '../PopupModal/RedButtonModal';


const TopBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const copyDiscordID = () => {
    const discordID = 'thunderzlucky';
    navigator.clipboard.writeText(discordID).then(() => {
      alert('Discord ID copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

//   // Announcement bar for Black Friday Sale
const AnnouncementBar = () => (
  <div className="announcement-bar">
    <div className="announcement-content">
      🎉 <span className="animated-text"> Black Friday Sale! Get Flat 40% off on all the Mods!</span> 
      

    </div>
  </div>
);

  return (
    <>
    <AnnouncementBar />
    <div className="topBar d-flex flex-column align-items-center text-center py-4">
      <div className="title mb-3">
        <img src={logo} className="logo" alt="Craftify Productions Logo" />
        Craftify Productions
      </div>
      <div className="justify-content-center" id="navbarNav">
        <ul className="d-flex navbarCustom" style={{ listStyle: "none", color: "#787878" }}>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/terms">Terms and Conditions</Link>
          </li>
          {/* <li className="nav-item p-3">
            <Link className="nav-link" to="/services">Services</Link>
          </li> */}
          <li className="nav-item p-3">
            <Link className="nav-link" to="/packages">Packages</Link>
          </li>
          <li className="nav-item p-3">
            <Link className="nav-link" to="/contact">Contact us</Link>
          </li>
          <li className="nav-item p-3">
            <a href="https://amongus.craftifyproductions.com/"  className="nav-link"><img className="update-button" src="among_us_logo.png" alt="among_us_logo" /></a>
          </li>
          <li className="nav-item p-3">
            <a href="https://gtav.craftifyproductions.com/"  className="nav-link"><img className="update-button" src={GTAV_logo} alt="GTAV_logo" /></a>
          </li>
        
        </ul>
      </div>
      <div className="socials d-flex justify-content-center align-items-center">
        <div className="icon mx-2">
          <div onClick={copyDiscordID} style={{ cursor: 'pointer' }}>
            <img src={discord} alt="Discord" />
          </div>
        </div>
        <div className="icon mx-2">
          <a href="https://x.com/CraftifyProd" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        <div className="icon mx-2">
          <a href="mailto:contact@craftifyproductions.com">
            <img src={gmail} alt="Gmail" />
          </a>
        </div>
        <div className="icon mx-2">
          <a href="https://ytjobs.co/@Craftifyproductions">
            <img src={ytjobs} alt="ytjobs" />
          </a>
        </div>
        <div className="icon mx-2">
        <a href="#" className="nav-link red-button" onClick={handleShow}>
            <img src={redbtn} alt="Red Button" />
          </a>
        </div>
      </div>
      <RedButtonModal show={show} handleClose={handleClose} />
    </div>
    </>
  );
}

export default TopBar;
