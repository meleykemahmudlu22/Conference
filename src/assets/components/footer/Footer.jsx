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
          <h2>⚗ ISFM Konfransı</h2>

          <p>
            Dünyanın hər yerindən aparıcı tədqiqatçıları bir
            araya gətirərək, qabaqcıl kəşfləri bölüşmək və
            kimya, materialşünaslıq və davamlı
            texnologiyalar sahəsində yeni əməkdaşlıqlar
            qurmaq.
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
          <h3>Tez Keçidlər</h3>

          <ul>
            <li>Ev</li>
            <li>Haqqımızda</li>
            <li>Komitə</li>
            <li>Əlaqə</li>
            <li>Elmi Mövzular</li>
          </ul>
        </div>

        <div className="footerBox">
          <h3>Konfrans Məlumatı</h3>

          <ul>
            <li>Proqram</li>
            <li>Dinamiklər</li>
            <li>Xülasələr</li>
            <li>Qeydiyyat</li>
            <li>Məkan</li>
          </ul>
        </div>

        <div className="footerBox">
          <h3>Əlaqə Məlumatı</h3>

          <div className="contactItem">
            <FaMapMarkerAlt />
            <span>
              AZ0101, Xırdalan şəhəri, Həsən
              Əliyev küç., 120
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
            <span>Bazar ertəsi-Cümə: 10:00 - 17:00</span>
          </div>
        </div>

      </div>

      <div className="footerBottom">
        © 2026 ISFM Konfransı. Bütün hüquqlar qorunur
      </div>

    </div>
  )
}