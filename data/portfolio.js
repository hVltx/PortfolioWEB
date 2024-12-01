const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: '',
}

const about = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Hadrien', 'Villemonteix'],
  greetingEmoji: '',
  role: 'Dual degree Engineer-Manager student',
  company: 'ESILV Paris',
  description: [
    ' Currently in my 5th year of a dual-degree program, I am specializing in a Master of Science focused on innovation, alongside management studies in Marketing and Corporate Finance. This program prepares me for project management, merging design thinking with technical expertise. Driven by a strong collective mindset, I aspire to join a team that combines innovation, design, and scientific knowledge to develop thoughtful, environmentally conscious products aimed at improving the user experience.',
  ],
  resume: 'https://github.com/hVltx/resume/blob/main/Hadrien%20VILLEMONTEIX%20-%20CV%20-%20english%20version.pdf://example.com',
  social: {
    github: 'https://github.com/hVltx',
    linkedin: 'https://www.linkedin.com/in/hadrien-villemonteix-62633a228/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/Front_Page.png',
    name: 'Stick nTag',
    description: [
      'Think, design and developp an innovative product from upcycled leather and launch it on a 30 days crowfounding campaign on Kickstarter.',
    ],
    stack: ['Entrepreneurial', 'Crowdfunding', 'Design'],
    sourceCode: '',
    livePreview: 'https://www.kickstarter.com/projects/1319726851/quickstarter-stick-ntag?ref=user_menu',
  },
  {
    thumbnail: 'images/Foil.jpeg',
    name: 'PackFoil',
    description: [
      'Aims to develop an all-in-one foil for surfboards, featuring a world first innovative retractable safety mechanism for hydrofoils. ',
    ],
    stack: ['CAO', 'Prototyping','Material science','Field testing'],
    sourceCode: '',
    livePreview: '',
  },
  {
    thumbnail: 'images/agri.jpg',
    name: 'Agricycle',
    description: [
      'An electrically assisted pedal truck designed and thought to suit agricultural needs and financial means of small agricultors.',
    ],
    stack: ['Mechanical design', 'Team collaboration', 'GreenTech'],
    sourceCode: '',
    livePreview: '',
  },
  {
    thumbnail: 'images/3js.png',
    name: 'Projet Threejs',
    description: [
      "Ce projet est une démonstration interactive en 3D de mon projet de crowdfunding Stick'nTag. L'objectif principal est d'illustrer les possibilités d'utilisation de Stick'nTag dans un environnement domestique simulé.",
    ],
    stack: ['ThreeJS', 'JavaScript'],
    sourceCode: 'https://github.com/hVltx/Stick-nTag-3D-scene.git',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'MIG welding',
  '3D Printing',
  'Laser cutting',
  'Industrial CNC',
  'SolidWorks',
  'Inskape',
  'Photoshop',
  ' Resolve devinci',
  'Notion',
  'Python',
  'C',
  'HTML', 'CSS', 'JavaScript']

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'hadrienvillemonteix@gmail.com',
}

export { header, about, projects, skills, contact }
