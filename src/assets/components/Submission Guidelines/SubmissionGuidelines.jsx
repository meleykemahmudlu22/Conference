import React from 'react'
import { FaEdit, FaDownload } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { LuTableOfContents } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import "./Submission.css"

function SubmissionGuidelines() {
  return (
    <div>
      <div id='guidelines' className="submissioncontainer">
        <div className="GuidelinesBoxText">
          <div className="texticonguidelines">
            <FaEdit className='editiconse'/>
            <h2>Submission Guidelines</h2>
          </div>
          <p>Please follow these guidelines for paper and abstract submissions</p>
        </div>
        <div className="GuidelinesBox">
          <div className="ImportantInformation">
            <div className="important">
              <FaCircleInfo/>
              <h2>Important Information</h2>
            </div>
            <div className="information">
              <p>Papers must be in English and correspond to the conference topics.</p>
              <p>Papers must contain original research information of scientific and/or practical value.</p>
            </div>
            <div className="deadline">
              <h4>Abstract Deadline: April 5, 2026</h4>
            </div>
          </div>

          <div className="Requirements">
            <div className="FormatRequirements">
              <h2><IoDocumentText/> Format Requirements</h2>
              <nav>
                <ul>
                  <li>Format: DOCX (Word document)</li>
                  <li>Font: Times New Roman, 12pt</li>
                  <li>Margins: 2cm all sides</li>
                  <li>Line spacing: Single spaced</li>
                  <li>Page format: A4</li>
                  <li>Paragraphs: Justified (straight-edged)</li>
                </ul>
              </nav>
            </div>
            <div className="ContentRequirements">
              <h2><LuTableOfContents/> Submission Requirements</h2>
              <nav>
                <ul>
                  <li>Abstract Template: Follow the official MSU-DEU template</li>
                  <li>Language: Official conference language is English</li>
                  <li>Authors: Name, Title, Institution & Email must be included</li>
                  <li>Keywords: 3 - 5 relevant research keywords</li>
                  <li>Length: Maximum 300 - 500 words for abstracts</li>
                  <li>File Naming: AuthorName_Abstract.docx</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="note">
            <p><CgDanger/></p>
            <p>Note: Abstracts that do not meet these formatting requirements will be returned. The organizing committee reserves the right to edit abstracts for clarity or correctness of English but will consult the author if any significant changes are needed.</p>
          </div>
          <div className="downloadbutton">
            <a 
              href="/MSU-DEU_International_Scientific_Conference_Abstract_Template.docx" 
              download="MSU-DEU_International_Scientific_Conference_Abstract_Template.docx"
              className="download-template-link"
            >
              <FaDownload /> Download Abstract Template (.docx)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionGuidelines;
