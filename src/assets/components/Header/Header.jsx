import { Link as RouterLink } from "react-router-dom";
import { FiLogIn, FiUserPlus, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "./header.css"
import { useEffect, useState } from "react";

function Header (){
  const [showButton, setShowButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navigateAndScroll = (targetId) => {
    if (window.location.pathname === "/") {
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        scrollTop();
      }
    } else {
      window.location.href = targetId ? `/#${targetId}` : "/";
    }
  };

  return (
    <>
      <div className="HeaderContainer">
        <div className="HeaderLogo">
          <RouterLink to="/" onClick={(e) => { e.preventDefault(); navigateAndScroll(null); setMenuOpen(false); }} className="logo-link">
            <h2>CILERS||2026</h2>
          </RouterLink>
        </div>

        {/* Hamburger icon for mobile viewports */}
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`headerbtnnav ${menuOpen ? "menu-active" : ""}`}>
          <div className="HeaderNav">
            <nav>
              <ul>
                <li>
                  <a href="/" onClick={(e) => { e.preventDefault(); navigateAndScroll(null); setMenuOpen(false); }} className="navlink">
                    Home
                  </a>
                </li>
                
                <li className="dropdown">
                  <span className="dropdown-trigger">Conference</span>
                  <div className="dropdownMenu">
                    <a href="/#speakerkeynote" onClick={(e) => { e.preventDefault(); navigateAndScroll("speakerkeynote"); setMenuOpen(false); }}>
                      Keynote Speakers
                    </a>
                    <a href="/#contact" onClick={(e) => { e.preventDefault(); navigateAndScroll("contact"); setMenuOpen(false); }}>
                      Committee
                    </a>
                    <a href="/#conferencevenu" onClick={(e) => { e.preventDefault(); navigateAndScroll("conferencevenu"); setMenuOpen(false); }}>
                      Venue
                    </a>
                    <a href="/#topics" onClick={(e) => { e.preventDefault(); navigateAndScroll("topics"); setMenuOpen(false); }}>
                      Topics
                    </a>
                  </div>
                </li>

                <li className="dropdown">
                  <span className="dropdown-trigger">Submission</span>
                  <div className="dropdownMenu">
                    <a href="/#guidelines" onClick={(e) => { e.preventDefault(); navigateAndScroll("guidelines"); setMenuOpen(false); }}>
                      Guidelines
                    </a>
                    <a href="/#Deadlines" onClick={(e) => { e.preventDefault(); navigateAndScroll("Deadlines"); setMenuOpen(false); }}>
                      Deadlines
                    </a>
                  </div>
                </li>

                <li>
                  <a href="/#participant" onClick={(e) => { e.preventDefault(); navigateAndScroll("participant"); setMenuOpen(false); }} className="navlink">
                    Participate
                  </a>
                </li>

                <li>
                  <a href="/#contact" onClick={(e) => { e.preventDefault(); navigateAndScroll("contact"); setMenuOpen(false); }} className="navlink">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="HeaderBtn">
            <SignedOut>
              <RouterLink to="/login" onClick={() => setMenuOpen(false)}>
                <button className="navbar-btn login-btn">
                  <FiLogIn className="btn-icon" /> Login
                </button>
              </RouterLink>
              <RouterLink to="/register" onClick={() => setMenuOpen(false)}>
                <button className="navbar-btn register-btn">
                  <FiUserPlus className="btn-icon" /> Register
                </button>
              </RouterLink>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
      
      {showButton && (
        <div className="scrollTop" onClick={scrollTop}>
          <FiChevronUp />
        </div>
      )}
    </>
  );
}

export default Header;