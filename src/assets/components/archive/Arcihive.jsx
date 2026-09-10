
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import "./archive.css";

function ConferenceMaterial() {
  return (
    <>
   <Header/>
     <div className="material-box">

      <div className="material-header">
        <div className="title">
          <div className="pdf-icon">PDF</div>

          <h2>CILERS Conference Proceedings 2026</h2>
        </div>
      </div>

      <div className="upload-section">

        <div className="upload-icon">↓</div>

        

        <a
          href="/CIER-2026-Conference-Material.pdf"
          download
          className="download-button"
        >
          Download PDF
        </a>

        

      </div>

    </div>
    <Footer/>
    </>
   
  );
}

export default ConferenceMaterial;

