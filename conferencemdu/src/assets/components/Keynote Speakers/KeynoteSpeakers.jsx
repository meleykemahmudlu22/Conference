import React, { useEffect, useState } from 'react';
import { FaMicrophone } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import axios from "axios";
import image from "../images/rektor.jpeg"
import "./KeynoteSpeakers.css";

function KeynoteSpeakers() {
  const [speakers, setSpeakers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;


  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const { data } = await axios.get("https://6a1ad52fbc2f94475492b2ec.mockapi.io/parabolasite");
        setSpeakers(data);
      } catch (error) {
        console.error("Speaker məlumatlarını gətirmək mümkün olmadı:", error);
      }
    }
    fetchSpeakers();
  }, []);

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSpeakers = speakers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(speakers.length / itemsPerPage);

  return (
    <div>
      <div id='speakerkeynote' className="speakerscontainer">
        {/* <div className="SpeakerBox"> */}
          <div className="speakercontainertext">
            <div className="Speakerboxtext">
              <FaMicrophone className='microponeicon'/>
              <h2>Keynote Speakers</h2>
            </div>
            <div className="Speakerparagraph">
              <p>Distinguished experts and thought leaders presenting cutting-edge research</p>
            </div>
          </div>

          <div className="Speakerinfocontainer">
            {currentSpeakers.map((sp, index) => (
              <div className="SpeakerInfo" key={index}>
                <div className="Speakerboximage">
          
                  <img src={image}  />
                </div>
                <div className="SpeakerName">
                  <h2>{sp.name}</h2>
                  
                  <p>{sp.role}</p>
                </div>
                
                <div className="country">
                  <p>{sp.title}</p>
                </div>
                
              </div>
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "activePage" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default KeynoteSpeakers;
