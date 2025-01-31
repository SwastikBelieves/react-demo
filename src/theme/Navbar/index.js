import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

// ... (navbarLogo and navbarContent remain the same as in the previous response)

function Navbar(props) { // Added props argument
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 680 ? setIsMobile(false) : setIsMobile(true);
    };

    handleResize(); // Call initially to set correct state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logopair}>
          <div className={styles.navbar_logo}>
            <a href="/">
              <navbarLogo.logo.Svg className={styles.logo} role="" />
            </a>
          </div>
          <button
            className={styles.mobile_menu_icon}
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <FaTimes color="white" /> : <FaBars color="white" />}
          </button>
        </div>
        <ul
          className={
            isMobile ? styles.navbar_links_mobile : styles.navbar_links
          }
          onClick={() => isMobile && setIsMobile(false)}
        >
          {/* ... (your navbar links using navbarContent) */}
           <li>{navbarContent.home}</li>
          <li>{navbarContent.blog}</li>
          <li>{navbarContent.community}</li>
          <li>{navbarContent.about}</li>
          <li className={styles.for_oss}>
            <span className={styles.section_title}>For OSS Maintainers</span>
            {navbarContent.shareProject}
          </li>
          <li className={styles.for_organizations}>
            <span className={styles.section_title}>For Organizations</span>
            {navbarContent.partnerships}
          </li>
        </ul>
      </nav>
      <div className={styles.mainContent}>
        {props.children} {/* This will render the children passed to Navbar */}
      </div>
    </div>
  );
}

export default React.memo(Navbar);