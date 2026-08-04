import React, { useState, useRef } from "react";
import axios from "axios";
import images from "../images/cilers logo.png";
import image from "../images/MDUlogo (2).png";
import picture from "../images/dokuz eylul.png";
import Swal from "sweetalert2";
import { FaUpload, FaDownload } from "react-icons/fa";
import { useAuth } from "@clerk/clerk-react";
import "./one.css";

function SectionOne() {
  const [file, setFile] = useState(null);
  const { getToken, isSignedIn } = useAuth();
  const fileInputRef = useRef(null);

  const uploadFile = async (selectedFile) => {
    const token = await getToken();

    const formData = new FormData();
    formData.append("abstract", selectedFile);

    // Show uploading indicator
    Swal.fire({
      title: "Uploading...",
      text: "Sending file to server, please wait.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const { data } = await axios.post(
        "/api/abstract/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        title: "🎉 Success!",
        text: "Abstract successfully uploaded!",
        icon: "success",
        confirmButtonText: "Great!"
      });

      setFile(null); 
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "An error occurred while uploading the file",
        icon: "error",
        confirmButtonText: "Close"
      });
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      Swal.fire({
        title: "Confirm File",
        text: `Do you want to upload the abstract "${selectedFile.name}"?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Upload",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#7c3aed"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await uploadFile(selectedFile);
        } else {
          setFile(null);
        }
      });
    }
  };

  const triggerFileInput = () => {
    if (!isSignedIn) {
      Swal.fire({
        title: "Authentication Required",
        text: "Please sign in or register first to submit an abstract.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sign In / Register",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3B1E8C"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/register";
        }
      });
      return;
    }
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="onesection" id="home">
        <div className="OneText">
          <div className="textimg">
            <img src={images} alt="CILERS Logo" />
            <h2>INTERNATIONAL SCIENTIFIC CONFERENCE</h2>
            <h2 className="dateAnim">MAY 18-19, 2026</h2>
          </div>
          <div className="TextLogo">
            <img src={image} alt="MDU Logo" />
            <img src={picture} alt="Dokuz Eylul Logo" />
          </div>
          <div className="Textend">
            <div className="textendone">
              <h2>“CONTEMPORARY ISSUES IN LANGUAGE, EDUCATION, RESEARCH, AND SUSTAINABILITY”</h2>
            </div>
            
            
            <div className="sectionbutton">
              <button onClick={triggerFileInput} className="cta-btn submit-cta">
                <FaUpload /> Submit Abstract
              </button>
            </div>

            {/* Hidden native file input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              style={{ display: "none" }} 
              accept=".pdf,.doc,.docx" 
            />

            <a 
              href="/MSU-DEU_International_Scientific_Conference_Abstract_Template.docx" 
              download="MSU-DEU_International_Scientific_Conference_Abstract_Template.docx" 
              className="download-template-link"
            >
              <FaDownload /> Download Abstract Template
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
