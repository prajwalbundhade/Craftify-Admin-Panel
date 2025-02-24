import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Solo = ({ onClose }) => {
  const mods = [

    {
      link: "https://www.youtube.com/watch?v=sNMy3mU-LbA",
      img: "https://img.youtube.com/vi/sNMy3mU-LbA/maxresdefault.jpg",
      title: "Running a million blocks",
    },
    {
      link: "https://www.youtube.com/watch?v=NZt7smBjVU0",
      img: "https://img.youtube.com/vi/NZt7smBjVU0/maxresdefault.jpg",
      title: "100 Mystery buttons",
    },
    {
      link: "https://www.youtube.com/watch?v=49H6dAi-2Jo",
      img: "https://img.youtube.com/vi/49H6dAi-2Jo/maxresdefault.jpg",
      title: "Turning into snake",
    },
    {
      link: "https://www.youtube.com/watch?v=UbbejP_iHkU",
      img: "https://img.youtube.com/vi/UbbejP_iHkU/maxresdefault.jpg",
      title: "Million Legos",
    },
    {
      link: "https://www.youtube.com/watch?v=YyYYoEin2CM",
      img: "https://img.youtube.com/vi/YyYYoEin2CM/maxresdefault.jpg",
      title: "Minecraft But Getting Younger",
    },
    {
      link: "https://www.youtube.com/watch?v=XH3278Ywzrk",
      img: "https://img.youtube.com/vi/XH3278Ywzrk/maxresdefault.jpg",
      title: "Minecraft but MOBS HAVE SECRET ROOMS",
    },
    {
      link: "https://www.youtube.com/watch?v=jCwoXmm7Tnk",
      img: "https://img.youtube.com/vi/jCwoXmm7Tnk/maxresdefault.jpg",
      title: "Can't Touch Colors",
    },
    {
      link: "https://www.youtube.com/watch?v=wg7aV5YYA4Y",
      img: "https://img.youtube.com/vi/wg7aV5YYA4Y/maxresdefault.jpg",
      title: "Minecraft But Million Hearts",
    },
    {
      link: "https://www.youtube.com/watch?v=5BKj2-RGMN4",
      img: "https://img.youtube.com/vi/5BKj2-RGMN4/maxresdefault.jpg",
      title: "Minecraft But I can Upgrade Any Mobs",
    },
    {
      link: "https://www.youtube.com/watch?v=3dOOdeHPqKU",
      img: "https://img.youtube.com/vi/3dOOdeHPqKU/maxresdefault.jpg",
      title: "Minecraft but I Evolve into Chicken",
    },
    {
      link: "https://www.youtube.com/watch?v=0TdJclOpuN8",
      img: "https://img.youtube.com/vi/0TdJclOpuN8/maxresdefault.jpg",
      title: "Minecraft But There's Sprunki Hearts",
    },
    {
      link: "https://www.youtube.com/watch?v=QGkPtyDzI7E",
      img: "https://img.youtube.com/vi/9hkIFO0GrVk/maxresdefault.jpg",
      title: "Minecraft But Drops Are Upgraded",
    },
    {
      link: "https://www.youtube.com/watch?v=S_sERG-aylc",
      img: "https://img.youtube.com/vi/S_sERG-aylc/maxresdefault.jpg",
      title: "The Bloop vs Security House in Minecraft",
    },
    {
      link: "https://www.youtube.com/watch?v=j5JRJHNhWqg",
      img: "https://img.youtube.com/vi/j5JRJHNhWqg/maxresdefault.jpg",
      title: "Minecraft, But I Become God",
    },
    {
      link: "https://youtu.be/QWoEcIrbUWs?si=pgV-_YStKJ9joNBs",
      img: "https://img.youtube.com/vi/QWoEcIrbUWs/maxresdefault.jpg",
      title: "Minecraft But I can turn into monster",
    },
    {
      link: "https://www.youtube.com/watch?v=UdCHFGeJU1g",
      img: "https://img.youtube.com/vi/UdCHFGeJU1g/maxresdefault.jpg",
      title: "Minecraft but I Can Buy Million $ Sword",
    },
    {
      link: "https://youtu.be/gZcYePmCTWk?si=MFfeZAHC22vjeIuv",
      img: "https://img.youtube.com/vi/gZcYePmCTWk/maxresdefault.jpg",
      title: "Minecraft But There Is One Hacker block",
    },
    {
      link: "https://www.youtube.com/watch?v=T9BVeQm-5tk",
      img: "https://img.youtube.com/vi/T9BVeQm-5tk/maxresdefault.jpg",
      title: "Minecraft but I survived 1000000 days",
    },
    {
      link: "https://youtu.be/qL0gOGvdD3M?si=yLIH03dkaADCGNWs",
      img: "https://img.youtube.com/vi/qL0gOGvdD3M/maxresdefault.jpg",
      title: "Minecraft But XP = Luck",
    },

  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Best Solo Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Best Solo Mods
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

export default Solo;
