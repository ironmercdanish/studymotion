import React, { useState } from "react";
import {
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setEmail(""); // Clear input field
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <>
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row text-center text-md-start align-items-center">
            <div className="col-12 col-md-3 mb-4 mb-md-0">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} <strong>StudyMotion</strong>.
                All rights reserved.
              </p>
            </div>
            <div className="col-12 col-md-3 mb-4 mb-md-0">
              <ul className="list-unstyled">
                <li className="mb-2" style={{ fontSize: "18px" }}>
                  <strong>Explore</strong>
                </li>
                <li>
                  <Link className="footer-link" to="/" onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4 mb-md-0">
              <ul className="list-unstyled">
                <li className="mb-2" style={{ fontSize: "18px" }}>
                  <strong>Connect With Us</strong>
                </li>
                <li>
                  <a
                    className="footer-link"
                   href="https://shorturl.at/qCETh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="me-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://wa.me/+918969248180?text=Hello How Can I help you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="me-2" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://t.me/+918969248180?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram className="me-2" /> Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <ul className="list-unstyled">
                <li className="mb-2" style={{ fontSize: "18px" }}>
                  <strong>Subscribe</strong>
                </li>
                <li>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-warning w-100">
                      <FaEnvelope className="me-2" /> Subscribe
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="mb-0">
              Made by{" "}
              <strong>
                <span style={{ color: "yellow" }}>Curious Coder</span>
              </strong>
            </p>
            <button
              className="btn btn-outline-light mt-3"
              onClick={scrollToTop}
            >
              <FaArrowUp /> Back to Top
            </button>
          </div>
        </div>
      </footer>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h4>Subscription Successful!</h4>
            <p>Thank you for subscribing to our newsletter! 🎉</p>
            <button className="btn btn-primary" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .popup {
            background: black transparent repeat scroll 0 0;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </>
  );
};

export default Footer;
