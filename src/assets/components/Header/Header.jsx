import image from "../images/cilers logo.png"
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "./header.css"
import { useEffect, useState } from "react";

function Header (){

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

    return(
        <>
     <div className="HeaderContainer">
        <div className="HeaderLogo">
          <h2>CILERS||2026</h2>
            {/* <img src={image} alt="" /> */}
        </div>
       <div className="headerbtnnav">
         <div className="HeaderNav">
            <nav>
                <ul>
                <RouterLink to="/" className="navlink">
                  Home
                </RouterLink>
                  
                      <li className="dropdown">
        Conference

        <div className="dropdownMenu">
          <ScrollLink to="speakerkeynote" smooth={true} duration={300}>
            Keynote Speakers
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} duration={200}>
            Commite
          </ScrollLink>

          <ScrollLink to="conferencevenu" smooth={true} duration={200}>
            Venue
          </ScrollLink>
          <ScrollLink to="topics" smooth={true} duration={200}>
                Topics
          </ScrollLink>
        </div>
      </li>
                    <li className="dropdown">Submission
                         <div className="dropdownMenu">
          <ScrollLink to=" Guidlines" smooth={true} duration={200}>
        Guidlines
          </ScrollLink>

          <ScrollLink to="Deadlines" smooth={true} duration={200}>
            Deadlines
          </ScrollLink>

          
        </div>
                    </li>
                    <ScrollLink to="participant" smooth={true} duraction={200} >Participate</ScrollLink>
                    <ScrollLink to="contact" smooth={true} duraction={200} >Contact</ScrollLink>
                    
                    
                        
                </ul>
            </nav>
        </div>
       
        <div className="HeaderBtn">
          <SignedOut>
            <RouterLink to="/login">   <button>Login</button></RouterLink>
            <RouterLink to="/register">  <button>Register</button></RouterLink>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
       </div>
       {
        showButton && (
          <div className="scrollTop" onClick={scrollTop}>
            <FaArrowUp />
          </div>
        )
      }
     </div>
        </>
    )
}
export default Header;