import { useState } from 'react';
import styles from '../styles/ProjectCard.module.css';
import { getAssetPath, getImage } from '../utils/assets';

const ProjectCard = ({ project }) => {
  const { title, images, imageSrc, description, skills, duration, difficulty, year, demo, download } = project;
  const imageList = images || [imageSrc];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const difficultyClass = difficulty?.toLowerCase() || 'beginner';

  return (
    <div className={styles.container}>
      <div className={styles.imageCarousel}>
        <img
          src={getImage(imageList[currentImageIndex])}
          alt={`Screenshot ${currentImageIndex + 1} of ${title}`}
          className={styles.image}
        />
        {imageList.length > 1 && (
          <>
            <button
              className={`${styles.carouselBtn} ${styles.prevBtn}`}
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className={`${styles.carouselBtn} ${styles.nextBtn}`}
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
            <div className={styles.imageIndicators}>
              {imageList.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <div className={styles.imageCounter}>
              {currentImageIndex + 1}/{imageList.length}
            </div>
          </>
        )}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.projectMeta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>📅 Year:</span>
          <span className={styles.metaValue}>{year}</span>
          <span className={styles.metaLabel}>⏱️ Duration:</span>
          <span className={styles.metaValue}>{duration}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>🎯 Difficulty:</span>
          <span className={`${styles.metaValue} ${styles.difficulty} ${styles[difficultyClass]}`}>
            {difficulty}
          </span>
        </div>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      {(demo || download) && (
        <div className={`${styles.links} ${(demo && download) ? '' : styles.singleLink}`}>
          {demo && demo.trim() !== '' && (
            <a
              href={demo}
              className={`${styles.link} ${styles.demoBtn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getAssetPath('projects/live.png')}
                alt="Live Demo"
                className={styles.buttonIcon}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              Live Demo
            </a>
          )}
          {download && download.trim() !== '' && (
            <a
              href={download}
              className={`${styles.link} ${styles.downloadBtn}`}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getAssetPath('projects/download.png')}
                alt="Download"
                className={styles.buttonIcon}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              Download APK
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

