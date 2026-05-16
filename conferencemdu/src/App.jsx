// import ConferenceParticipants from "./assets/components/Conference Participants/ConferenceParticipants";
// import Deadlines from "./assets/components/Deadlines/Deadlines";
// import Header from "./assets/components/Header/Header";
// import KeynoteSpeakers from "./assets/components/Keynote Speakers/KeynoteSpeakers";
// import Commite from "./assets/components/organizing commitee/Commite";
// import SectionDates from "./assets/components/sectiondate/SectionDates";
// import SectionFive from "./assets/components/sectionfive/SectionFive";
// import { SectionFour } from "./assets/components/sectionfour/SectionFour";
// import { SectionOne } from "./assets/components/SectionOne/SectionOne";
// import { Sectiontree } from "./assets/components/sectiontree/Section";
// import { SectionTwo } from "./assets/components/sectiontwo/SectionTwo";
// import SectionVenue from "./assets/components/sectionvenue/SectionVenue";
// import SubmissionGuidelines from "./assets/components/Submission Guidelines/SubmissionGuidelines";
// import Register from "./assets/pages/Register/Register";
import {  Routes, Route } from "react-router-dom";
import Home from "./assets/Home/Home/Home";
import Register from "./assets/pages/Register/Register";


function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
   
    
    </>

  )
}
export default App;