import React, { useState } from 'react';
import "./five.css";

import natavanImg from "../../images/natavan_namazova.png";
import jeyhunImg from "../../images/jeyhun_mahmudov.jpg";
import ramilImg from "../../images/ramil_hasanov.png";
import elvinImg from "../../images/elvin_mammadzade.jpg";
import instructorDeuImg from "../../images/instructor_deu.png";
import khayalaImg from "../../images/khayala_abdullayeva.png";
import gulshanImg from "../../images/gulshan_nasirova.jpg";
import gurbanImg from "../../images/gurban_gurbanzada.png";
import elnurImg from "../../images/elnur_khalilov.jpg";
import elchinImg from "../../images/elchin_taghiyev.jpg";

function SectionFive() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const organizers = [
    {
      name: "Assoc. Prof. Natavan Namazova",
      role: "Vice-Rector for Science and Innovation",
      institution: "Mingachevir State University",
      image: natavanImg
    },
    {
      name: "Assoc. Prof. Jeyhun Mahmudov",
      role: "Advisor on Organization and Management of Educational Process",
      institution: "Mingachevir State University",
      image: jeyhunImg
    },
    {
      name: "Ramil Hasanov",
      role: "Head of Scientific Research and Innovation Department",
      institution: "Mingachevir State University",
      image: ramilImg
    },
    {
      name: "Elvin Mammadzade",
      role: "Advisor",
      institution: "Mingachevir State University",
      image: elvinImg
    },
    {
      name: "Dokuz Eylül University",
      role: "Instructor at Department of Foreign Languages",
      institution: "Dokuz Eylül University (Türkiye)",
      image: instructorDeuImg
    },
    {
      name: "Khayala Abdullayeva",
      role: "Senior Lecturer at Department of Foreign Languages",
      institution: "Mingachevir State University",
      image: khayalaImg
    },
    {
      name: "Gulshan Nasirova",
      role: "Lecturer at Department of Foreign Languages",
      institution: "Mingachevir State University",
      image: gulshanImg
    },
    {
      name: "Gurban Gurbanzada",
      role: "Deputy Head of Business Relations and Alumni Affairs Dept.",
      institution: "Mingachevir State University",
      image: gurbanImg
    },
    {
      name: "Elnur Khalilov",
      role: "Head of IT and Technical Support Department",
      institution: "Mingachevir State University",
      image: elnurImg
    },
    {
      name: "Elchin Taghiyev",
      role: "Head of Digital Transformation Department",
      institution: "Mingachevir State University",
      image: elchinImg
    }
  ];

  const totalPages = Math.ceil(organizers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrganizers = organizers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="organizescontainer">
      <div className="OrganizeseCart">
        <p>Organizing Committee</p>
        <h2>Organizers & Contact</h2>
        <p>Reach out to our organizing committee for any inquiries</p>
        <hr />
      </div>

      <div className="cartboxcommon">
        {currentOrganizers.map((org, idx) => (
          <div className="OrganizingCartBottom" key={idx}>
            <div className="carttextborder">
              <div className="Cartposter">
                <div className="cartimag">
                  <img src={org.image} alt={org.name} loading="lazy" />
                </div>
                <div className="cartposter">
                  <h2>{org.name}</h2>
                  <h2>{org.role}</h2>
                  <p>{org.institution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="page-nav-btn"
            title="Previous Page"
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
            title="Next Page"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default SectionFive;
