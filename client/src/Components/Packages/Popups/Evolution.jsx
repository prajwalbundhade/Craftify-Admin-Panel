import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Evolution = ({ onClose }) => {
  const mods = [

    {
        link: "https://m.youtube.com/watch?v=JPrYVWxggd8",
        img: "https://img.youtube.com/vi/JPrYVWxggd8/maxresdefault.jpg",
        title: "Minecraft but You Can Evolve",
      },
      {
        link: "https://www.youtube.com/watch?v=3dOOdeHPqKU",
        img: "https://img.youtube.com/vi/3dOOdeHPqKU/maxresdefault.jpg",
        title: "Minecraft but I Evolve into Chicken",
      },
      {
        link: "https://www.youtube.com/watch?v=49H6dAi-2Jo",
        img: "https://img.youtube.com/vi/49H6dAi-2Jo/maxresdefault.jpg",
        title: "Turning into snake",
      },
      {
        link: "https://www.youtube.com/watch?v=0bEHjc4nSAY",
        img: "https://img.youtube.com/vi/0bEHjc4nSAY/maxresdefault.jpg",
        title: "Minecraft but You Can Turn To Blob",
      },
      {
        link: "https://www.youtube.com/watch?v=2vY8l8kLpfY",
        img: "https://img.youtube.com/vi/2vY8l8kLpfY/maxresdefault.jpg",
        title: "Minecraft But I Can Turn Into Worm",
      },
      {
        link: "https://youtu.be/xZkzT2uSHgw?si=BgxR9riPiKLxxHfj",
        img: "https://img.youtube.com/vi/xZkzT2uSHgw/maxresdefault.jpg",
        title: "Minecraft but You can Turn To Spider",
      },
      {
        link: "https://www.youtube.com/watch?v=lv1i8fWwDVY",
        img: "https://img.youtube.com/vi/lv1i8fWwDVY/maxresdefault.jpg",
        title: "Minecraft but You can Turn To Wither Storm",
      },
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
        link: "https://www.youtube.com/watch?v=FoDk6jy0Ihk",
        img: "https://img.youtube.com/vi/FoDk6jy0Ihk/maxresdefault.jpg",
        title: "Minecraft, But I Become a Parasite",
      },
      {
        link: "https://www.youtube.com/watch?v=j5JRJHNhWqg",
        img: "https://img.youtube.com/vi/j5JRJHNhWqg/maxresdefault.jpg",
        title: "Minecraft, But I Become God",
      },
      {
        link: "https://www.youtube.com/watch?v=PIrXInpnurg",
        img: "https://img.youtube.com/vi/PIrXInpnurg/maxresdefault.jpg",
        title: "Minecraft But I can Buy Evolutions",
      },
      
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Evolution Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Evolution Mods
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

export default Evolution;
