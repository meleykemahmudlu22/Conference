import React from 'react';
import "./five.css";

import natavanImg from "../../images/natavan_namazova.png";
import jeyhunImg from "../../images/jeyhun_mahmudov.jpg";
import ramilImg from "../../images/ramil_hasanov.png";
import elvinImg from "../../images/elvin_mammadzade.jpg";
import instructorDeuImg from "../../images/instructor_deu.png";

function SectionFive() {
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
    }
  ];

  return (
    <div className="organizescontainer">
      <div className="OrganizeseCart">
        <p>Organizing Committee</p>
        <h2>Organizers & Contact</h2>
        <p>Reach out to our organizing committee for any inquiries</p>
        <hr />
      </div>

      <div className="cartboxcommon">
        {organizers.map((org, idx) => (
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
    </div>
  );
}

export default SectionFive;
