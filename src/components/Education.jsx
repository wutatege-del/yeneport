import styles from '../styles/Education.module.css';

const Education = () => {
  const educationData = [
    {
      degree: "Google Skill Development",
      institution: "Google Skill Development Program",
      location: "Addis Ababa, Ethiopia",
      startDate: "2024",
      endDate: "Present"
    },
    {
      degree: "Level Four COC in Computer Hardware Maintenance and Networking",
      institution: "Bonga Polytechnic College",
      location: "Ethiopia",
      startDate: "2022",
      endDate: "2023"
    },
    {
      degree: "BSc Degree in Information System",
      institution: "Wolaita Sodo University",
      location: "Ethiopia",
      startDate: "2019",
      endDate: "2022"
    }
  ];

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              <div className={styles.markerDot}></div>
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.dateRange}>
                {item.startDate} - {item.endDate}
              </div>
              <h3 className={styles.degree}>{item.degree}</h3>
              <h4 className={styles.institution}>{item.institution}</h4>
              <p className={styles.location}>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

