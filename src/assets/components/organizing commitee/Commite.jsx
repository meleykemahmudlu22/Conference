import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import "./commite.css"

function Commite  ()  {
    
  const handleCopy = () => {
    navigator.clipboard.writeText("+994501234567");
    alert("Phone number copied: +994501234567");
  };
  return (
    <div>
      <div id='contact' className="Commitecontainer">
        <div className="Commitebox">
            <div className="commiteicon">
                <h2>Contact the Organizing Committee</h2>
            </div>
            <div className="commitetext">
            <p>Have questions about the conference? Need assistance with registration or submissions?</p>
            <p> Our organizing committee is here to help you.</p>
        
            </div>
            <div className="commitebtn">
                <button><a href="mailto: meleykemahmudlu1@gmail.com"><MdEmail />Email Committee</a></button>
                <button  onClick={handleCopy}><FaPhoneAlt />Call us</button>
                <button  > <a 
  href="https://www.google.com/maps?q=Mingachevir+Heydar+Aliyev+Center" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn location-btn"
><FaMap />Visit Us</a></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Commite
