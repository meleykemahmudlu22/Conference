import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import "./tree.css"

function Sectiontree  ()  {
  return (
    <div>
        <div className="sectiontrre">
            <div className="Leftsection">
                <div className="Lefttext">
                    <p>About the Conference</p>
                <h2>Advancing International Academic Cooperation</h2>
                <hr/>
                <p>This conference serves as an important scientific platform for discussing current academic issues in higher education and strengthening international cooperation in language teaching, applied linguistics, educational technologies, academic writing, and research methodology.</p>
                <p>The conference aims to develop academic cooperation between Mingachevir State University and Dokuz Eylül University, one of the prestigious higher education institutions of the Republic of Türkiye.</p>
                <p>This conference serves as an important scientific platform for discussing current academic issues in higher education and strengthening international cooperation in language teaching, applied linguistics, educational technologies, academic writing, and research methodology.</p>
                

                </div>
                <div className="LeftCart">
                    <div className="lextcarttext">
                        <div className="lefttexticon">
                            <FaRegHandshake />
                        </div>
                        <div className="lextboxtext">
                             <p>Who Can Participate</p>
                      <p>Academic staff, doctoral students, dissertation candidates, master's students, young researchers, and undergraduate students</p>
                        </div>
                     
                    </div>
                    <div className="lextcarttext">
                        <div className="lefttexticon">
                         <FaGraduationCap />
                        </div>
                        <div className="lextboxtext">
                             <p>Who Can Participate</p>
                      <p>Academic staff, doctoral students, dissertation candidates, master's students, young researchers, and undergraduate students</p>
                        </div>
                     
                    </div>
                    <div className="lextcarttext">
                        <div className="lefttexticon">
                           <ImBooks />
                        </div>
                        <div className="lextboxtext">
                             <p>Who Can Participate</p>
                      <p>Academic staff, doctoral students, dissertation candidates, master's students, young researchers, and undergraduate students</p>
                        </div>
                     
                    </div>
                   
                
                </div>
                
            </div>
            <div className="righttext">
  <div className="rightbox">

    <div className="rightboxtext">
      <div className="righttextone">Conference</div>
      <div className="righttexttwo">
        CIER 2026 — Contemporary Issues in Language, Education, and Research
      </div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Dates</div>
      <div className="righttexttwo">May 18–19, 2026</div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Venue</div>
      <div className="righttexttwo">
        Mingachevir, Haydar Aliyev Center, Azerbaijan
      </div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Language</div>
      <div className="righttexttwo">English</div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Deadline</div>
      <div className="righttexttwo">May 1, 2026</div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Email</div>
      <div className="righttexttwo">cier.editorial@mdu.edu.az</div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Organizer</div>
      <div className="righttexttwo">
        Dept. of Foreign Languages, Mingachevir State University
      </div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Partner</div>
      <div className="righttexttwo">
        Dokuz Eylül University, Republic of Türkiye
      </div>
    </div>

    <div className="divider"></div>

    <div className="rightboxtext">
      <div className="righttextone">Plagiarism</div>
      <div className="righttexttwo highlight">
        Report required · Max 25% similarity index
      </div>
    </div>

  </div>
</div>
        </div>
    </div>
  )
}

export default Sectiontree