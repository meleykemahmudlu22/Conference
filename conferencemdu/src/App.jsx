import Header from "./assets/components/Header/Header";
import SectionDates from "./assets/components/sectiondate/SectionDates";
import SectionFive from "./assets/components/sectionfive/SectionFive";
import { SectionFour } from "./assets/components/sectionfour/SectionFour";
import { SectionOne } from "./assets/components/SectionOne/SectionOne";
import { Sectiontree } from "./assets/components/sectiontree/Section";
import { SectionTwo } from "./assets/components/sectiontwo/SectionTwo";
import SectionVenue from "./assets/components/sectionvenue/SectionVenue";


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
    </>

  )
}
export default App;