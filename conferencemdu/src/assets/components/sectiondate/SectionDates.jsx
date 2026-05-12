import React from 'react'
import { BiEdit } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import "./dates.css"

const SectionDates = () => {
  return (
    <div>
      <div className="SectionDtes">
        <div className="leftcontainer">
            <div className="leftdatestext">
             <h2>Important Dates</h2>
            </div>
          
             <div className="DatesLeft">
            <div className="dateslogo">
              < BiEdit className='logodateone' />
            </div>
            <div className="datestext">
                <h3>Abstract Submission Deadline</h3>
                <p>April 5, 2026</p>
                <p>Extended deadline available</p>
            </div>
        </div>
             <div className="DatesLeft">
            <div className="dateslogo">
              < FaUserCheck className='logodatetwo' />
            </div>
            <div className="datestext">
                <h3>Abstract Submission Deadline</h3>
                <p>April 5, 2026</p>
                <p>Extended deadline available</p>
            </div>
        </div>
             <div className="DatesLeft">
            <div className="dateslogo">
              < FaCalendar className='logodatetree' />
            </div>
            <div className="datestext">
                <h3>Abstract Submission Deadline</h3>
                <p>April 5, 2026</p>
                <p>Extended deadline available</p>
            </div>
        </div>
        </div>
       
        <div className="DatesRight">
            <div className="dateimg">
                <img src="https://isfm.beu.edu.az/images/conf-date.avif" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDates
