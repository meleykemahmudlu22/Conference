import image from "../images/MDUlogo (2).png"
import {Link} from "react-scroll"
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
                    <li>Home</li>

                     <Link to="conferencevenu" smooth={true} duraction={200} >Conference</Link>
                    
                    <li>Submission</li>
                    <li>Participate</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
       
        <div className="HeaderBtn">
            <button>Login</button>
            <button>Register</button>
        </div>
       </div>
     </div>
        </>
    )
}
export default Header;