import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">

      <div className="footerContainer">

     
        <div className="footerBox">
          <h2>⚗ ISFM Conference</h2>

          <p>
            Bringing together leading researchers from around the world to share 
            cutting-edge discoveries and foster new collaborations in chemistry, 
            materials science, and sustainable technologies.
          </p>

          <div className="socialIcons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>

    
        <div className="footerBox">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Committee</li>
            <li>Contact</li>
            <li>Scientific Topics</li>
          </ul>
        </div>

        <div className="footerBox">
          <h3>Conference Info</h3>

          <ul>
            <li>Program</li>
            <li>Speakers</li>
            <li>Abstracts</li>
            <li>Registration</li>
            <li>Venue</li>
          </ul>
        </div>

        <div className="footerBox">
          <h3>Contact Info</h3>

          <div className="contactItem">
            <FaMapMarkerAlt />
            <span>
              AZ0101, Hasan Aliyev str. 120, 
              Khirdalan, Azerbaijan
            </span>
          </div>

          <div className="contactItem">
            <FaPhoneAlt />
            <span>+994 (55) 674-71-70</span>
          </div>

          <div className="contactItem">
            <FaEnvelope />
            <span>isfm@beu.edu.az</span>
          </div>

          <div className="contactItem">
            <FaClock />
            <span>Monday-Friday: 10:00 - 17:00</span>
          </div>
        </div>

      </div>

      <div className="footerBottom">
        © 2026 ISFM Conference. All rights reserved
      </div>

    </div>
  )
}