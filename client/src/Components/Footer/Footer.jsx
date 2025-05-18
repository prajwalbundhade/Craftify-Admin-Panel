import React from 'react';
import { Container } from "react-bootstrap";
import './Footer.css';

function Footer() {
  return (
    <Container className="footer-container">
      <div className="footer-text">
        <p className="footer-bold">
          © PSM Craftify Gaming Productions Pvt. Ltd. All rights reserved.
        </p>
        <p>
          Craftify Productions is not affiliated with Mojang Studios, Minecraft, or any official game developers. <br />
          All mods are custom-made and sold exclusively to content creators to enhance gameplay.
        </p>
      </div>
    </Container>
  );
}

export default Footer;
