import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import "./Deadlines.css"

function Deadlines  ()  {
  return (
    <div>
      <div id='Deadlines' className="deadlinecontainer">
        <div className="containerbox">
            <div className="deadlinetext">
                <div className="calendaricon">
                       <FaCalendar className='facalendaricon'/>
                <h2>Deadlines</h2>
                </div>
              
                <div className="deadlineparagrap">
                    <p>Mark your calendar with these crucial deadlines</p>
                </div>
            </div>
           
          <div className="boxfullcontainer">
              <div className="deadlineboxcontainerone">
               < IoDocumentText className='deadlineiconone'/>
                <h3>Abstract Submission</h3>
                <p>Deadline</p>
                <h4>May 1, 2026</h4>
            </div>
            <div className="deadlineboxcontainertwo">
               < FaUserPlus className='deadlineicontwo'  />
                <h3>Full Peaper</h3>
                <p>Deadline</p>
                <h4>May 1, 2026</h4>
            </div>
            <div className="deadlineboxcontainertree">
               < FaTelegramPlane className='deadlineicontree'  />
                <h3>Registration</h3>
                <p>Deadline</p>
                <h4>May 1, 2026</h4>
            </div>
            <div className="deadlineboxcontainerfour">
               < FaCalendarDay className='deadlineiconfour'  />
                <h3>Conference</h3>
                <p>Deadline</p>
                <h4>May 18-19, 2026</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deadlines
