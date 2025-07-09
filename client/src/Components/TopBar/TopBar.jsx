import { Link } from 'react-router-dom';
import { useState } from 'react';
// import redbtn from '../../images/red-button.png';
import discord from '../../images/discord.png';
import twitter from '../../images/twitter.png';
import gmail from '../../images/gmail.png';
import ytjobs from '../../images/ytjobs.png';
import GTAV_logo from '../../images/GTAV_logo.webp';
// import acecraft_logo from '../../images/acecraft_logo.png';
// import PopupComponent from "../PopupComponent/PopupComponent";
import './TopBar.css';
import logo from '../../../public/logo.png';
// import RedButtonModal from '../PopupModal/RedButtonModal';


const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const [show, setShow] = useState(false);

  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  const copyDiscordID = () => {
    const discordID = 'thunderzlucky';
    navigator.clipboard.writeText(discordID).then(() => {
      alert('Discord ID copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <>
      <div className="announcement-bar">
        <div className="announcement-content">
          🎉 <span className="animated-text">All Mods Available @ Discounted Prices!</span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo and Brand Section */}
            <div className="brand-section">
              <Link to="/" className="brand-link">
                <div className="d-flex align-items-center">
                  <img src={logo} className="logo" alt="Craftify Productions Logo" />
                  <h1 className="brand-title">Craftify Productions</h1>
                </div>
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button className="hamburger-menu" onClick={toggleMobileMenu}>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
              <div className="mobile-menu-content">
                {/* Navigation Menu */}
                <nav className="mobile-nav">
                  <ul className="mobile-nav-menu">
                    <li className="mobile-nav-item">
                      <Link className="mobile-nav-link" to="/" onClick={toggleMobileMenu}>Home</Link>
                    </li>
                    <li className="mobile-nav-item">
                      <Link className="mobile-nav-link" to="/about" onClick={toggleMobileMenu}>About</Link>
                    </li>
                    <li className="mobile-nav-item">
                      <Link className="mobile-nav-link" to="/terms" onClick={toggleMobileMenu}>Terms</Link>
                    </li>
                    <li className="mobile-nav-item">
                      <Link className="mobile-nav-link" to="/contact" onClick={toggleMobileMenu}>Contact</Link>
                    </li>
                  </ul>
                </nav>

                {/* Social Icons */}
                <div className="mobile-social-icons">
                  <div className="mobile-icon" onClick={copyDiscordID}>
                    <img src={discord} alt="Discord" />
                  </div>
                  <div className="mobile-icon">
                    <a href="https://x.com/CraftifyProd" target="_blank" rel="noopener noreferrer">
                      <img src={twitter} alt="Twitter" />
                    </a>
                  </div>
                  <div className="mobile-icon">
                    <a href="mailto:contact@craftifyproductions.com">
                      <img src={gmail} alt="Gmail" />
                    </a>
                  </div>
                  <div className="mobile-icon">
                    <a href="https://ytjobs.co/@Craftifyproductions">
                      <img src={ytjobs} alt="ytjobs" />
                    </a>
                  </div>
                </div>

                {/* Game Links */}
                <div className="mobile-game-links">
                  <a href="https://amongus.craftifyproductions.com/" className="mobile-game-link">
                    <img src="among_us_logo.png" alt="Among Us" />
                  </a>
                  <a href="https://zonzomods.com/" className="mobile-game-link">
                    <img src={GTAV_logo} alt="GTA V" />
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="main-nav">
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/terms">Terms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Desktop Social Icons */}
            <div className="social-icons">
              <div className="icon" onClick={copyDiscordID}>
                <img src={discord} alt="Discord" />
              </div>
              <div className="icon">
                <a href="https://x.com/CraftifyProd" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" />
                </a>
              </div>
              <div className="icon">
                <a href="mailto:contact@craftifyproductions.com">
                  <img src={gmail} alt="Gmail" />
                </a>
              </div>
              <div className="icon">
                <a href="https://ytjobs.co/@Craftifyproductions">
                  <img src={ytjobs} alt="ytjobs" />
                </a>
              </div>
            </div>

            {/* Desktop Game Links */}
            <div className="game-links">
              <a href="https://amongus.craftifyproductions.com/" className="game-link">
                <img src="among_us_logo.png" alt="Among Us" />
              </a>
              <a href="https://zonzomods.com/" className="game-link">
                <img src={GTAV_logo} alt="GTA V" />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Acecraft Button - Now positioned below header */}
      {/* <div className="acecraft-container">
        <a href="https://teamacecrafts.com/" className="acecraft-link">
          <img className="acecraft-button" src={acecraft_logo} alt="Acecraft" />
        </a>
      </div> */}
    </>
  );
}

export default TopBar;
