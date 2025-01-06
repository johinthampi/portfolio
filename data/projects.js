import { FaUnity, FaLaravel, FaVuejs, FaNodeJs, FaReact, FaSass, FaAngular, FaDocker, FaBootstrap, FaMagic, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiMongodb, SiCsharp, SiExpress, SiInertia, SiMysql, SiQuasar, SiTailwindcss, SiSpringboot, SiThreedotjs } from 'react-icons/si'
import { BiLogoPostgresql } from "react-icons/bi";
import { RiJavascriptFill, RiReactjsFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';

export const techIcons = {
  React: <RiReactjsFill className='text-accent' />,
  Unity: <FaUnity className='text-accent' />,
  Laravel: <FaLaravel className='text-accent' />,
  Vue: <FaVuejs className='text-accent' />,
  Inertia: <SiInertia className='text-accent' />,
  MySql: <SiMysql className='text-accent' />,
  MongoDB: <SiMongodb className='text-accent' />,
  'Express.js': <SiExpress className='text-accent' />,
  React: <FaReact className='text-accent' />,
  'Node.js': <FaNodeJs className='text-accent' />,
  'Sass': <FaSass className='text-accent' />,
  'CSS': <FaCss3Alt className='text-accent' />,
  'Tailwind.css': <SiTailwindcss className='text-accent' />,
  'Javascript': <RiJavascriptFill className='text-accent' />,
  'Three.js': <SiThreedotjs className='text-accent' />,
  'HTML': <FaHtml5 className='text-accent' />,
  'Angular': <FaAngular className='text-accent' />,
  'Bootstrap': <FaBootstrap className='text-accent' />,
  GSAP: <TbBrandFramerMotion className='text-accent'/>
}

export const projects = [
  {
    num: '01',
    category: 'FrontEnd',
    title: 'Apple Clone',
    description: '3D Website clone of Iphone.',
    stack: [{ name: "React" }, { name: "Tailwind.css" }, { name: "Three.js" } , { name: "GSAP" }],
    image: '/assets/projects/iphone.png',
    live: 'https://appleclone-sable.vercel.app',
    github: 'https://github.com/johinthampi/appleclone',
  },
  {
    num: '02',
    category: 'Application',
    title: 'Random Quote Generator',
    description: 'A JavaScript application that displays random quotes with a built-in reading feature using HTML, CSS, and JS.',
    stack: [{ name: "Javascript" }, { name: "HTML" }, { name: "CSS" }],
    image: '/assets/projects/random.png',
    live: 'https://randomquotegenerator-omega.vercel.app',
    github: 'https://github.com/johinthampi/randomquotegenerator',
  },
  // {
  //   num: '03',
  //   category: 'Fullstack',
  //   title: 'Riviera Estate',
  //   description: 'A real estate website built using the MERN stack.',
  //   stack: [{ name: "MongoDB" }, { name: "Express.js" }, { name: "React" }, { name: "Node.js" }, { name: "Sass" }],
  //   image: '/assets/projects/real-estate.png',
  //   live: '',
  //   github: 'https://github.com/zachary013/real-estate-app-mern',
  // },
  // {
  //   num: '04',
  //   category: 'Frontend',
  //   title: 'Taskify',
  //   description: 'An efficient To-Do List cross-platform application built using the Quasar Framework. The app helps users manage their tasks effectively with a clean interface.',
  //   stack: [{ name: "Vue" }, { name: "Quasar" }],
  //   image: '/assets/projects/todo.png',
  //   live: '',
  //   github: 'https://github.com/zachary013/quasar-todo-list-app',
  // },
  // {
  //   num: '05',
  //   category: 'Full Stack',
  //   title: 'BookClub',
  //   description: 'BookClub is a social app that allows users to discover, borrow and share books. The app provides personalized recommendations and facilitates virtual book clubs and events.',
  //   stack: [{ name: "Spring Boot" }, { name: "Angular" }, { name: "PostgreSQL" }, { name: "Docker" }],
  //   image: '/assets/projects/social_book.jpg',
  //   live: '',
  //   github: 'https://github.com/zachary013/spring-angular-book-network',
  // },
  // {
  //   num: '06',
  //   category: 'Full Stack',
  //   title: 'Bank Of Morocco',
  //   description: 'Banking system application that includes features such as adding clients, employees, and groups, creating accounts, as well as handling withdrawals and payments.',
  //   stack: [{ name: "Spring Boot" }, { name: "Angular" }, { name: "MySql" }, { name: "Bootstrap" }],
  //   image: '/assets/projects/bank-of-morocco.png',
  //   live: '',
  //   github: 'https://github.com/zachary013/gestion-compte-bancaire-spring',
  // }
]