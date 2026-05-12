import React from 'react'
import { FaUniversity } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import "./venue.css"

const SectionVenue = () => {
  return (
    <div  className="VenueCartcontainer">
      <div className="VenueCart">
        <div className="Venuetext">
            <p>Location</p>
            <h2>Conference Venue</h2>
            <hr />

        </div>
        <div className="VenueCartBox">
            <div className="unitext">
              <div className="unitexticon">
                <FaUniversity />
                 <h2>Mingachevir State University</h2>
              </div>
              <div className="icontextbottom">
               <p>Host institution of CIER 2026</p>
              </div>
            </div>
            <div className="Venucarttext">
              <div className="topicontexts">
                <GrLocationPin />
                <p>Mingachevir, Haydar Aliyev Center, Azerbaijan</p>
              </div>
              <div className="topicontexts">
                <TbWorld />
                <p>mdu.edu.az</p>
              </div>
              <div className="topicontexts">
                <MdOutlineEmail />
                <p>cier.editorial@mdu.edu.az</p>
              </div>
              <div className="topicontexts">
                <FaPhoneAlt />
                <p>(+994 55) 837-01-38 / (+994 50) 836-93-66</p>
              </div>
              <div className="topicontexts">
                <FaCalendarAlt />
                <p>May 18–19, 2026</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionVenue
