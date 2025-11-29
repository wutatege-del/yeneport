import styles from '../styles/About.module.css';
import { getAssetPath, getCategoryIcon, getCategoryIconCDN } from '../utils/assets';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getAssetPath('about/tegene2.jpg')}
          alt="Me sitting with a laptop"
          onError={(e) => {
            // Prevent infinite loop - only set fallback once
            if (!e.target.dataset.fallbackSet) {
              e.target.dataset.fallbackSet = 'true';
              // Fallback to placeholder if image not found
              e.target.src = 'https://picsum.photos/seed/about-laptop/600/600';
            } else {
              // If fallback also fails, hide the image
              e.target.style.display = 'none';
            }
          }}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
              src={getCategoryIcon('Web Development')} 
              alt="Web Development Icon"
              onError={(e) => {
                // Prevent infinite loop - only set fallback once
                if (!e.target.dataset.fallbackSet) {
                  e.target.dataset.fallbackSet = 'true';
                  // Fallback to CDN if local icon not found
                  e.target.src = getCategoryIconCDN('Web Development');
                } else {
                  // If fallback also fails, hide the image
                  e.target.style.display = 'none';
                }
              }}
            />
            <div>
              <h3>Web Development</h3>
              <p>
                I build modern and user-friendly web applications that combine functionality, performance, and clean design. I enjoy transforming ideas into interactive experiences that make an impact.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
              src={getCategoryIcon('Data Analytics')} 
              alt="Data Analytics Icon"
              onError={(e) => {
                // Prevent infinite loop - only set fallback once
                if (!e.target.dataset.fallbackSet) {
                  e.target.dataset.fallbackSet = 'true';
                  // Fallback to CDN if local icon not found
                  e.target.src = getCategoryIconCDN('Data Analytics');
                } else {
                  // If fallback also fails, hide the image
                  e.target.style.display = 'none';
                }
              }}
            />
            <div>
              <h3>Data Analytics</h3>
              <p>
                I love working with data — collecting, analyzing, and visualizing it to extract valuable insights and support better decision-making.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
              src={getCategoryIcon('Databases & Cloud')} 
              alt="Database Icon"
              onError={(e) => {
                // Prevent infinite loop - only set fallback once
                if (!e.target.dataset.fallbackSet) {
                  e.target.dataset.fallbackSet = 'true';
                  // Fallback to CDN if local icon not found
                  e.target.src = getCategoryIconCDN('Databases & Cloud');
                } else {
                  // If fallback also fails, hide the image
                  e.target.style.display = 'none';
                }
              }}
            />
            <div>
              <h3>Databases & Cloud</h3>
              <p>
                I design and manage reliable databases and cloud-based environments to ensure scalability, security, and smooth deployment of applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

