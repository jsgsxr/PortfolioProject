import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Justin Smith | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Justin Smith Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Worldwide |',
  name: 'Justin Smith',
  subtitle: 'Web Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Experienced in HTML, CSS, JavaScript, React/Next.js, DART, Flutter, Node.js, Firebase, and quick to pick up any Object Oriented framework.',
  paragraphTwo:
    'Skilled in Electrical Troubleshooting, Management, Problem Solving, and Training. Strong arts and design professional, with a Bachelors Degree focused in Sound Design/Music Production from Full Sail University.',
  paragraphThree:
    'Skilled Sound Designer with a demonstrated history of working in the entertainment industry. ',
  resume: 'https://pdfhost.io/v/o91VeK~7E_ResumeJustinSmith', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'HouseofMusic.png',
    title: 'House of Music',
    info: 'Social-Media-style design for testing backend and database knowledge using React/Next.js',
    info2: 'Login, post, comment, and make friends with local musicians!',
    url: 'https://house-of-music.vercel.app/',
    repo: 'https://github.com/jsgsxr/house-of-music', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sspappimg.png',
    title: 'SilverSmith Productions Mobile APP',
    info: 'Mobile app based on SilverSmith Productions marketing',
    info2: 'Using Flutter and DART to produce mobile applications',
    url: 'https://github.com/jsgsxr/SSP-APP-Build',
    repo: 'https://github.com/jsgsxr/SSP-APP-Build', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'formimg.png',
    title: 'Customer Satisfaction Form',
    info: 'Form using only HTML and CSS to send data through API',
    info2: 'Practical form knowledge and control using only HTML and CSS',
    url: 'https://github.com/jsgsxr/customersatisfactionform',
    repo: 'https://github.com/jsgsxr/customersatisfactionform', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Building dreams from around the world',
  btn: 'Contact Me!',
  email: 'silversmithpro@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/SilverSmithProTaiwan',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/justin-smith-taiwan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jsgsxr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
