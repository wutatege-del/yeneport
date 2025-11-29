export const getAssetPath = (path) => `/assets/${path}`;

// Generate placeholder images using Picsum Photos
// Uses a seed based on the path to ensure consistent images
export const getPlaceholderImage = (path, width = 800, height = 450) => {
  // Create a seed from the path string to get consistent images
  let seed = 0;
  for (let i = 0; i < path.length; i++) {
    seed = ((seed << 5) - seed) + path.charCodeAt(i);
    seed = seed & seed; // Convert to 32bit integer
  }
  seed = Math.abs(seed);
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

// Get image - tries local asset first, falls back to placeholder
export const getImage = (path, width = 800, height = 450) => {
  // For now, use placeholder images directly
  // When you add real images, you can change this to:
  // return getAssetPath(path);
  return getPlaceholderImage(path, width, height);
};

// Get hero image with format fallback
export const getHeroImage = () => {
  // Use tegene.jpg as the hero image
  return getAssetPath('hero/tegene.jpg');
};

// Get technology logo from CDN with brand colors
export const getTechLogo = (techName) => {
  // Map technology names to Simple Icons names and their brand colors
  const techMap = {
    'HTML5': { icon: 'html5', color: 'E34F26' },
    'CSS3': { icon: 'css3', color: '1572B6' },
    'JavaScript': { icon: 'javascript', color: 'F7DF1E' },
    'TypeScript': { icon: 'typescript', color: '3178C6' },
    'AngularJS': { icon: 'angular', color: 'DD0031' },
    'React': { icon: 'react', color: '61DAFB' },
    'Flutter': { icon: 'flutter', color: '02569B' },
    'PHP': { icon: 'php', color: '777BB4' },
    'Symfony': { icon: 'symfony', color: '000000' },
    'CakePHP': { icon: 'cakephp', color: 'D33C43' },
    'Node.js': { icon: 'nodedotjs', color: '339933' },
    'Java': { icon: 'java', color: 'ED8B00' },
    'Spring Boot': { icon: 'spring', color: '6DB33F' },
    'C': { icon: 'c', color: 'A8B9CC' },
    'C#': { icon: 'csharp', color: '239120' },
    '.NET': { icon: 'dotnet', color: '512BD4' },
    'Python': { icon: 'python', color: '3776AB' },
    'MySQL': { icon: 'mysql', color: '4479A1' },
    'SQL Server': { icon: 'microsoftsqlserver', color: 'CC2927' },
    'PostgreSQL': { icon: 'postgresql', color: '336791' },
    'Oracle': { icon: 'oracle', color: 'F80000' },
    'SQLite': { icon: 'sqlite', color: '003B57' },
    'MongoDB': { icon: 'mongodb', color: '47A248' },
    'Firebase': { icon: 'firebase', color: 'FFCA28' },
    'Docker': { icon: 'docker', color: '2496ED' },
    'Bash': { icon: 'gnubash', color: '4EAA25' },
    'Pandas': { icon: 'pandas', color: '150458' },
    'NumPy': { icon: 'numpy', color: '013243' },
    'Matplotlib': { icon: 'matplotlib', color: '11557C' },
    'Jupyter Notebook': { icon: 'jupyter', color: 'F37626' },
    'Power BI': { icon: 'powerbi', color: 'F2C811' },
    'Tableau': { icon: 'tableau', color: 'E97627' },
    'Git': { icon: 'git', color: 'F05032' },
    'GitHub': { icon: 'github', color: '181717' }
  };

  const tech = techMap[techName];
  if (tech) {
    // Use brand color for the icon
    return `https://cdn.simpleicons.org/${tech.icon}/${tech.color}`;
  }
  
  // Fallback for unknown technologies
  const iconName = techName.toLowerCase().replace(/\s+/g, '');
  return `https://cdn.simpleicons.org/${iconName}/ffffff`;
};

// Get category icon for About section
export const getCategoryIcon = (category) => {
  // Map category names to local icon file paths
  const iconMap = {
    'Web Development': 'about/code.png',
    'Data Analytics': 'about/ai.png',
    'Databases & Cloud': 'about/database.png'
  };

  const iconPath = iconMap[category];
  if (iconPath) {
    return getAssetPath(iconPath);
  }
  
  // Fallback to icons directory
  return getAssetPath(`icons/${category.toLowerCase().replace(/\s+/g, '-')}.svg`);
};

// Get CDN fallback icon for category
export const getCategoryIconCDN = (category) => {
  const cdnIconMap = {
    'Web Development': 'code',
    'Data Analytics': 'pandas',
    'Databases & Cloud': 'amazonaws'
  };
  const cdnIconName = cdnIconMap[category] || 'code';
  return `https://cdn.simpleicons.org/${cdnIconName}/576cbc`;
};

