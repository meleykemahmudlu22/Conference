import React, { useEffect, useState } from 'react';
import { FaMicrophone } from "react-icons/fa";
import "./KeynoteSpeakers.css";

import anarEminovImg from "../../images/anar_eminov.png";
import mahireHuseynovaImg from "../../images/mahire_huseynova.jpg";
import recepOztopImg from "../../images/recep_oztop.png";
import afatAbbasovaImg from "../../images/afat_abbasova.jpg";
import parvinKarimzadeImg from "../../images/parvin_karimzade.png";
import elnaraAkimovaImg from "../../images/elnara_akimova.png";
import azerTuranImg from "../../images/azer_turan.png";
import gunayAkbarovaImg from "../../images/gunay_akbarova.png";
import muratAtaImg from "../../images/murat_ata.png";
import mayilIsmayilovImg from "../../images/mayil_ismayilov.png";
import bahramMammadovImg from "../../images/bahram_mammadov.jpg";
import vusalaAsadovaImg from "../../images/vusala_asadova.jpg";
import deputyDeanImg from "../../images/deputy_dean.png";
import vusalaAghabayliImg from "../../images/vusala_aghabayli.jpg";
import aytanAllahverdiyevaImg from "../../images/aytan_allahverdiyeva.png";

function KeynoteSpeakers() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const speakersList = [
    {
      name: "Anar EMINOV",
      role: "Keynote Speaker",
      title: "Rector of Mingachevir State University",
      image: anarEminovImg
    },
    {
      name: "Mahire HUSEYNOVA",
      role: "Keynote Speaker",
      title: "Vice-Rector for International Relations at Azerbaijan State Pedagogical University",
      image: mahireHuseynovaImg
    },
    {
      name: "Recep OZTOP",
      role: "Keynote Speaker",
      title: "Consul General of the Republic of Türkiye",
      image: recepOztopImg
    },
    {
      name: "Afat ABBASOVA",
      role: "Keynote Speaker",
      title: "Director of the Presidential Library of the Administrative Department of the President of the Republic of Azerbaijan",
      image: afatAbbasovaImg
    },
    {
      name: "Parvin KARIMZADE",
      role: "Keynote Speaker",
      title: "Member of the Milli Majlis (National Assembly) of the Republic of Azerbaijan",
      image: parvinKarimzadeImg
    },
    {
      name: "Elnara AKIMOVA",
      role: "Keynote Speaker",
      title: "Member of the Milli Majlis (National Assembly) of the Republic of Azerbaijan",
      image: elnaraAkimovaImg
    },
    {
      name: "Azer TURAN",
      role: "Keynote Speaker",
      title: "Editor-in-Chief of “Ədəbiyyat” Newspaper",
      image: azerTuranImg
    },
    {
      name: "Gunay AKBAROVA",
      role: "Keynote Speaker",
      title: "Secretary of the Public Council under the Ministry of Science and Education of Azerbaijan",
      image: gunayAkbarovaImg
    },
    {
      name: "Murat ATA",
      role: "Keynote Speaker",
      title: "Dokuz Eylul University (Turkiye)",
      image: muratAtaImg
    },
    {
      name: "Mayıl ISMAYILOV",
      role: "Keynote Speaker",
      title: "Associate Professor, Mingachevir State University",
      image: mayilIsmayilovImg
    },
    {
      name: "Bahram MAMMADOV",
      role: "Keynote Speaker",
      title: "PhD in Philology, Azerbaijan State Pedagogical University",
      image: bahramMammadovImg
    },
    {
      name: "Vusala ASADOVA",
      role: "Keynote Speaker",
      title: "Associate Professor, Azerbaijan State Pedagogical University, Baku Eurasian University",
      image: vusalaAsadovaImg
    },
    {
      name: "Deputy Dean",
      role: "Keynote Speaker",
      title: "Deputy Dean for Academic Affairs, Azerbaijan State Pedagogical University",
      image: deputyDeanImg
    },
    {
      name: "Vusala AGHABAYLI",
      role: "Keynote Speaker",
      title: "Head of Department, Professor, Azerbaijan University of Languages",
      image: vusalaAghabayliImg
    },
    {
      name: "Aytan ALLAHVERDIYEVA",
      role: "Keynote Speaker",
      title: "Associate Professor, Azerbaijan University of Languages",
      image: aytanAllahverdiyevaImg
    }
  ];

  const totalPages = Math.ceil(speakersList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSpeakers = speakersList.slice(indexOfFirstItem, indexOfLastItem);

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
                <img src={sp.image} alt={sp.name} loading="lazy" />
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

        {totalPages > 1 && (
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
        )}
      </div>
    </div>
  );
}

export default KeynoteSpeakers;
