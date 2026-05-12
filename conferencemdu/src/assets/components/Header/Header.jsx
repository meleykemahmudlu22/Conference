import "./header.css"
function Header (){
    return(
        <>
     <div className="HeaderContainer">
        <div className="HeaderLogo">
            <img src="https://logo.com/image-cdn/images/kts928pd/production/79922eaa49ddfcff1aa917be52e53d02a8abeb7d-365x374.png?w=1080&q=72&fm=webp" alt="" />
        </div>
       <div className="headerbtnnav">
         <div className="HeaderNav">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Conference</li>
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