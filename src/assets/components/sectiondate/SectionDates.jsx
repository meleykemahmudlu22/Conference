import React from 'react'
import { BiEdit } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import "./dates.css"

function SectionDates () {
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
                <h3>Abstract Submission</h3>
                <p>April 5, 2026</p>
                <p>Submission portal closes at midnight</p>
            </div>
        </div>
             <div className="DatesLeft">
            <div className="dateslogo">
              < FaUserCheck className='logodatetwo' />
            </div>
            <div className="datestext">
                <h3>Notification of Acceptance</h3>
                <p>April 25, 2026</p>
                <p>Acceptance notifications sent via email</p>
            </div>
        </div>
             <div className="DatesLeft">
            <div className="dateslogo">
              < FaCalendar className='logodatetree' />
            </div>
            <div className="datestext">
                <h3>Registration Deadline</h3>
                <p>May 5, 2026</p>
                <p>Early-bird discount ends on this date</p>
            </div>
        </div>
        </div>
       
        <div className="DatesRight">
            <div className="dateimg">
                <img src="https://isfm.beu.edu.az/images/conf-date.avif" alt="Conference Dates Illustration" loading="lazy" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionDates
