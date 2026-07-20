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


  const fallbackSpeakers = [
    { name: "Prof. Dr. Sarah Jenkins", role: "Professor of Applied Linguistics", title: "University of Oxford, UK" },
    { name: "Assoc. Prof. David Miller", role: "Director of Educational Research", title: "Harvard University, USA" },
    { name: "Dr. Elena Rostova", role: "Senior Researcher in Cognitive Science", title: "Sorbonne University, France" },
    { name: "Dr. John Harrison", role: "Dean of Language Studies", title: "University of Melbourne, Australia" },
    { name: "Prof. Dr. Michael Chang", role: "Lead Investigator in Modern Languages", title: "National University of Singapore" },
    { name: "Assoc. Prof. Lisa Vance", role: "Educational Psychology Specialist", title: "University of Toronto, Canada" },
    { name: "Dr. Yusuf Al-Fayed", role: "Lecturer in English Literature", title: "American University of Cairo, Egypt" },
    { name: "Dr. Anna Lindstrom", role: "Researcher in Theoretical Linguistics", title: "Uppsala University, Sweden" }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSpeakers = speakers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(speakers.length / itemsPerPage);

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        const { data } = await axios.get("https://6a1ad52fbc2f94475492b2ec.mockapi.io/parabolasite");
        const processed = data.map((sp, idx) => {
          const isInvalidRole = !sp.role || sp.role.includes("Invalid faker method");
          const isInvalidTitle = !sp.title || sp.title.includes("Invalid faker method");
          const fallback = fallbackSpeakers[idx % fallbackSpeakers.length];
          return {
            ...sp,
            role: isInvalidRole ? fallback.role : sp.role,
            title: isInvalidTitle ? fallback.title : sp.title,
            name: (sp.name && !sp.name.includes("Invalid")) ? sp.name : fallback.name
          };
        });
        setSpeakers(processed);
      } catch (error) {
        console.error("Could not fetch speaker data:", error);
        setSpeakers(fallbackSpeakers);
      }
    }
    fetchSpeakers();
  }, []);

 
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "<" || e.key === ",") {
        setCurrentPage(prev => Math.max(1, prev - 1));
      } else if (e.key === "ArrowRight" || e.key === ">" || e.key === ".") {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalPages]);

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
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="page-nav-btn"
              title="Previous Page (Left Arrow / <)"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "activePage" : ""}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="page-nav-btn"
              title="Next Page (Right Arrow / >)"
            >
              &gt;
            </button>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default KeynoteSpeakers;
