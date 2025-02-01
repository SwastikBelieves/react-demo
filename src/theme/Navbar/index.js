import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import BrowserOnly from "@docusaurus/BrowserOnly";

const navbarLogo = {
  logo: {
    Svg: require("@site/static/img/navbarLogo.svg").default,
  },
  arrow: {
    Svg: require("@site/static/img/Arrow.svg").default,
  },
};

const navbarContent = {
  learn: (
    <>
      <div className={styles.navbar_dropdown}>
        <button className={styles.navbar_dropbtn}>
          Learn{" "}
          <navbarLogo.arrow.Svg className={styles.navbar_arrow} role="img" />
        </button>
        <div className={styles.navbar_dropdown_content}>
          <a href="https://www.youtube.com/c/saiyam911/videos" target="_blank">
            Video Content
          </a>
          <a className={styles.navbar_blog_design} href="https://blog.kubesimplify.com/" target="_blank">
            Blog Content
          </a>
        </div>
      </div>
    </>
  ),
  communityContent: (
    <>
      <div className={styles.navbar_dropdown}>
        <button className={styles.navbar_dropbtn}>
          Community{" "}
          <navbarLogo.arrow.Svg className={styles.navbar_arrow} role="img" />
        </button>
        <div className={styles.navbar_dropdown_content}>
          <a href="/ambassadors">Kubesimplify Ambassador</a>
          <a className={styles.navbar_workshops_designs} href="/workshops">
            Workshops
          </a>
        </div>
      </div>
    </>
  ),
  aboutContent: (
    <>
      <div className={styles.navbar_about_start}>
        <a className={styles.navbar_about_word} href="/about">
          About
        </a>
      </div>
    </>
  ),
};

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 680);
    });
  }, []);

  return (
    <section className={styles.navbar_vertical}>
      <nav className={styles.navbar_positioning}>
        <div className={styles.navbar_logo_container}>
          <a href="/">
            <navbarLogo.logo.Svg className={styles.logo} role="" />
          </a>
          <button
            className={styles.mobile_menu_icon}
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <FaTimes color="white" /> : <FaBars color="white" />}
          </button>
        </div>
        <ul className={isMobile ? styles.navbar_links_mobile : styles.navbar_links_vertical}>
          <li className={styles.about}>{navbarContent.aboutContent}</li>
          <li className={styles.learn}>ok2</li>
          <li className={styles.learn}>{navbarContent.learn}</li>
          <li className={styles.community}>{navbarContent.communityContent}</li>
          <li>
            <button className={styles.navbarbutton}>
              <a className={styles.navbar_text} href="https://saiyampathak.substack.com/">
                Newsletter
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default React.memo(Navbar);
