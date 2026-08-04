import React from 'react'
import { FaUniversity } from "react-icons/fa";
import { FaMap, FaMapMarkerAlt } from "react-icons/fa";
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
               < FaMapMarkerAlt className="location-marker-icon" />
               <p>Q382+6R7, Nəriman Nərimanov St, Mingachevir</p>
              </div>
              <div className="locationbtn">
                <a 
                  href="https://maps.app.goo.gl/KDkSG34JqDM8hKRg7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-link-wrapper"
                >
                  <button>< FaMap/>View on Map</button>
                </a>
               
              </div>
             
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default SectionVenue
