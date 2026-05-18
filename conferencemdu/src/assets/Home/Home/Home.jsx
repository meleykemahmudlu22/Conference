import React from 'react'
import Header from "../../../assets/components/Header/Header";
import SectionOne from "../../../../src/assets/components/SectionOne/SectionOne";
import SectionTwo from '../../../assets/components/sectiontwo/SectionTwo'
import  Sectiontree  from "../../../assets/components/sectiontree/Section";
import  SectionFour  from "../../../assets/components/sectionfour/SectionFour";
import SectionFive from "../../../assets/components/sectionfive/SectionFive";
import SectionVenue from "../../../assets/components/sectionvenue/SectionVenue";
import SectionDates from "../../../assets/components/sectiondate/SectionDates";
import Commite from "../../../assets/components/organizing commitee/Commite";
import SubmissionGuidelines from "../../../assets/components/Submission Guidelines/SubmissionGuidelines";
import Deadlines from "../../../assets/components/Deadlines/Deadlines";
import ConferenceParticipants from "../../../assets/components/Conference Participants/ConferenceParticipants";
import KeynoteSpeakers from "../../../assets/components/Keynote Speakers/KeynoteSpeakers";
import Footer from '../../components/footer/Footer';



function Home() {
    return (
        <>
            <Header/>                           
            <SectionOne />
            <SectionFour/>
            <Sectiontree/>
              {/* <SectionTwo /> */}
             
             < SectionFive />
             < SectionVenue />
             < SectionDates />
             <Commite/>
             < SubmissionGuidelines/>
             < Deadlines />
             < ConferenceParticipants />
             < KeynoteSpeakers />
             <Footer/>
        </>
    )
}

export default Home
