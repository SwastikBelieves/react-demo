import React from 'react';
import Navbar from './Navbar';
import styles from './styles.module.css';

// ... (import your SVG images)
import image1 from '/img/image1.svg';
import image2 from '/img/image2.svg';
import image3 from '/img/image3.svg';
import image4 from '/img/image4.svg';


function HomePage() {
  return (
    <Navbar>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Infrastructure as Code</h1>
            <h2>may be complex, but it doesn't need to be hard.</h2>
            <p>Navigating the Cloud Native landscape can be tough and just keeping your head above water is a challenge.</p>
            <p>We're here to help.</p>
            <div className={styles.heroButtons}>
              <button className={styles.searchButton}>Search Content →</button>
              <button className={styles.aboutButton}>About Us</button>
            </div>
          </div>
          <div className={styles.heroImages}>
            <div className={styles.imageContainer}>
              <img src={image1} alt="image1" /> {/* Use imported image */}
            </div>
            <div className={styles.imageContainer}>
              <img src={image2} alt="image2" /> {/* Use imported image */}
            </div>
            <div className={styles.imageContainer}>
              <img src={image3} alt="image3" /> {/* Use imported image */}
            </div>
            <div className={styles.imageContainer}>
              <img src={image4} alt="image4" /> {/* Use imported image */}
            </div>
          </div>
        </div>

        {/* Rest of your page content */}
        {[...Array(50)].map((_, i) => (
          <p key={i}>Paragraph {i + 1}</p>
        ))}
      </main>
    </Navbar>
  );
}

export default HomePage;