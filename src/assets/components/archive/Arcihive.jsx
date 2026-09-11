import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Swal from "sweetalert2";
import { FaFilePdf, FaDownload, FaLayerGroup, FaBookOpen, FaCheckCircle, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import "./archive.css";

function ConferenceMaterial() {
  const [downloadingAll, setDownloadingAll] = useState(false);
  const [downloadingId, setDownloadingId] = useState(null);

  const volumes = [
    {
      id: 1,
      volume: "Volume 1",
      title: "Proceedings Volume 1",
      subtitle: "Language, Literature & Linguistic Studies",
      description: "Collection of scientific papers examining contemporary language developments, linguistics, comparative literary analysis, and cultural discourse.",
      fileName: "Proceedings-of-the-International-Scientific-Conference-Contemporary-Issues-in-Language-Education-Research-and-Sustainability-Volume-1.pdf",
      url: "/archive/Proceedings-of-the-International-Scientific-Conference-Contemporary-Issues-in-Language-Education-Research-and-Sustainability-Volume-1.pdf",
      size: "5.8 MB",
      year: "2026",
      badgeColor: "#06b6d4"
    },
    {
      id: 2,
      volume: "Volume 2",
      title: "Proceedings Volume 2",
      subtitle: "Educational Innovations & Teaching Methodologies",
      description: "Academic articles focusing on modern pedagogy, educational technologies, multimodal language instruction, and international learning frameworks.",
      fileName: "Proceedings-of-the-International-Scientific-Conference-Contemporary-Issues-in-Language-Education-Research-and-Sustainability-Volume-2.pdf",
      url: "/archive/Proceedings-of-the-International-Scientific-Conference-Contemporary-Issues-in-Language-Education-Research-and-Sustainability-Volume-2.pdf",
      size: "7.8 MB",
      year: "2026",
      badgeColor: "#a855f7"
    },
    {
      id: 3,
      volume: "Volume 3",
      title: "Proceedings Volume 3",
      subtitle: "Research, Technology & Sustainable Development",
      description: "Explorations into digital transformation, interdisciplinary research paradigms, sustainable development goals, and societal innovations.",
      fileName: "Proceedings-of-the-International-Scientific-Conference-Contemporary-Issues-in-Language-Education-Research-and-Sustainability-Volume-3.pdf",
      url: "/archive/Proceedings-of-the-International-Scientific-Conference-Contemporary-Issues-in-Language-Education-Research-and-Sustainability-Volume-3.pdf",
      size: "15.7 MB",
      year: "2026",
      badgeColor: "#ec4899"
    }
  ];

  const handleDownloadSingle = (vol) => {
    setDownloadingId(vol.id);

    const link = document.createElement("a");
    link.href = vol.url;
    link.download = vol.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingId(null);
    }, 1500);

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `${vol.volume} Download Started`,
      text: `${vol.title} (${vol.size}) has been sent to your browser.`,
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      background: "#1b143a",
      color: "#ffffff",
      iconColor: "#06b6d4"
    });
  };

  const handleDownloadAll = async () => {
    if (downloadingAll) return;
    setDownloadingAll(true);

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "info",
      title: "Downloading All 3 Volumes",
      text: "Starting sequential download of all 3 conference proceedings volumes...",
      showConfirmButton: false,
      timer: 4500,
      timerProgressBar: true,
      background: "#1b143a",
      color: "#ffffff",
      iconColor: "#38bdf8"
    });

    for (let i = 0; i < volumes.length; i++) {
      const vol = volumes[i];
      await new Promise((resolve) => setTimeout(resolve, 800));
      const link = document.createElement("a");
      link.href = vol.url;
      link.download = vol.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    setTimeout(() => {
      setDownloadingAll(false);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "All Volumes Downloaded",
        text: "All 3 volumes (29.3 MB) have been downloaded successfully.",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        background: "#1b143a",
        color: "#ffffff",
        iconColor: "#10b981"
      });
    }, 1200);
  };

  return (
    <>
      <Header />
      <main className="archive-page">
        <div className="archive-container">
          {/* Header & Intro Section */}
          <header className="archive-hero">
            <div className="archive-badge">
              <FaBookOpen className="badge-icon" /> Official Conference Archive
            </div>
            <h1 className="archive-title">
              CILERS 2026 Conference Proceedings
            </h1>
            <p className="archive-subtitle">
              “Contemporary Issues in Language, Education, Research, and Sustainability”
            </p>
            <p className="archive-desc">
              Explore and download the official multi-volume scientific publications from the
              International Scientific Conference organized jointly by Mingachevir State University
              and Dokuz Eylül University.
            </p>

            {/* Quick Stats Bar */}
            <div className="archive-stats">
              <div className="stat-pill">
                <FaLayerGroup /> 3 Full Volumes
              </div>
              <div className="stat-pill">
                <FaCalendarAlt /> May 18–19, 2026
              </div>
              <div className="stat-pill">
                <FaUniversity /> MSU & DEU
              </div>
              <div className="stat-pill">
                <FaCheckCircle /> Peer-Reviewed
              </div>
            </div>

            {/* Primary Action Button: Download All */}
            <div className="archive-actions">
              <button
                onClick={handleDownloadAll}
                className="btn-download-all"
                disabled={downloadingAll}
              >
                <FaDownload className="btn-icon" />
                <span>
                  {downloadingAll ? "Preparing Downloads..." : "Download Complete Collection"}
                </span>
                <span className="btn-pill">All 3 Volumes · 29.3 MB</span>
              </button>
            </div>
          </header>

          {/* Individual Volumes Grid */}
          <section className="volumes-grid" aria-label="Conference Proceedings Volumes">
            {volumes.map((vol) => (
              <article className="volume-card" key={vol.id}>
                <div className="card-top">
                  <div className="volume-header-pill">
                    <span
                      className="vol-tag"
                      style={{
                        backgroundColor: `${vol.badgeColor}20`,
                        color: vol.badgeColor,
                        borderColor: `${vol.badgeColor}40`
                      }}
                    >
                      {vol.volume}
                    </span>
                    <span className="file-size-tag">PDF · {vol.size}</span>
                  </div>

                  <div className="pdf-visual">
                    <div
                      className="pdf-icon-wrapper"
                      style={{
                        background: `linear-gradient(135deg, ${vol.badgeColor}25, rgba(255,255,255,0.05))`
                      }}
                    >
                      <FaFilePdf className="pdf-icon" style={{ color: vol.badgeColor }} />
                    </div>
                  </div>

                  <h2 className="volume-card-title">{vol.title}</h2>
                  <h3 className="volume-card-subtitle">{vol.subtitle}</h3>
                  <p className="volume-card-desc">{vol.description}</p>
                </div>

                <div className="card-bottom">
                  <div className="card-meta">
                    <span>Format: Full-Text PDF</span>
                    <span>Year: {vol.year}</span>
                  </div>

                  <button
                    onClick={() => handleDownloadSingle(vol)}
                    className="btn-download-single"
                    disabled={downloadingId === vol.id}
                  >
                    <FaDownload className="icon-down" />
                    <span>
                      {downloadingId === vol.id ? "Downloading..." : `Download ${vol.volume}`}
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </section>

          {/* Academic Notice / Citation Banner */}
          <footer className="archive-notice">
            <div className="notice-inner">
              <FaCheckCircle className="notice-icon" />
              <p>
                <strong>Academic Open Access Notice:</strong> All published materials in these
                proceedings are made publicly accessible for scholarly, educational, and scientific
                research purposes under institutional open-access dissemination.
              </p>
            </div>
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ConferenceMaterial;
