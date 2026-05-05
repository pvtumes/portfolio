// Portfolio data — verified and polished with correct links

export const personal = {
  name: 'Umesh Kumar Prasad',
  role: 'Software Engineer — Backend | Cloud | DevOps',
  tagline: 'Building scalable backend systems, cloud-native applications, and production-grade APIs.',
  email: 'pvtumes@gmail.com',
  phone: '+91 9673356154',
  location: 'Chinchwad, Pune, India',

  github: 'https://github.com/pvtumes',
  linkedin: 'https://www.linkedin.com/in/umesh154/',
  leetcode: 'https://leetcode.com/u/pvtumes/',

  resume: '/Resume.pdf',
  profileImage: '/images/ProfilePic.jpg',

  about: `I'm a Software Engineer Intern at Bahwan CyberTek, where I design and develop production-grade REST APIs using Java, MuleSoft, and TIBCO. I work extensively with PostgreSQL for database optimization and leverage Docker and Jenkins to build containerized applications and CI/CD pipelines.

I am currently pursuing a B.Tech in Computer Science and Business Systems (2022–2026), with a strong foundation in backend system design, API development, and cloud-native engineering.

I enjoy building scalable, high-performance systems and focus on writing clean, maintainable code — from database schema design to deploying services on AWS.`,
};

export const experience = [
  {
    id: 'bct',
    company: 'Bahwan CyberTek',
    role: 'Software Engineer Intern',
    period: 'Jan 2026 – Present',
    location: 'Pune, India',
    points: [
      'Designed and developed production-grade REST APIs using Java, MuleSoft, and TIBCO, improving inter-service communication.',
      'Managed backend data with PostgreSQL, performing query optimization and schema design for high-volume datasets.',
      'Containerized applications using Docker for scalable and consistent deployments.',
      'Built and maintained CI/CD pipelines using Jenkins, reducing manual deployment effort and improving release cycles.',
      'Collaborated in agile environments, contributing to code reviews and sprint-based delivery.',
    ],
  },
];

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science and Business Systems',
    institution: "JSPM's Rajarshi Shahu College of Engineering",
    period: '2022 – 2026',
    location: 'Pune, India',
    score: 'CGPA: 8.65',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary (12th)',
    institution: 'S.G.H.V. Junior College, Chinchwad',
    period: '2021 – 2022',
    score: '85.67%',
  },
  {
    id: 'ssc',
    degree: 'Secondary School (10th)',
    institution: 'S.G.H.V. Junior College, Chinchwad',
    period: '2019 – 2020',
    score: '95.20%',
  },
];

export const certifications = [
  {
    id: 'aws-dev',
    name: 'AWS Essential Training for Developers',
    issuer: 'LinkedIn Learning',
  },
  {
    id: 'devops',
    name: 'DevOps Professional Certificate',
    issuer: 'PagerDuty & LinkedIn Learning',
  },
  {
    id: 'cloud',
    name: 'Cloud Computing Fundamentals',
    issuer: 'IBM SkillsBuild',
  },
  {
    id: 'java',
    name: 'Oracle Java Foundations',
    issuer: 'LinkedIn Learning',
  },
];

export const projects = [
  {
    id: 'airline',
    title: 'Airline Reservation System',
    description:
      'Developed a full backend system for flight search, booking, seat selection, and passenger management using Java, PostgreSQL, and TIBCO. Implemented concurrency handling to prevent race conditions and ensure data integrity under concurrent requests. Designed scalable REST APIs and optimized database queries for performance.',
    tech: ['Java', 'PostgreSQL', 'TIBCO', 'REST API'],
    github: 'https://github.com/pvtumes/AirlineRservationSystem.git',
    featured: true,
    type: 'Backend System',
    images: [
      '/images/SkyVoyage/LandingPage.png',
      '/images/SkyVoyage/Dashboard.png',
      '/images/SkyVoyage/Screenshot 2026-05-06 014813.png',
      '/images/SkyVoyage/Screenshot 2026-05-06 014934.png',
      '/images/SkyVoyage/Screenshot 2026-05-06 014948.png',
      '/images/SkyVoyage/Screenshot 2026-05-06 015152.png',
      '/images/SkyVoyage/Screenshot 2026-05-06 015440.png'
    ],
  },
  {
    id: 'connectify',
    title: 'Connectify',
    description:
      'Built a LinkedIn-inspired full-stack platform featuring a course dashboard, coding practice interface, and learning calendar. Developed reusable React components integrated with backend APIs and enhanced UI/UX using Framer Motion animations.',
    tech: ['React.js', 'Node.js', 'REST API', 'Framer Motion'],
    github: 'https://github.com/pvtumes/connectify.git',
    featured: true,
    type: 'Full-Stack Application',
    images: [
      '/images/connectify/Screenshot 2025-11-29 112128.png',
      '/images/connectify/Screenshot 2025-11-29 112217.png',
      '/images/connectify/Screenshot 2025-11-29 112303.png'
    ],
  },
  {
    id: 'super-resolution',
    title: 'Super-Resolution Model',
    description:
      'Implemented a deep learning-based image super-resolution model using a teacher-student architecture with Real-ESRGAN and FSRCNN. Trained on the GoPro Large dataset to improve perceptual image quality and reconstruction performance.',
    tech: ['Python', 'Real-ESRGAN', 'FSRCNN'],
    github: 'https://github.com/pvtumes/Image-SuperResolution-SwinIR-FSRCNN.git',
    featured: false,
    type: 'AI / Machine Learning',
    images: [
      '/images/super-resolution/1.png',
      '/images/super-resolution/2.png',
      '/images/super-resolution/3.png',
      '/images/super-resolution/4.png',
      '/images/super-resolution/5.png',
      '/images/super-resolution/6.png',
    ],
  },
];

export const skills = {
  Languages: [
    'Java',
    'C++',
    'JavaScript',
    'SQL',
    'Bash (Basics)',
    'Data Structures',
    'OOP Concepts',
    'Problem Solving'
  ],

  'Backend & Integration': [
    'REST APIs',
    'JDBC',
    'Spring Boot',
    'System Design Basics',
    'MuleSoft',
    'TIBCO BW6'
  ],

  Frontend: [
    'React.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Responsive Design',
    'Component-Based Architecture',
    'Framer Motion',
    'UI/UX Basics'
  ],

  'DevOps & Cloud': [
    'Docker',
    'Containerization',
    'Kubernetes (Fundamentals)',
    'Jenkins',
    'CI/CD Pipelines',
    'AWS',
    'Deployment Automation',

  ],

  Databases: [
    'PostgreSQL',
    'SQL',
    'Query Optimization',
    'Schema Design',
    'Transactions',
    'Concurrency Handling',

  ],

  Tools: [
    'Git',
    'GitHub',
    'Postman',
    'IntelliJ IDEA',
    'VS Code',
    'Docker Desktop',
    'pgAdmin',
    'Chrome DevTools'
  ],
};