import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
// import client1 from "../../images/fuhhaya.jpeg";
// import client2 from "../../images/invictor.jpg";
// import client3 from "../../images/furious.jpeg";
// import client4 from "../../images/acenix.jpeg";
// import client5 from "../../images/john.jpg";
// import client6 from "../../images/Benx.jpg";
import Johnny_Minecraf from "../../images/Johnny_Minecraf.jpg";
import Omz from "../../images/Omz.jpg";
import Awita from "../../images/Awita.jpg";
import Talcado from "../../images/Talcado.jpg";
import Acenix from "../../images/Acenix.jpg";

// import partner1 from "../../images/p1.jpeg";
// import partner2 from "../../images/p2.jpeg";
// import partner3 from "../../images/p3.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="about-card" style={{ backgroundColor: "#444" }}>
              <Card.Body>
                <Card.Title className="about-title">
                  About Craftify Productions
                </Card.Title>
                <Card.Text className="about-text">
                  Craftify Productions is your one-stop destination for premium
                  Minecraft mods and custom services tailored for content
                  creators and YouTubers. We offer top-quality mods at
                  unbeatable prices, alongside custom services like script
                  writing, designed to elevate your gaming experience.
                  
                  <br /> <br /> Join us on our journey as we continue to expand
                  and innovate, bringing you the best in Minecraft gaming. Got
                  questions or need assistance? Reach out to us anytime – we\'re
                  here to help you unleash your creativity and take your gaming
                  to new heights.
                  <br />

                </Card.Text>
                <div className="about-buttons">
                  <Link to="/contact">
                    <Button variant="primary">Contact Us</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h2 className="text-center mb-4" style={{ color: "#007bff" }}>
              Our Clients
            </h2>
            <Row>
              {/* <ClientItem
                image={client1}
                name="Fuhhaya"
                subscribers={"1.02M+"}
              />
              <ClientItem
                image={client2}
                name="Anvictor"
                subscribers={"24.1M+"}
              />
              <ClientItem
                image={client3}
                name="Furious Jumper"
                subscribers={"5.81M+"}
              />
              <ClientItem
                image={client4}
                name="Acenix"
                subscribers={"15.2M+"}
              />
              <ClientItem
                image={client5}
                name="John falz"
                subscribers={"2.88M+"}
              />
              <ClientItem image={client6} name="Benx" subscribers={" 2.11M+"} /> */}
              <ClientItem image={Johnny_Minecraf} name="Johnny Minecraf" subscribers={" 3.82MM+"} />
              <ClientItem image={Omz} name="Omz" subscribers={" 3.8M+"} />
              <ClientItem image={Awita} name="Awita" subscribers={" 7.4M+"} />
              <ClientItem image={Talcado} name="Talcado" subscribers={" 1.2M+"} />
              <ClientItem image={Acenix} name="Acenix" subscribers={" 16M+"} />
            </Row>
          </Col>
        </Row>
        {/* <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h2 className="text-center mb-4" style={{ color: "#007bff" }}>
              Our Partners
            </h2>
            <Row>
              <PartnerItem
                image={partner1}
                name="Sparta356"
                subscribers={" 9.45M+"}
              />
              <PartnerItem
                image={partner2}
                name="Parkillerz"
                subscribers={" 1.74M+"}
              />
              <PartnerItem
                image={partner3}
                name="Oops Zeroes"
                subscribers={"3.34M+"}
              />
            </Row>
            <p className="text-center mt-4" style={{ color: "#aaa" }}>
              These YouTubers are our partners, selling their mods to us for a
              commission on each sale. If you're interested in becoming a
              partner, your mod must be original. Feel free to contact me for
              more details.
            </p>
          </Col>
        </Row>
        <div className="about-buttons">
        <Link to="/contact">
                    <Button variant="primary">Partner With Us</Button>
                  </Link>
        </div> */}
      </Container>
    </div>
  );
};

const ClientItem = ({ image, name, subscribers }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="client-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">
            Subscribers: {subscribers}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const PartnerItem = ({ image, name, subscribers }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="client-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">
            Subscribers: {subscribers}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default About;
