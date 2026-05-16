import React from 'react'
import { HiUserGroup } from "react-icons/hi";
import { FaUniversity } from "react-icons/fa";
import "./Participants.css"

function ConferenceParticipants  () {
  return (
    <div>
        <div className="participantscontainer">
            <div className="conferenceparticipants">
                <div className="participantstext">
                    <div className="participantsicon">
                        <HiUserGroup className='participantboxicon' />
                         <h2>Conference Participants</h2>
                    </div>
                    <div className="participantsparagrap">
                        <p>Join researchers, academics, and industry professionals from around the world</p>
                    </div>
                
                </div>
                <div className="conferenceboxflex">
                    <div className="participantbox">
                    <FaUniversity className='participanttexticon' />
                    <h2>50+</h2>
                    <h4>Universities</h4>
                    <p>Leading academic institutions </p>
                    <p>worldwide</p>
                </div>
                    <div className="participantbox">
                    < FaUniversity className='participanttexticon' />
                    <h2>25+</h2>
                    <h4>Countries</h4>
                    <p>Leading academic institutions </p>
                    <p>worldwide</p>
                </div>
                    <div className="participantbox">
                    < FaUniversity className='participanttexticon' />
                    <h2>200+</h2>
                    <h4>Researchers</h4>
                    <p>Leading academic institutions </p>
                    <p>worldwide</p>
                </div>
                    <div className="participantbox">
                    < FaUniversity className='participanttexticon' />
                    <h2>30+</h2>
                    <h4>Companies</h4>
                    <p>Leading academic institutions </p>
                    <p>worldwide</p>
                </div>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default ConferenceParticipants
