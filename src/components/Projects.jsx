import { useState, useEffect } from 'react';
import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Ethiopian Radio Streaming App",
      images: [
        "projects/radio1",
        "projects/radio2",
        "projects/radio3"
      ],
      description: "An Android mobile application designed for streaming Ethiopian radio stations. The app provides users with easy access to multiple Ethiopian radio channels, featuring a user-friendly interface, smooth streaming capabilities, and offline functionality. Users can browse through various radio stations, save favorites, and enjoy uninterrupted music and talk shows from Ethiopia. To test the app, simply install the APK file on an Android device and launch the application to start streaming your favorite Ethiopian radio stations.",
      skills: ["Android", "Java", "Kotlin", "MediaPlayer API", "Firebase"],
      duration: "2 months",
      difficulty: "Intermediate",
      year: 2024,
      demo: "",
      download: "#" // Replace with your APK file path (e.g., "/ethiopian-radio-app.apk" or a hosted URL)
    },
    {
      title: "MeilleurPrixTn",
      images: [
        "projects/mptn1",
        "projects/mptn2",
        "projects/mptn3",
        "projects/mptn4",
        "projects/mptn5"
      ],
      description: "MeilleurPrixTn is an intelligent web platform that allows Tunisian consumers to easily compare prices of electronic products across all major e-commerce sites in the country. Developed with Flask and powered by advanced search algorithms, it provides a modern user experience and delivers relevant results in real time.",
      skills: ["Python", "Flask", "BeautifulSoup", "Selenium"],
      duration: "1 month",
      difficulty: "Advanced",
      year: 2025,
      demo: "https://www.meilleurprixtn.top"
    },
    {
      title: "El Jarda",
      images: [
        "projects/eljarda1",
        "projects/eljarda2",
        "projects/eljarda3",
        "projects/eljarda4",
        "projects/eljarda5",
        "projects/eljarda6",
        "projects/eljarda7",
        "projects/eljarda8",
        "projects/eljarda9",
        "projects/eljarda10"
      ],
      description: "El Jarda is a comprehensive digital platform for a professional garden maintenance and landscaping business based in Sfax, Tunisia. This modern website combines an intuitive customer interface with a powerful admin dashboard for complete content management. The platform features a dynamic product catalog showcasing plants and gardening tools, integrated contact forms for customer inquiries, and a user-friendly content management system that empowers business owners to update their offerings without requiring technical expertise.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "Node.js", "JWT Authentication"],
      duration: "2 months",
      difficulty: "Advanced",
      year: 2025,
      demo: "https://eljarda.com"
    },
    {
      title: "Product Listing Site",
      images: [
        "projects/pls1",
        "projects/pls2",
        "projects/pls3",
        "projects/pls4",
        "projects/pls5"
      ],
      description: "This Project is a web app that allows users to view, order, and manage products. Built with HTML, CSS, JavaScript, PHP, and MySQL using the MVC architecture, this app provides an easy-to-use interface for both customers and admins.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC"],
      duration: "3 weeks",
      difficulty: "Beginner",
      year: 2023,
      demo: ""
    },
    {
      title: "Account Manager",
      images: [
        "projects/am1",
        "projects/am2",
        "projects/am3"
      ],
      description: "Account Manager is a desktop app that helps you keep all your login credentials for different platforms in one place. It saves you from the trouble of remembering multiple passwords and struggling with the 'Forgot Password' option every time you need to log in to a platform.",
      skills: ["C#", ".NET Framework", "SQLite", "Dapper"],
      duration: "3 weeks",
      difficulty: "Beginner",
      year: 2022,
      demo: ""
    },
    {
      title: "Academic Grade Calculator",
      images: ["projects/c3"],
      description: "Console-based grade management system that calculates semester and yearly averages for university students with weighted assessment schemes and formatted transcript generation.",
      skills: ["C", "Data structures", "Console development"],
      duration: "1 week",
      difficulty: "Beginner",
      year: 2022,
      demo: ""
    },
    {
      title: "Découvrir la ville de Sfax",
      images: [
        "projects/dvsfax1",
        "projects/dvsfax2",
        "projects/dvsfax3"
      ],
      description: "This is one of the first projects I made to learn the basics of web development by showcasing the monuments of the city I live in.",
      skills: ["HTML", "CSS"],
      duration: "1 week",
      difficulty: "Beginner",
      year: 2021,
      demo: ""
    }
  ];

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 680);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projectsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const currentProjects = sortedProjects.slice(startIndex, startIndex + projectsPerPage);
  const isSingleProject = !isMobile && currentPage === totalPages - 1 && currentProjects.length === 1;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={`${styles.projectsWrapper} ${isSingleProject ? styles.singlePageWrapper : ''}`}>
        <button
          className={styles.navBtn}
          onClick={prevPage}
          aria-label="Previous projects"
        >
          ‹
        </button>
        <div className={`${styles.projects} ${isSingleProject ? styles.singleProject : ''}`}>
          {currentProjects.map((project, index) => (
            <ProjectCard key={startIndex + index} project={project} />
          ))}
        </div>
        <button
          className={styles.navBtn}
          onClick={nextPage}
          aria-label="Next projects"
        >
          ›
        </button>
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${index === currentPage ? styles.active : ''}`}
            onClick={() => goToPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
      <div className={styles.projectCounter}>
        {startIndex + 1}-{Math.min((currentPage + 1) * projectsPerPage, sortedProjects.length)} of {sortedProjects.length} projects
      </div>
    </section>
  );
};

export default Projects;

