<section className={styles.navbar}>
  <nav>
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
    <ul className={styles.navbar_links}>
      <li className={styles.about}>{navbarContent.aboutContent}</li>
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
