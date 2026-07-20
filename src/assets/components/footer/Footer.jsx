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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

    
        <div className="footerBox">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Committee</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#topics">Scientific Topics</a></li>
          </ul>
        </div>

        <div className="footerBox">
          <h3>Conference Info</h3>

          <ul>
            <li><a href="#Deadlines">Program</a></li>
            <li><a href="#speakerkeynote">Speakers</a></li>
            <li><a href="#guidelines">Abstracts</a></li>
            <li><a href="#Deadlines">Registration</a></li>
            <li><a href="#conferencevenu">Venue</a></li>
          </ul>
        </div>

        <div className="footerBox">
          <h3>Contact Info</h3>

          <div className="contactItem">
            <FaMapMarkerAlt />
            <span>
              <a 
                href="https://www.google.com/maps?q=Baku+Engineering+University" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                AZ0101, Hasan Aliyev str. 120, Khirdalan, Azerbaijan
              </a>
            </span>
          </div>

          <div className="contactItem">
            <FaPhoneAlt />
            <span>
              <a href="tel:+994556747170">+994 (55) 674-71-70</a>
            </span>
          </div>

          <div className="contactItem">
            <FaEnvelope />
            <span>
              <a href="mailto:isfm@beu.edu.az">isfm@beu.edu.az</a>
            </span>
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