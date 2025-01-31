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
  home: <a href="/">Home</a>,
  blog: <a href="/blog">Blog</a>,
  community: <a href="/community">Community</a>,
  about: <a href="/about">About</a>,
  forOssMaintainers: <a href="/for-oss-maintainers">For Oss Maintainers</a>,
  shareYourProject: <a href="/share-your-project">Share Your Project</a>,
  forOrganizations: <a href="/for-organizations">For Organizations</a>,
  partnerships: <a href="/partnerships">Partnerships</a>,
};

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.navbar}>
      <nav>
        <div className={styles.navbar_logopair}>
          <div className={styles.navbar_logo}>
            <a href="/">
              <navbarLogo.logo.Svg className={styles.logo} role="img" />
            </a>
          </div>
          <button
            className={styles.mobile_menu_icon}
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <FaTimes color="black" /> : <FaBars color="black" />}
          </button>
        </div>
        <ul className={isMobile ? styles.navbar_links_mobile : styles.navbar_links}>
          <li>{navbarContent.home}</li>
          <li>{navbarContent.blog}</li>
          <li>{navbarContent.community}</li>
          <li>{navbarContent.about}</li>
          <li>{navbarContent.forOssMaintainers}</li>
          <li>{navbarContent.shareYourProject}</li>
          <li>{navbarContent.forOrganizations}</li>
          <li>{navbarContent.partnerships}</li>
        </ul>
      </nav>
    </section>
  );
}

export default React.memo(Navbar);