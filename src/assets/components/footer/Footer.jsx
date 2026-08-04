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
    <footer className="footer">

      <div className="footerContainer">

     
        <div className="footerBox">
          <h2>CILERS 2026</h2>

          <p>
            Welcome to CILERS 2026 — The International Scientific Conference on "Contemporary Issues in Language, Education, Research, and Sustainability." We are honored to welcome distinguished scholars, researchers, educators, and professionals to this international scientific event dedicated to exchanging knowledge, fostering academic collaboration, and exploring innovative perspectives on contemporary issues in language, education, research, and sustainability.
          </p>

         
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
                href="https://maps.app.goo.gl/KDkSG34JqDM8hKRg7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Q382+6R7, Nəriman Nərimanov St, Mingachevir
              </a>
            </span>
          </div>

          <div className="contactItem">
            <FaPhoneAlt />
            <span>
              <a href="tel:+994556747170">+994 (55) 837 01 38</a>
            </span>
          </div>

          <div className="contactItem">
            <FaEnvelope />
            <span>
              <a href="mailto:cier.editorial@mdu.edu.az">cier.editorial@mdu.edu.az</a>
            </span>
          </div>

          <div className="contactItem">
            <FaClock />
            <span>Monday-Friday: 10:00 - 17:00</span>
          </div>
        </div>

      </div>

      <div className="footerBottom">
        © 2026 CILERS  Conference. All rights reserved
      </div>

    </footer>
  )
}