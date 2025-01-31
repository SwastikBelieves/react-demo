import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import BrowserOnly from "@docusaurus/BrowserOnly";

const navbarLogo = {
  logo: {
    Svg: require("@site/static/img/navbarLogo.svg").default,
  },
};

const navbarContent = {
  home: (
    <a className={styles.navbar_link} href="/">
      Home
    </a>
  ),
  blog: (
    <a
      className={styles.navbar_link}
      href="https://blog.kubesimplify.com/"
      target="blank"
    >
      Blog
    </a>
  ),
  community: (
    <a className={styles.navbar_link} href="/community">
      Community
    </a>
  ),
  about: (
    <a className={styles.navbar_link} href="/about">
      About
    </a>
  ),
  shareProject: (
    <a className={styles.navbar_link} href="/share-project"> {/* Replace with your actual link */}
      Share Your Project
    </a>
  ),
  partnerships: (
    <a className={styles.navbar_link} href="/partnerships"> {/* Replace with your actual link */}
      Partnerships
    </a>
  ),
};


function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 680 ? setIsMobile(false) : setIsMobile(!isMobile);
    });
  }, []); // Add empty dependency array to prevent infinite loop

  return (
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
        onClick={() => isMobile && setIsMobile(false)} // Close menu on click in mobile view
      >
        <li>{navbarContent.home}</li>
        <li>{navbarContent.blog}</li>
        <li>{navbarContent.community}</li>
        <li>{navbarContent.about}</li>
        <li className={styles.for_oss}>{/* Added class for styling */}
          <span className={styles.section_title}>For OSS Maintainers</span> {/* Added span for section title */}
          {navbarContent.shareProject}
        </li>
        <li className={styles.for_organizations}>{/* Added class for styling */}
          <span className={styles.section_title}>For Organizations</span> {/* Added span for section title */}
          {navbarContent.partnerships}
        </li>
      </ul>
    </nav>
  );
}

export default React.memo(Navbar);