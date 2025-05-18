import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const World = ({ onClose }) => {
  const mods = [

    {
      link: "https://www.youtube.com/watch?v=a6xe0-HOm60",
      img: "https://img.youtube.com/vi/a6xe0-HOm60/maxresdefault.jpg",
      title: "Why I Ate My Friend's ENTIRE World",
    },
    {
      link: "https://www.youtube.com/watch?v=IbLcXos3qf4",
      img: "https://img.youtube.com/vi/IbLcXos3qf4/maxresdefault.jpg",
      title: "Minecraft but TNT = World's Size",
    },
    {
      link: "https://www.youtube.com/watch?v=6aM15GH5zjM",
      img: "https://img.youtube.com/vi/6aM15GH5zjM/maxresdefault.jpg",
      title: "Minecraft But In a Cursed World",
    },
    {
      link: "https://youtu.be/tHImxKExYDk?si=pS83QGoKXEEQ0-2U",
      img: "https://i.ytimg.com/vi/tHImxKExYDk/mqdefault.jpg",
      title: "Minecraft But My Heart = World Size ( only datapack )",
    },
    {
      link: "https://www.youtube.com/watch?v=R6XwtgBH-B0",
      img: "https://i.ytimg.com/vi/R6XwtgBH-B0/mqdefault.jpg",
      title: "Turning the world to TNT",
    },
    {
      link: "https://www.youtube.com/watch?v=aa83GpBbY-c",
      img: "https://i.ytimg.com/vi/aa83GpBbY-c/mqdefault.jpg",
      title: "The world is lava",
    },
    {
      link: "https://youtu.be/vV078ZTYJKI?feature=shared",
      img: "https://img.youtube.com/vi/vV078ZTYJKI/maxresdefault.jpg",
      title: "Minecraft but Kills = World Size",
    },
   
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>World Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">Here You Will Get All The World Mods</p>
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

export default World;
