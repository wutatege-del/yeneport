import styles from '../styles/Hero.module.css';
import { getHeroImage } from '../utils/assets';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tegene</h1>
        <p className={styles.description}>
          I bridge web development and data analytics to build smart, meaningful solutions that turn data into stories and technology into experiences.
        </p>
        <div className={styles.buttonGroup}>
          <a
            className={styles.contactBtn}
            href="#contact"
          >
            Contact me
          </a>
          <a
            className={styles.resumeBtn}
            href="/tegene%20wondimu%20cv.pdf"
            download="Tegene_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getHeroImage()}
        alt="Hero image of me"
        onError={(e) => {
          // Prevent infinite loop - only set fallback once
          if (!e.target.dataset.fallbackSet) {
            e.target.dataset.fallbackSet = 'true';
            // Fallback to placeholder if image not found
            e.target.src = `https://picsum.photos/seed/hero-portrait/600/800`;
          } else {
            // If fallback also fails, hide the image
            e.target.style.display = 'none';
          }
        }}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;

