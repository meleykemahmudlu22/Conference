import React, { useState } from "react";
import axios from "axios";
import { SlLocationPin } from "react-icons/sl";
import image from "../images/MDUlogo (2).png";
import Swal from "sweetalert2";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import "./one.css";

function SectionOne() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title: "Xəta!",
        text: "Fayl yükləmək üçün əvvəlcə qeydiyyatdan keçin!",
        icon: "error",
        confirmButtonText: "Qeydiyyata keç"
      }).then(() => {
        window.location.href = "/register";
      });
      return;
    }

    if (!file) {
      Swal.fire({
        title: "Xəta!",
        text: "Fayl seçilməyib!",
        icon: "error",
        confirmButtonText: "Bağla"
      });
      return;
    }

    const formData = new FormData();
    formData.append("abstract", file);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/abstract/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      Swal.fire({
        title: " Uğurlu!",
        text: data.message,
        icon: "success",
        confirmButtonText: "Əla!"
      });

      setFile(null); 
    } catch (err) {
      Swal.fire({
        title: "Xəta!",
        text: "Login olunmayıb və ya xəta baş verdi",
        icon: "error",
        confirmButtonText: "Bağla"
      });
    }
  };
  return (
    <div>
      <div className="onesection">
        <div className="OneText">
          <div className="textimg">
            <img src={image} alt="" />
            <h2>INTERNATIONAL SCIENTIFIC CONFERENCE</h2>
            <h2 className="dateAnim">MAY 18-19, 2026</h2>
          </div>
          <div className="TextLogo">
            <img src={image} alt="" />
            <img
              src="https://copilot.microsoft.com/th/id/BCO.838217de-d8fa-4468-a23d-f7955e1283de.png"
              alt=""
            />
          </div>
          <div className="Textend">
            <h2>
              "CONTEMPORARY ISSUES IN LANGUAGE, EDUCATION, AND RESEARCH"
            </h2>
           
          </div>
        </div>
        <div className="download">
         
            <form onSubmit={handleUpload} className="dowunloadform">
              <div className="uploadBtn">
                <label htmlFor="">
                  <FaFileAlt />
                   Choose File
                    <input
                type="file"
                onChange={(e) => {
                  console.log("Seçilən fayl:", e.target.files[0]); 
                  setFile(e.target.files[0]);
                }}
              />
                </label>
               
              </div>
              <div className="filebtn">
                   <button
              onClick={() =>
                (window.location.href =
                  "http://localhost:5000/api/template/download")
              }
            >
                 <FaDownload />
              Şablonu Yüklə
           
            </button>
              <button type="submit"className="btnUpload">   <FaDownload />Xülasə Yüklə</button>
              {/* <p>{message}</p> */}
              </div>
             
             
            </form>
        </div>
        <div className="rightbottumtext">
          <p>EMAIL: CIER.EDITORIAL@MDU.EDU.AZ</p>
          <p>TEL: (+994 55) 837-01-38 / (+994 50) 836-93-66</p>
        </div>
        <div className="leftbottumtext">
          <SlLocationPin />
          <p>Mingachevir, Heydar Aliyev Center</p>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
