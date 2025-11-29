import styles from '../styles/Skills.module.css';
import { getTechLogo } from '../utils/assets';

const Skills = () => {
  const technologies = [
    { title: "HTML5", imageSrc: "skills/HTML5.png" },
    { title: "JavaScript", imageSrc: "skills/JavaScript.png" },
    { title: "TypeScript", imageSrc: "skills/TypeScript.png" },
    { title: "AngularJS", imageSrc: "skills/AngularJS.png" },
    { title: "React", imageSrc: "skills/React.png" },
    { title: "Flutter", imageSrc: "skills/Flutter.png" },
    { title: "PHP", imageSrc: "skills/PHP.png" },
    { title: "Node.js", imageSrc: "skills/Node.js.png" },
    { title: "MongoDB", imageSrc: "skills/MongoDB.png" },
    { title: "Firebase", imageSrc: "skills/Firebase.png" },
    { title: "Docker", imageSrc: "skills/Docker.png" },
    { title: "Git", imageSrc: "skills/Git.png" },
    { title: "GitHub", imageSrc: "skills/GitHub.png" }
  ];

  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Technologies I have worked with</h2>
      <div className={styles.container}>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollTrack}>
            {duplicatedTech.map((tech, index) => (
              <div key={index} className={styles.techItem}>
                <img
                  src={getTechLogo(tech.title)}
                  alt={tech.title}
                  className={styles.techIcon}
                  onError={(e) => {
                    // Prevent infinite loop - only set fallback once
                    if (!e.target.dataset.fallbackSet) {
                      e.target.dataset.fallbackSet = 'true';
                      // Fallback to a generic icon if logo not found
                      const fallbackIcon = tech.title.toLowerCase().replace(/\s+/g, '').replace('#', 'sharp');
                      e.target.src = `https://cdn.simpleicons.org/${fallbackIcon}/ffffff`;
                    } else {
                      // If fallback also fails, hide the image
                      e.target.style.display = 'none';
                    }
                  }}
                />
                <span className={styles.techTitle}>{tech.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

