import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Monster = ({ onClose }) => {
  const mods = [

    {
      link: "https://youtu.be/QWoEcIrbUWs?si=pgV-_YStKJ9joNBs",
      img: "https://img.youtube.com/vi/QWoEcIrbUWs/maxresdefault.jpg",
      title: "Minecraft But I can turn into monster",
    },
    {
      link: "https://youtu.be/9K6xkDjpqVE?feature=shared",
      img: "https://img.youtube.com/vi/9K6xkDjpqVE/maxresdefault.jpg",
      title: "Minecraft, But You Turn Into a Zombie...",
    },
    {
      link: "https://youtu.be/xZkzT2uSHgw?si=BgxR9riPiKLxxHfj",
      img: "https://img.youtube.com/vi/xZkzT2uSHgw/maxresdefault.jpg",
      title: "Minecraft but You can Turn To Spider",
    },
    {
      link: "https://www.youtube.com/watch?v=FoDk6jy0Ihk",
      img: "https://img.youtube.com/vi/FoDk6jy0Ihk/maxresdefault.jpg",
      title: "Minecraft, But I Become a Parasite",
    },
    {
      link: "https://www.youtube.com/watch?v=V9x7hNQM_5I",
      img: "https://img.youtube.com/vi/V9x7hNQM_5I/maxresdefault.jpg",
      title: "Minecraft, But It Turns Scary at Night...",
    },
    {
      link: "https://www.youtube.com/watch?v=JfpEHPylEa8",
      img: "https://img.youtube.com/vi/JfpEHPylEa8/maxresdefault.jpg",
      title: "Minecraft, But Every Drop is Scary",
    },
    {
      link: "https://youtu.be/kEwq6CZSe-4?feature=shared",
      img: "https://img.youtube.com/vi/kEwq6CZSe-4/maxresdefault.jpg",
      title: "Minecraft, But You Can Fuse Scary Myths",
    },
    {
      link: "https://youtu.be/m9adQliR_ac?feature=shared",
      img: "https://img.youtube.com/vi/m9adQliR_ac/maxresdefault.jpg",
      title: "Minecraft, But I Can Hire SCARY Myths",
    },
    {
      link: "https://youtu.be/QQttegPgy8g?feature=shared",
      img: "https://img.youtube.com/vi/QQttegPgy8g/maxresdefault.jpg",
      title: "Minecraft But Everything I Touch Turns Scary",
    },
    
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Scary Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Scary Mods
        </p>
        <div className="row">
          {mods.map((mod, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-6" key={index}>
              <div className="card inner-popup-card">
                <a href={mod.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={mod.img}
                    className="card-img-top inner-popup-img"
                    alt={mod.title}
                  />
                </a>
                <h6>{mod.title}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <Link to="/contact">
            <Button variant="primary">
              Buy Now
            </Button>
          </Link>
        </div>
        <h6 className="Important Notes">Important Notes here:</h6>
        <ul className="popup-notes">
          <li>You Will Get Discount For Bulk Purchase</li>
          <li>Let Me Know If You Want to Add or Remove Any Mods</li>
          <li>You Can Test Some Mods If You Want</li>
        </ul>
        <Button className="packages-close-btn" onClick={onClose} variant="secondary">Close</Button>
      </Modal.Body>
    </Modal>
  );
};

export default Monster;
