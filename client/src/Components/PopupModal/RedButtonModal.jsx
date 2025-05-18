import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RedButtonModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Custom Mods and Packages</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        🎮 Along with pre-made mods, plugins, and packages, we also craft custom mods and packages. 🛠
        <br />
        <br />
        🌟 We draw inspiration from top channels like:
        <ul>
          <li>
            <a href="https://www.youtube.com/@xNestorio">xNestorio</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@Bionic">Bionic</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@Craftee">Craftee</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@HeresJohnnyYT">Here's Johnny</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@cashminecraft">Cash</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@nico-mc">Nico</a>
          </li>
        </ul>
        💡 Need a unique mod? You're in the right place! Order now from below.
        Our dedicated team is ready to bring your ideas to life at an affordable rate! 💰
        <br />
        <br />
        🚀 So, what are you waiting for? Place your order now and level up your
        gaming experience! 🎮
      </Modal.Body>
      <Modal.Footer>
      <Link to="/contact">
          <Button variant="primary" onClick={handleClose}>
            Order Now
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default RedButtonModal;