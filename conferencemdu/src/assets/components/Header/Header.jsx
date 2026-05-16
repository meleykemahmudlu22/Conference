import image from "../images/MDUlogo (2).png"
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import "./header.css"

function Header (){
    return(
        <>
     <div className="HeaderContainer">
        <div className="HeaderLogo">
            <img src={image} alt="" />
        </div>
       <div className="headerbtnnav">
         <div className="HeaderNav">
            <nav>
                <ul>
                <RouterLink to="/">
                  Home
                </RouterLink>
                  
                     <ScrollLink to="conferencevenu" smooth={true} duraction={200} >Conference</ScrollLink>
                    <li>Submission</li>
                    <li>Participate</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
       
        <div className="HeaderBtn">
         
         
               <RouterLink to="/login">   <button>Login</button></RouterLink>
               <RouterLink to="/register">  <button>Register</button></RouterLink>
          
        </div>
       </div>
     </div>
        </>
    )
}
export default Header;