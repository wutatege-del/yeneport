import styles from '../styles/Experience.module.css';
import { getAssetPath } from '../utils/assets';

const Experience = () => {
  const experienceData = [
    {
      role: "Web Developer",
      organisation: "School Management System",
      startDate: "2024",
      endDate: "Present",
      experiences: [
        "Developed a comprehensive school management system with student enrollment, attendance tracking, and grade management.",
        "Implemented secure authentication and role-based access control for administrators, teachers, and students."
      ],
      imageSrc: "history/school-management.png"
    },
    {
      role: "Full Stack Developer",
      organisation: "Online Shopping Website",
      startDate: "2024",
      endDate: "Present",
      experiences: [
        "Created a fully functional e-commerce platform with product catalog, shopping cart, and payment integration.",
        "Implemented user authentication, order management, and inventory tracking systems."
      ],
      imageSrc: "history/online-shopping.png"
    },
    {
      role: "Android Developer",
      organisation: "Radio Streaming & Mobile Apps",
      startDate: "2023",
      endDate: "Present",
      experiences: [
        "Developed an Android application for online radio streaming with playlist management and offline playback.",
        "Created multiple mobile applications with modern UI/UX design and real-time data synchronization."
      ],
      imageSrc: "history/android-apps.png"
    }
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {experienceData.map((item, index) => (
          <li key={index} className={styles.historyItem}>
            <img 
              src={getAssetPath(item.imageSrc)} 
              alt={`${item.organisation} Logo`}
              onError={(e) => {
                // Prevent infinite loop - only set fallback once
                if (!e.target.dataset.fallbackSet) {
                  e.target.dataset.fallbackSet = 'true';
                  // Fallback to placeholder if image not found
                  e.target.src = `https://picsum.photos/seed/${item.organisation.replace(/\s+/g, '-')}/200/200`;
                } else {
                  // If fallback also fails, hide the image
                  e.target.style.display = 'none';
                }
              }}
            />
            <div className={styles.historyItemDetails}>
              <h3 
                className={item.organisation === "Online Shopping Website" ? styles.smallerTitle : ""}
              >
                {item.role}, {item.organisation}
              </h3>
              <p>{item.startDate} - {item.endDate}</p>
              <ul>
                {item.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;

