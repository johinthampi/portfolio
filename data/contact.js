import { FaPhoneAlt, FaEnvelope, FaLinkedin  } from 'react-icons/fa';
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export const contact = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 9446689909'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'johinthampi@gmail.com',
    action: () => window.location.href = "mailto:johinthampi@gmail.com"
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    description: 'Johin Thampi',
    action: () => window.open("https://www.linkedin.com/in/johinthampi/", "_blank")
  },
];