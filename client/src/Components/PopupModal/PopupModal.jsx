import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PopupModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-primary">
          Welcome to Craftify Productions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>
            Craftify Productions: Your Source for Quality Mod Remakes!
          </strong>
        </p>
        <ul>
          <li>
            We offer remakes inspired by videos from Cash, Nico, Craftee,
            xNestorio, and more. Please note that we are not the creators of the
            original mods featured in these videos.
          </li>
          <li>
            Prices vary based on the quality of the mods. Higher prices signify
            higher quality.
          </li>
          <li>
            Need an alternative payment option to PayPal? Contact us at:
            <ul>
              <li className="text-primary">
                Email: contact@craftifyproductions.com
              </li>
              <li className="text-primary">Discord: thunderzlucky</li>
            </ul>
          </li>

          <li>
            <strong>Purchase and Booking Information</strong>
          </li>
          <ul>
            <li>Buy Now</li>
            <li>
              Click &quot;Buy Now&quot; to be securely redirected to PayPal for
              payment. After completing your purchase, you will be directed to a
              Mega link to download your product.
            </li>
            <li>Book Now</li>
            <li>
              To book a mod, contact me via the platforms listed above with the
              details of your desired product.
            </li>
          </ul>
          <li>
            <strong>Important Notice</strong>
          </li>
          <li>
            Please do not copy any thumbnails from creators mentioned above or
            any major YouTubers to avoid potential copyright issues.
          </li>
          <li>
            Encountered a problem or bug with any of our products? Reach out to
            us, and we&apos;ll resolve it promptly!
          </li>
          <li>
            Buying mods in bulk? Connect with us on email or Discord for
            exclusive discounts and benefits.
          </li>
          <li>
            By visiting craftifyproductions.com, you agree to our terms and
            conditions mentioned on the site.
          </li>
        </ul>
        <p>
          Regards,
          <br />
          Thunderzlucky (Owner)
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
PopupModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PopupModal;
