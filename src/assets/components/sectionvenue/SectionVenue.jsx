import React from 'react'
import { FaUniversity } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./venue.css"

function SectionVenue (){
  return (
    <div id="conferencevenu"  className="VenueCartcontainer">
      <div className="VenueCart">
        <div className="Venuetext">
          <div className="venutexticont">
              <FaLocationDot  className='venuicone' />
            <h2>Venue & Accommodation</h2>

          </div>
         
        

        </div>
        <div className="VenueCartBox">
            <div className="unitext">
              <div className="unitexticon">
                <FaUniversity className='unicitylocation' />
                 <h2>Mingachevir State University</h2>
              </div>
              <div className="locationmap">
               < FaLocationDot/>
               <p>120 Hasan Aliyev str., Khirdalan city AZ0101, Azerbaijan</p>
              </div>
              <div className="locationbtn">
                <button>< FaMap/>Wiew on Map</button>
               
              </div>
             
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default SectionVenue
