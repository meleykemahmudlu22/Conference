import React, { useState } from "react";
import axios from "axios";
import { SlLocationPin } from "react-icons/sl";
import images from "../images/cilers logo.png";
import image from "../images/MDUlogo (2).png";
import picture from "../images/dokuz eylul.png";
import Swal from "sweetalert2";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { useAuth } from "@clerk/clerk-react";
import "./one.css";

function SectionOne() {
  const [file, setFile] = useState(null);
  const { getToken, isSignedIn } = useAuth();

 const handleUpload = async (e) => {
  e.preventDefault();

  if (!isSignedIn) {
    Swal.fire({
      title: "Xəta!",
      text: "Fayl yükləmək üçün əvvəlcə qeydiyyatdan keçin!",
      icon: "error",
      confirmButtonText: "Qeydiyyata keç"
    }).then(() => {
      window.location.href = "/register"; // 🔹 yönləndirmə
    });
    return;
  }

  const token = await getToken();

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
      title: "🎉 Uğurlu!",
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
            <img src={images} alt="" />
            <h2>INTERNATIONAL SCIENTIFIC CONFERENCE</h2>
            <h2 className="dateAnim">MAY 18-19, 2026</h2>
          </div>
          <div className="TextLogo">
            <img src={image} alt="" />
            <img
              src={picture}
              alt=""
            />
          </div>
          <div className="Textend">
            <div className="textendone">
              <h2>"CONTEMPORARY ISSUES IN LANGUAGE, EDUCATION, AND RESEARCH"</h2>
             
            </div>
             <hr />
            <div className="textendone">
              <h2>"CONTEMPORARY ISSUES IN LANGUAGE, EDUCATION, AND RESEARCH"</h2>
            </div>
           
           
          </div>
        </div>
        {/* <div className="download">
         
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
                  "/api/template/download")
              }
            >
                 <FaDownload />
              Şablonu Yüklə
           
            </button>
              <button type="submit"className="btnUpload">   <FaDownload />Xülasə Yüklə</button>
             
              </div>
             
             
            </form>
        </div> */}
        {/* <div className="bottomRow">
           <div className="rightbottumtext">
          <p>EMAIL: CIER.EDITORIAL@MDU.EDU.AZ</p>
          <p>TEL: (+994 55) 837-01-38 / (+994 50) 836-93-66</p>
        </div>
        <div className="leftbottumtext">
          <SlLocationPin />
          <p>Mingachevir, Heydar Aliyev Center</p>
        </div>
        </div> */}
       
      </div>
    </div>
  );
}

export default SectionOne;
