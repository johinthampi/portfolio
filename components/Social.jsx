import Link from 'next/link';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/johinthampi' },
    { icon: <FaHackerrank />, path: 'https://www.hackerrank.com/profile/johinthampi' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/johinthampi/' },
    { icon: <SiLeetcode />, path: 'https://leetcode.com/u/johinthampi/' },
]

const Social = ({ contaierStyles, iconStyles, onSocialClick }) => {
    return (
        <div className={contaierStyles}>
            {socials.map((item, index) => {
                return (
                    <a
                        key={index}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconStyles}
                        onClick={() => onSocialClick(item.path)}
                        >
                        {item.icon}
                    </a>
                );
            })}
        </div>
    )
}

export default Social