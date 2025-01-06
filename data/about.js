import React from 'react';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaFigma,
  FaCube,
  FaBootstrap
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiExpress,
  SiQuasar,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiThreedotjs,
  SiUnity,
  SiSpringboot
} from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";

export const about = {
  title: 'About Me',
  description: 'I\'m Johin Thampi, a full-stack developer with over 8 months of Intership, specializing in building responsive and high-performance websites using technologies such as React and Express. I focus on creating clean, user-friendly interfaces and continuously improve my skills to deliver great results for my clients.',
};

export const experience = [
  {
    icon: '/assets/about/badge.svg',
    title: 'My Experience',
    description: 'As a Full Stack MERN Developer at Luminar Technohub, I built user-friendly web applications using MongoDB, Express.js, React.js, and Node.js. My work involved creating responsive frontends, developing scalable backends, integrating RESTful APIs, and managing state with Redux. I ensured efficient database design and collaborated with teams to deliver high-performance solutions. I also stayed updated with industry trends to incorporate best practices and innovative solutions into development workflows.',
    items: [
      {
        company: 'Luminar Technohub',
        position: 'Frontend Developer',
        duration: '26 Dec 2024 - Present',
      },
    ]
  }
];

export const education = [
  {
    icon: '/assets/about/cap.svg',
    title: 'My Education',
    items: [
      {
        institution: 'Sree Dattha Institute of Engineering And Science',
        degree: 'B-Tech in Computer Science Engineering',
        duration: '2019 - 2023',
      },
      {
        institution: 'Luminar TechnoLab',
        degree: 'Full Stack developer(MEARN)',
        duration: '2024 - 2024',
      },
      {
        institution: 'H.M.H.S.S',
        degree: 'Higher Secondary (Bio,Math)',
        duration: '2015 - 2017',
      }
    ]
  }
];

// export const certificates = [
//   {
//     title: 'Frontend Developer (React)',
//     platform: 'HackerRank',
//     dateEarned: '2024',
//     description: 'Proved ability to create and optimize interactive, dynamic web apps using React.',
//     link: 'https://www.hackerrank.com/certificates/iframe/27aea8f4fd10',
//     image: '/assets/certificates/frontend-react.png',
//   },
//   {
//     title: 'SQL BASIC',
//     platform: 'HackerRank',
//     dateEarned: '2024',
//     description: 'Completed SQL Basics on HackerRank, proving skills in writing and optimizing queries.',
//     link: 'https://www.hackerrank.com/certificates/256451400398',
//     image: '/assets/certificates/cert1.png',
//   },
//   {
//     title: 'JavaScript BASIC',
//     platform: 'HackerRank',
//     dateEarned: '2024',
//     description: 'Achieved JavaScript Basics on HackerRank, showing a solid grasp of core JavaScript concepts.',
//     link: 'https://www.hackerrank.com/certificates/iframe/abafff203fce',
//     image: '/assets/certificates/js-basic.png',
//   },
//   {
//     title: 'Postman API Fundamentals Student Expert',
//     platform: 'Postman',
//     dateEarned: '2024',
//     description: 'Gained hands-on experience in building, testing, and managing APIs using Postman.',
//     link: 'https://badgr.com/public/assertions/WzAtwvbfSHKBfLWOSdWv4A',
//     image: '/assets/certificates/postman-api.png',
//   },
//   {
//     title: 'SQL Intermediate',
//     platform: 'HackerRank',
//     dateEarned: '2024',
//     description: 'Expanded SQL knowledge, working with more complex queries, subqueries, and advanced functions.',
//     link: 'https://www.hackerrank.com/certificates/iframe/6dc828f31013',
//     image: '/assets/certificates/cert1.png',
//   },
//   {
//     title: 'JavaScript Intermediate',
//     platform: 'HackerRank',
//     dateEarned: '2024',
//     description: 'Strengthened skills in JavaScript with advanced concepts like promises, callbacks, and ES6 features.',
//     link: 'https://www.hackerrank.com/certificates/iframe/6ef9b8e5ff2a',
//     image: '/assets/certificates/cert1.png',
//   },
// ];

export const skills = [
  {
    title: 'My Skills',
    skillList: [
      {
        icon: <FaReact className='text-7xl text-react' />,
        title: 'React',
      },
      {
        icon: <RiNextjsFill className='text-7xl text-next' />,
        title: 'Next.js',
      },
      {
        icon: <FaAngular className='text-7xl text-vue' />,
        title: 'Angular',
      },
      {
        icon: <FaNodeJs className='text-7xl text-node' />,
        title: 'Node.js',
      },
      {
        icon: <SiExpress className='text-7xl text-express' />,
        title: 'Express',
      },
      {
        icon: <FaJs className='text-7xl text-js' />,
        title: 'JavaScript',
      },
      // {
      //   icon: <SiCsharp className='text-7xl text-js' />,
      //   title: 'C#',
      // },
      {
        icon: <SiTailwindcss className='text-7xl text-tailwind' />,
        title: 'Tailwind CSS',
      },
      {
        icon: <SiMongodb className='text-7xl text-mongodb' />,
        title: 'MongoDB',
      },
      // {
      //   icon: <SiMysql className='text-7xl text-mysql' />,
      //   title: 'MySQL',
      // },
      // {
      //   icon: <SiPostgresql className='text-7xl text-postgresql' />,
      //   title: 'PostgreSQL',
      // },
      {
        icon: <SiGit className='text-7xl text-git' />,
        title: 'Git',
      },
      // {
      //   icon: <FaDocker className='text-7xl text-git' />,
      //   title: 'Docker',
      // },
      {
        icon: <FaBootstrap className='text-7xl text-git' />,
        title: 'Bootstrap',
      },
      {
        icon: <FaFigma className='text-7xl text-git' />,
        title: 'Figma',
      },
      {
        icon: <SiThreedotjs className="text-7xl text-three.js" />,
        title: 'Three.js',
      },
    ]
  }
];