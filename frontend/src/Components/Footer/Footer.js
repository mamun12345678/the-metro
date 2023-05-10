import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const mapContainerStyle = {
  width: "100%",
  height: "263px",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(23, 28, 47, 0.85)",
  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
};

const mapCenter = {
  lat: 51.87766,
  lng: -0.4104,
};

const Footer = () => {
  return (
    <footer className={`${styles["footer-section"]} py-4`}>
      <div className="container">
        <div className="row justify-content-evenly text-light">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3">
            <h5 className="mb-3">Navigation</h5>
            <ul className={styles["footer-sitemap"]}>
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/Events">Events</a>
              </li>
              <li>
                <a href="/Reviews">Reviews</a>
              </li>
              <li>
                <a href="/Products">Products</a>
              </li>
              <li>
                <a href="/Gallery">Gallery</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 text-center">
            <h5 className="mb-3">Contact Information</h5>
            <div className={styles["footer-contact"]}>
              <p>
                <i className="fas fa-map-marker-alt"></i> Campus Centre,
                <br />
                University Square,
                <br />
                Luton LU1 3JU
                <br />
                <i className="fas fa-envelope"> help@bedssu.co.uk</i>
                <br />
                <a
                  href="https://bedssu.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-decoration-none ${styles["footer-link"]}`}
                >
                  BedsSu Official Website
                </a>
                <br />
                <i className="fas fa-phone-alt mt-3"> 01582743221</i>
              </p>
              <div
                className={`d-flex justify-content-around ${styles["footer-social"]}`}
              >
                <a
                  href="https://www.facebook.com/BedsSU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-light mb-2 ${styles["social-icon"]}`}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://twitter.com/bedssu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-light mb-2 ${styles["social-icon"]}`}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com/bedssu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-light mb-2 ${styles["social-icon"]}`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.youtube.com/bedssu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-light mb-2 ${styles["social-icon"]}`}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3 text-center">
            <div className={styles["footer-map-title"]}>
              <h5>Location</h5>
            </div>
            <div className={styles["map-container"]}>
              <LoadScript googleMapsApiKey="AIzaSyCSLMyClr5PJhgiZdKEROHkm25RkHyGyTo">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  zoom={19}
                  center={mapCenter}
                />
              </LoadScript>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="my-1" style={{ borderTop: "1px solid #FF8C00" }}>
              Copyright 2023 | The Metro | Developed By AL MAMUN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
