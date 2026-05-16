import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import image from "../images/MDUlogo (2).png"
import "./one.css"

function SectionOne () {
  return (
    <div>
        <div className="onesection">
            <div className="OneText">
                <div className="textimg">
                     <img src={image} alt="" />
                     <h2>INTERNATONAL SCIENTIFIC CONFERENCE</h2>
                     <h2 className="dateAnim">MAY 18-19,2026</h2>
                </div>
                <div className="TextLogo">
                     <img src={image} alt="" />
                    <img src="https://copilot.microsoft.com/th/id/BCO.838217de-d8fa-4468-a23d-f7955e1283de.png" alt="" />
                   
                </div>
                <div className="Textend">
                    <h2>"CONTEMPORAARY ISSUES IN LANGUAGE,EDUCATION,AND RESEARCH"</h2>
                </div>
               
            </div>
            <div className="rightbottumtext">
                <p>EMAIL:CIER.EDITORIAL@MDU.EDU.AZ</p>
                <p>TEL:(+994 55)837-01-38/(+994 50)836-93-66</p>
            </div>
            <div className="leftbottumtext">
                 <SlLocationPin />
               
                <p>Mingachavir,Haydar Aliyev Center</p>
              
            </div>
        </div>

    </div>
  )
}
export default SectionOne
