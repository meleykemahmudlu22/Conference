import Deadlines from "./assets/components/Deadlines/Deadlines";
import Header from "./assets/components/Header/Header";
import Commite from "./assets/components/organizing commitee/Commite";
import SectionDates from "./assets/components/sectiondate/SectionDates";
import SectionFive from "./assets/components/sectionfive/SectionFive";
import { SectionFour } from "./assets/components/sectionfour/SectionFour";
import { SectionOne } from "./assets/components/SectionOne/SectionOne";
import { Sectiontree } from "./assets/components/sectiontree/Section";
import { SectionTwo } from "./assets/components/sectiontwo/SectionTwo";
import SectionVenue from "./assets/components/sectionvenue/SectionVenue";
import SubmissionGuidelines from "./assets/components/Submission Guidelines/SubmissionGuidelines";


function App(){
  return(
    <>
     <Header/>
    <SectionOne/>
    <SectionTwo/>
    <Sectiontree/>
    <SectionFour/>
    <SectionFive/>
    <SectionVenue/>
    <SectionDates/>
    <Commite/>
    <SubmissionGuidelines/>
    <Deadlines/>
    </>

  )
}
export default App;