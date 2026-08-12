import { Link as RouterLink } from "react-router-dom";
import { FiLogIn, FiUserPlus, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Swal from "sweetalert2";
import "./header.css";
import { useEffect, useState } from "react";

function Header() {
  const [showButton, setShowButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

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

  const handleDropdownClick = (e, name) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    }
  };

  const handleProgramDownload = (e) => {
    if (e) e.preventDefault();
    
    // Trigger browser direct download of PDF
    const link = document.createElement("a");
    link.href = "/Conference_Program_CIER2026.pdf";
    link.download = "Conference_Program_CIER2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Display professional English SweetAlert toast notification
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Conference Program Downloaded",
      text: "The official CIER 2026 conference program has been saved to your device.",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: "#1b143a",
      color: "#ffffff",
      iconColor: "#06b6d4"
    });
  };

  return (
    <>
      <div className="HeaderContainer">
        <div className="HeaderLogo">
          <RouterLink to="/" onClick={(e) => { e.preventDefault(); navigateAndScroll(null); setMenuOpen(false); setOpenMobileDropdown(null); }} className="logo-link">
            <h2>CILERS||2026</h2>
          </RouterLink>
        </div>

        {/* Hamburger icon for mobile viewports */}
        <button 
          className="hamburger-btn" 
          onClick={() => { setMenuOpen(!menuOpen); setOpenMobileDropdown(null); }}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`headerbtnnav ${menuOpen ? "menu-active" : ""}`}>
          <div className="HeaderNav">
            <nav>
              <ul>
                <li>
                  <a href="/" onClick={(e) => { e.preventDefault(); navigateAndScroll(null); setMenuOpen(false); setOpenMobileDropdown(null); }} className="navlink">
                    Home
                  </a>
                </li>
                
                <li className={`dropdown ${openMobileDropdown === 'conference' ? 'mobile-expanded' : ''}`}>
                  <span className="dropdown-trigger" onClick={(e) => handleDropdownClick(e, 'conference')}>
                    Conference
                  </span>
                  <div className="dropdownMenu">
                    <a href="/#speakerkeynote" onClick={(e) => { e.preventDefault(); navigateAndScroll("speakerkeynote"); setMenuOpen(false); setOpenMobileDropdown(null); }}>
                      Keynote Speakers
                    </a>
                    <a href="/#contact" onClick={(e) => { e.preventDefault(); navigateAndScroll("contact"); setMenuOpen(false); setOpenMobileDropdown(null); }}>
                      Committee
                    </a>
                    <a href="/#conferencevenu" onClick={(e) => { e.preventDefault(); navigateAndScroll("conferencevenu"); setMenuOpen(false); setOpenMobileDropdown(null); }}>
                      Venue
                    </a>
                    <a href="/#topics" onClick={(e) => { e.preventDefault(); navigateAndScroll("topics"); setMenuOpen(false); setOpenMobileDropdown(null); }}>
                      Topics
                    </a>
                    <a href="/Conference_Program_CIER2026.pdf" onClick={(e) => { handleProgramDownload(e); setMenuOpen(false); setOpenMobileDropdown(null); }}>
                      Program PDF
                    </a>
                  </div>
                </li>

                <li className={`dropdown ${openMobileDropdown === 'submission' ? 'mobile-expanded' : ''}`}>
                  <span className="dropdown-trigger" onClick={(e) => handleDropdownClick(e, 'submission')}>
                    Submission
                  </span>
                  <div className="dropdownMenu">
                    <a href="/#guidelines" onClick={(e) => { e.preventDefault(); navigateAndScroll("guidelines"); setMenuOpen(false); setOpenMobileDropdown(null); }}>
                      Guidelines
                    </a>
                    <a href="/#Deadlines" onClick={(e) => { e.preventDefault(); navigateAndScroll("Deadlines"); setMenuOpen(false); setOpenMobileDropdown(null); }}>
                      Deadlines
                    </a>
                  </div>
                </li>

                <li>
                  <a href="/#participant" onClick={(e) => { e.preventDefault(); navigateAndScroll("participant"); setMenuOpen(false); setOpenMobileDropdown(null); }} className="navlink">
                    Participate
                  </a>
                </li>

                <li>
                  <a href="/#contact" onClick={(e) => { e.preventDefault(); navigateAndScroll("contact"); setMenuOpen(false); setOpenMobileDropdown(null); }} className="navlink">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="HeaderBtn">
            <button onClick={handleProgramDownload} className="navbar-btn program-btn">
              <FaFilePdf className="btn-icon pdf-icon" /> Conference Program
            </button>

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