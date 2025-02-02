// Navbar/index.js
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import BrowserOnly from "@docusaurus/BrowserOnly";

// ... (rest of your code remains the same)

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State for vertical nav visibility

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 680 ? setIsMobile(false) : setIsMobile(true);
      if (window.innerWidth > 680) { // Close nav on larger screens
        setIsNavOpen(false)
      }
    });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <section className={styles.navbar}>
        <nav className={styles.navbar_positioning}>
          <div className={styles.navbar_logopair}>
            <div className={styles.navbar_logo}>
              <a href="/">
                <navbarLogo.logo.Svg className={styles.logo} role="" />
              </a>
            </div>
            <button
              className={styles.mobile_menu_icon}
              onClick={toggleNav} // Toggle vertical nav
            >
              {isNavOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
            </button>
          </div>
          <div className={`${styles.navbar_links_container} ${isNavOpen ? styles.open : ""}`}> {/* Conditionally apply styles */}
            <ul
              className={styles.navbar_links}
              onClick={() => isMobile && setIsNavOpen(false)} // Close on mobile click
            >
              <li className={styles.about}>{navbarContent.aboutContent}</li>
              {isMobile ? (
                <>
                  <li>{mobileViewContent.learn}</li>
                  <li>{mobileViewContent.community}</li>
                </>
              ) : (
                <>
                  <li className={styles.learn}>{navbarContent.learn}</li>
                  <li className={styles.community}>
                    {navbarContent.communityContent}
                  </li>
                </>
              )}

              <li>
                <button className={styles.navbarbutton}>
                  <a
                    className={styles.navbar_text}
                    href="https://saiyampathak.substack.com/"
                  >
                    Newsletter
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}

export default React.memo(Navbar);