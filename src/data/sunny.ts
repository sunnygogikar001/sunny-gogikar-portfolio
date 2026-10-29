export type Palette = { from: string; via: string; to: string; accent: string };
export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  image?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};
export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export type Certification = { issuer: string; name: string; link: string };
export type Experience = { id: string; company: string; role: string; period: string; points: string[]; certificate: string; image: string; tags: string[]; palette: Palette };
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette; image?: string; link?: string };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export type ProfileId = 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const profile = {
  fullName: 'Sunny Gogikar',
  displayName: 'Sunny Gogikar',
  firstName: 'SUNNY GOGIKAR',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SUNNY GOGIKAR ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Data Analysis', 'Software Development'],
  intro: 'A B.Tech Computer Science graduate with a strong interest in data analysis and software development, exploring machine learning, analytics, and full-stack applications.',
  interests: ['Data Analysis', 'Software Development', 'Machine Learning'],
  email: 'sannygogikar@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sunny-gogikar-7a6609278/',
    github: 'https://github.com/sunnygogikar001',
    resume: 'https://drive.google.com/file/d/1bxbC0DomuxJaKfsNCpXa7Y9SGth-F-9-/view?usp=sharing',
  },
} as const;

export const education = [
  {
    school: 'B.Tech Computer Science and Engineering',
    place: 'Graduate',
    degree: 'Bachelor of Technology',
    period: '',
    score: '',
  },
];

const crimson: Palette = { from: '#250a0c', via: '#7b2822', to: '#090707', accent: '#ff795e' };
const amber: Palette = { from: '#211307', via: '#80511a', to: '#0a0806', accent: '#edbd65' };
const ocean: Palette = { from: '#06171b', via: '#176371', to: '#05090b', accent: '#5bd0cf' };
const violet: Palette = { from: '#120d1b', via: '#4d4268', to: '#08070b', accent: '#b7a5d8' };
const jade: Palette = { from: '#071710', via: '#256249', to: '#050907', accent: '#71d49f' };

export const experience: Experience[] = [
  {
    id: 'eduskills-python-full-stack',
    company: 'EduSkills · AICTE Virtual Internship',
    role: 'Python Full Stack Developer Intern',
    period: 'Jan 2025 – Mar 202? (year to confirm)',
    points: ['Python Full Stack Developer virtual internship; certificate supplied.'],
    certificate: 'https://drive.google.com/file/d/1EP6HM611k_MyDy4sklmPd1is4wr12Iio/view?usp=sharing',
    image: '/assets/internship-python-full-stack.svg',
    tags: ['Python', 'Full Stack', 'Virtual'],
    palette: amber,
  },
  {
    id: 'shell-energy-power-bi',
    company: 'AICTE · Shell India Markets Pvt. Ltd. · Edunet Foundation',
    role: 'Energy Consumption Trend Analysis with Power BI Intern',
    period: 'Nov 2024 – Dec 2024',
    points: ['Energy consumption trend analysis project using Power BI; certificate supplied.'],
    certificate: 'https://drive.google.com/file/d/14qTy0UXfo4dO25h0nPaS45uq3V35Buhz/view?usp=sharing',
    image: '/assets/internship-powerbi-placeholder.svg',
    tags: ['Power BI', 'Data Analysis', 'Energy'],
    palette: jade,
  },
  {
    id: 'ibm-frontend',
    company: 'IBM SkillsBuild · AICTE · Edunet Foundation',
    role: 'Front End Developer Intern (Virtual)',
    period: 'Jun 2024 – Jul 2024',
    points: ['Front End Developer virtual internship; certificate supplied.'],
    certificate: 'https://drive.google.com/file/d/1P7T6eaAvhxHh-rfjZQP015HVEokwkqSU/view?usp=sharing',
    image: '/assets/internship-frontend.svg',
    tags: ['Frontend', 'Web Development', 'Virtual'],
    palette: ocean,
  },
  {
    id: 'gauravgo-web-hosting',
    company: 'Gauravgo Games Technologies Pvt. Ltd.',
    role: 'Web Development & Hosting Intern',
    period: 'Date not supplied',
    points: ['Web development and hosting internship; certificate supplied.'],
    certificate: 'https://drive.google.com/file/d/1auWzITHp0AQCOO7e3m34LGOnQaBBB7DL/view?usp=sharing',
    image: '/assets/internship-web-hosting.svg',
    tags: ['Web Development', 'Hosting'],
    palette: violet,
  },
  {
    id: 'ey-full-stack',
    company: 'EY Global Delivery Services · AICTE · Edunet Foundation',
    role: 'Full Stack Web Development Intern',
    period: 'Dec 2023 – Jan 2024',
    points: ['Full Stack Web Development internship; certificate supplied.'],
    certificate: 'https://drive.google.com/file/d/1824Q58dbw5RbP1IqE3yDBoIAqwUMl7l3/view?usp=sharing',
    image: '/assets/internship-full-stack.svg',
    tags: ['Full Stack', 'Web Development'],
    palette: crimson,
  },
];

export const projects: Project[] = [
  {
    id: 'bharat-market-pulse',
    title: 'Bharat Market Pulse',
    year: 'Featured project',
    genre: 'Finance • Analysis',
    logline: 'An Indian stock market analysis platform, presented as a research and information experience.',
    stack: [],
    build: ['The supplied project brief describes an Indian stock market analysis platform. Live market-data integration and implementation details were not provided.'],
    features: ['Indian stock market analysis'],
    metrics: [],
    palette: crimson,
    motif: 'flow',
  },
  {
    id: 'django-ecommerce',
    title: 'E-commerce Platform',
    year: 'Featured project',
    genre: 'E-commerce • Full-Stack',
    logline: 'An e-commerce platform built with Python and Django.',
    stack: ['Python', 'Django'],
    build: ['Project details supplied: an e-commerce platform using Python and Django. Specific features and deployment details were not provided.'],
    features: ['E-commerce platform', 'Python and Django'],
    metrics: [],
    palette: amber,
    motif: 'tenants',
  },
  {
    id: 'wind-speed-prediction',
    title: 'Wind Speed Prediction',
    year: 'Featured project',
    genre: 'Machine Learning • Prediction',
    logline: 'A regression-based wind speed forecasting project comparing linear models to study prediction fit and regularization.',
    stack: ['Linear Regression', 'Lasso Regression', 'Ridge Regression'],
    build: ['The supplied project brief names Linear Regression, Lasso Regression, and Ridge Regression for wind speed prediction. Dataset, feature engineering, evaluation metrics, and results were not supplied.'],
    features: ['Wind speed prediction', 'Compare Linear, Lasso, and Ridge regression'],
    metrics: [],
    image: '/assets/wind-speed-regression.svg',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'packet-hiding-selective-jamming',
    title: 'Packet Hiding Methods for Selective Jamming Techniques',
    year: 'Featured project',
    genre: 'Research • Network Security',
    logline: 'A network security research project exploring packet-hiding approaches and their relationship to selective jamming in wireless communication.',
    stack: [],
    build: ['The topic examines the relationship between packet confidentiality, delivery reliability, and selective jamming threats. Specific methods, implementation details, and evaluation results were not supplied.'],
    features: ['Packet confidentiality in wireless communication', 'High-level study of selective jamming threats'],
    metrics: [],
    palette: violet,
    motif: 'shield',
  },
];

export const achievements: Achievement[] = [];
export const certifications: Certification[] = [
  { issuer: 'Cisco', name: 'Introduction to Data Science', link: 'https://drive.google.com/file/d/1fKWvVXNSGIwhMjYqQDxV0wRScuX5eKgJ/view?usp=sharing' },
  { issuer: 'Cisco', name: 'Introduction to Cybersecurity', link: 'https://drive.google.com/file/d/1IAjOGd-gqGU_f9hOl_z1utpqVOHOnSnM/view?usp=sharing' },
  { issuer: 'Cisco', name: 'CCNAv7: Introduction to Networks', link: 'https://drive.google.com/file/d/1IiAqbHLZhxBQRGl6nmq_bkYU9tnRH97l/view?usp=sharing' },
  { issuer: 'Cisco', name: 'CCNAv7: Switching, Routing and Wireless Essentials', link: 'https://drive.google.com/file/d/1i7b4kMOFYNJ01vPBgdoaTFQRQYNWgmFh/view?usp=sharing' },
  { issuer: 'Cisco', name: 'CCNAv7: Enterprise Networking, Security, and Automation', link: 'https://drive.google.com/file/d/1uTqeLLEMvVp25TJQJ9H7IXxqZoL0iyAz/view?usp=sharing' },
  { issuer: 'Cisco', name: 'Introduction to Data Analytics', link: 'https://drive.google.com/file/d/1CctSDXj9Bl6_2fMdpKvzWXI43ZzF5h1Y/view?usp=sharing' },
  ...experience.map((internship) => ({ issuer: internship.company, name: internship.role, link: internship.certificate })),
];

const skill = (name: string, mono: string, note: string): Skill => ({ name, mono, note });
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Skills named in the supplied brief',
    skills: [skill('HTML', 'Ht', 'From brief'), skill('CSS', 'Cs', 'From brief'), skill('JavaScript', 'Js', 'From brief'), skill('React', 'Re', 'From brief')],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Project technologies named in the supplied brief',
    skills: [skill('Python', 'Py', 'From brief'), skill('Django', 'Dj', 'From brief')],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    subtitle: 'Skills named in internships and projects',
    skills: [skill('Data Analysis', 'DA', 'Internship focus'), skill('Power BI', 'BI', 'Internship project'), skill('Machine Learning', 'ML', 'Project brief')],
  },
  {
    id: 'confirm',
    title: 'Other · To Confirm',
    subtitle: 'Potential skills not verified by the supplied details',
    skills: [skill('Node.js', 'No', 'Confirm'), skill('SQL', 'Sq', 'Confirm'), skill('Java', 'Jv', 'Confirm'), skill('TypeScript', 'Ts', 'Confirm'), skill('Git', 'Gt', 'Confirm'), skill('APIs', 'Ap', 'Confirm')],
  },
];

export const skillEvidence: Record<string, string[]> = {};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Education & Foundations',
    period: 'Dates not supplied',
    synopsis: 'A B.Tech Computer Science and Engineering graduate building a foundation in software engineering.',
    episodes: [
      { code: 'S01 E01', title: 'The Foundation', description: 'Completed a B.Tech in Computer Science and Engineering.', tags: ['B.Tech', 'Computer Science and Engineering'], runtime: 'Date not supplied', palette: amber },
      { code: 'S01 E02', title: 'The Problem Solver', description: 'Problem-solving is a stated focus; specific coursework or milestones were not supplied.', tags: ['Problem-Solving', 'Foundations'], runtime: 'Details to come', palette: jade },
    ],
  },
  {
    number: 2,
    title: 'Technical Skills & Internships',
    period: 'Internships listed',
    synopsis: 'Virtual and industry internship experiences across full-stack development, data analysis, frontend development, and web hosting.',
    episodes: experience.map((internship, index) => ({
      code: `S02 E0${index + 1}`,
      title: internship.role,
      description: `${internship.company}. ${internship.points.join(' ')}`,
      tags: internship.tags,
      runtime: internship.period,
      palette: internship.palette,
      image: internship.image,
      link: internship.certificate,
    })),
  },
  {
    number: 3,
    title: 'Projects & Continued Learning',
    period: 'Dates not supplied',
    synopsis: 'A collection of project concepts spanning commerce, market analysis, machine learning, and network security.',
    episodes: projects.map((project, index) => ({
      code: `S03 E0${index + 1}`,
      title: project.title,
      description: project.logline,
      tags: project.stack.length ? project.stack : [project.genre],
      runtime: 'Date not supplied',
      palette: project.palette,
    })),
  },
];

export const topPicks: TopPick[] = [
  { label: 'Featured project', title: 'Bharat Market Pulse', detail: 'Indian stock market analysis platform', palette: crimson },
  { label: 'Full-stack project', title: 'E-commerce', detail: 'Python · Django', palette: amber },
  { label: 'Machine learning', title: 'Wind Speed', detail: 'Prediction project', palette: ocean },
  { label: 'Research topic', title: 'Packet Hiding', detail: 'Selective jamming techniques', palette: violet },
  { label: 'Education', title: 'B.Tech CSE', detail: 'Graduate', palette: jade },
  { label: 'Frontend', title: 'React', detail: 'Listed in supplied brief', palette: amber },
  { label: 'Internship project', title: 'Energy Trends', detail: 'Power BI analysis', palette: jade },
  { label: 'Problem-solving', title: 'Software', detail: 'Engineering focus', palette: ocean },
];

export const introSlides: IntroSlide[] = [
  { kicker: 'The background', title: 'B.Tech · Computer Science', lines: ['Computer Science and Engineering graduate', 'Focused on full-stack development and software engineering'] },
  { kicker: 'The toolkit', title: 'Building for the web', lines: ['HTML · CSS · JavaScript · React', 'Python · Django'] },
  { kicker: 'The projects', title: 'Featured work', lines: projects.map((project) => project.title) },
  { kicker: 'Internships', title: 'Five experiences', lines: experience.map((item) => `${item.role} · ${item.company}`) },
  { kicker: 'The next chapter', title: 'To be continued', lines: ['Problem-solving · Software engineering · Continued learning'] },
];

export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'recruiter', name: 'Recruiter', blurb: 'Projects and education first', color: '#5bd0cf', order: ['about', 'originals', 'journey', 'skills', 'story', 'moments', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects and technical skills first', color: '#71d49f', order: ['originals', 'skills', 'journey', 'about', 'picks', 'story', 'moments'] },
  { id: 'creative', name: 'Creative', blurb: 'Explore the story and highlights', color: '#edbd65', order: ['journey', 'picks', 'originals', 'about', 'skills', 'story', 'moments'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: '3 Seasons • Dates not supplied', palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} featured projects`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Projects & strengths', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Credentials', card: 'Credentials', meta: `${certifications.length} credentials`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume availability', palette: violet },
};
