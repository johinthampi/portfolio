"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useRef } from 'react';
import useSound from "use-sound";

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Nav = () => {
  const pathname = usePathname();
  const [playClickSound] = useSound('/sounds/box-click.wav', { volume: 0.5 });

  const handleLinkClick = () => {
    playClickSound();
  };

  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-blue-600 border-b-2 border-blue-600"
            } capitalize font-medium hover:text-blue-600 transition-all `}
            onClick={handleLinkClick}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;