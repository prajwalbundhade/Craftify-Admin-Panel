import React from "react";
import "./Popup.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Oneblock = ({ onClose }) => {
  const mods = [
    {
      link: "https://www.youtube.com/watch?v=WEaR5CulE_E",
      img: "https://img.youtube.com/vi/ygoaG64-wAM/maxresdefault.jpg",
      title: "Chained Together Block in Minecraft",
    },
    {
      link: "https://www.youtube.com/watch?v=awOl4Odk8Fg&t=17s",
      img: "https://img.youtube.com/vi/awOl4Odk8Fg/maxresdefault.jpg",
      title: "Minecraft but with one deadly block!!",
    },
    {
      link: "https://youtu.be/xfqTF2Gy2pY?si=UMJGM6v9z4oLpTGM",
      img: "https://img.youtube.com/vi/xfqTF2Gy2pY/maxresdefault.jpg",
      title: "Minecraft but It is Disaster Block",
    },
    {
      link: "https://www.youtube.com/watch?v=lUYBi0EiYZo",
      img: "https://img.youtube.com/vi/lUYBi0EiYZo/maxresdefault.jpg",
      title: "Minecraft but It is Social Media Block",
    },
    {
      link: "https://www.youtube.com/watch?v=TqmkmXOGm0w",
      img: "https://img.youtube.com/vi/TqmkmXOGm0w/maxresdefault.jpg",
      title: "Minecraft but It is Game Block",
    },
    {
      link: "https://www.youtube.com/watch?v=83TImLd4GaA",
      img: "https://img.youtube.com/vi/83TImLd4GaA/maxresdefault.jpg",
      title: "Minecraft but There is one void block",
    },
    {
      link: "https://www.youtube.com/watch?v=atzvUe0yP3s",
      img: "https://img.youtube.com/vi/atzvUe0yP3s/maxresdefault.jpg",
      title: "Minecraft But its Heart Block",
    },
    {
      link: "https://www.youtube.com/watch?v=Mob23md-3Bg",
      img: "https://img.youtube.com/vi/Mob23md-3Bg/maxresdefault.jpg",
      title: "Minecraft But its SuS Block",
    },
    {
      link: "https://www.youtube.com/watch?v=5Lmiz7T83Z0",
      img: "https://img.youtube.com/vi/5Lmiz7T83Z0/maxresdefault.jpg",
      title: "Minecraft but It is One Cartoon Block",
    },
    {
      link: "https://www.youtube.com/watch?v=ppf0zvUyShg",
      img: "https://img.youtube.com/vi/ppf0zvUyShg/maxresdefault.jpg",
      title: "Minecraft, But It's On 1 Girlfriend Block",
    },
    {
      link: "https://youtube.com/watch?v=VXrbbLXcyxw",
      img: "https://img.youtube.com/vi/VXrbbLXcyxw/maxresdefault.jpg",
      title: "Minecraft but There is One Nuke Block",
    },
    {
      link: "https://www.youtube.com/watch?v=Bnau-Y-tcPQ",
      img: "https://img.youtube.com/vi/Bnau-Y-tcPQ/maxresdefault.jpg",
      title: "Minecraft But its Shop Block",
    },
    {
      link: "https://youtu.be/11G6nnpVdhk?si=shAB7wBZa6y0HCt2",
      img: "https://img.youtube.com/vi/11G6nnpVdhk/maxresdefault.jpg",
      title: "Minecraft But its ChatGPT Block",
    },
    {
      link: "https://youtube.com/watch?v=MxPwTJSww7E",
      img: "https://img.youtube.com/vi/MxPwTJSww7E/maxresdefault.jpg",
      title: "Minecraft but There is One TNT Block",
    },
    {
      link: "https://youtu.be/mgWqrbpa6hk?feature=shared",
      img: "https://img.youtube.com/vi/mgWqrbpa6hk/maxresdefault.jpg",
      title: "Minecraft but there's 1 MILLIONAIRE Block",
    },
    {
      link: "https://www.youtube.com/watch?v=FJeysinxrx8",
      img: "https://img.youtube.com/vi/FJeysinxrx8/maxresdefault.jpg",
      title: "Minecraft But Its On 1 Super Block",
    },
    {
      link: "https://www.youtube.com/watch?v=AlAV8jeiA1k",
      img: "https://img.youtube.com/vi/AlAV8jeiA1k/maxresdefault.jpg",
      title: "Minecraft but its edible block",
    },
    {
      link: "https://youtu.be/--gYtPKqbLg?si=lrrUBf8VspvMWdtD",
      img: "https://img.youtube.com/vi/--gYtPKqbLg/maxresdefault.jpg",
      title: "Minecraft But its Op Block",
    },
    {
      link: "https://youtu.be/CiFZ37o13DQ?feature=shared",
      img: "https://img.youtube.com/vi/CiFZ37o13DQ/maxresdefault.jpg",
      title: "Minecraft but there’s Only One Giant Block",
    },
    {
      link: "https://www.youtube.com/watch?v=RO56GHReY40",
      img: "https://img.youtube.com/vi/RO56GHReY40/maxresdefault.jpg",
      title: "Minecraft but There is One Space Block",
    },
    {
      link: "https://youtu.be/nLI4ZOfjIEY?feature=shared",
      img: "https://img.youtube.com/vi/nLI4ZOfjIEY/maxresdefault.jpg",
      title: "Minecraft But Its One Elemental Block",
    },
    {
      link: "https://www.youtube.com/watch?v=_QwRGGVTnlA",
      img: "https://img.youtube.com/vi/_QwRGGVTnlA/maxresdefault.jpg",
      title: "Minecraft But There is a Diamond Block",
    },
    
  ];

  return (
    <Modal show={true} onHide={onClose} centered dialogClassName="custom-popup-width">
      <Modal.Header closeButton>
        <Modal.Title>Oneblock Mods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="popup-description">
          Here You Will Get All The Oneblock Mods
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
          <li>Let Me Know If you Want to add or remove any mods</li>
          <li>You can Test Some Mods If You Want</li>
        </ul>
        <Button className="packages-close-btn" onClick={onClose} variant="secondary">Close</Button>
      </Modal.Body>
    </Modal>
  );
};

export default Oneblock;
