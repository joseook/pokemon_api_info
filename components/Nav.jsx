'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const getLinks = [
  {
    path: '#home',
    name: 'Home',
  },

  {
    path: '#CuriousPoke',
    name: 'CuriousPoke',
  },

  {
    path: '#InfoTrainner',
    name: 'InfoTrainners',
  },

  {
    path: '#PokeInfo',
    name: 'PokeInfo',
  },
];

const Nav = () => {
  const controls = useAnimation();
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (path) => {
    setActiveLink(path);
    animateUnderline(path);
  };

  const animateUnderline = (path) => {
    controls.start({ width: '100%', left: 0, transition: { duration: 0.5 } });
  };

  useEffect(() => {
    animateUnderline(activeLink);
  }, [activeLink]);

  return (
    <nav className="xl:block p-4">
      <div className="flex items-center justify-between text-bold text-[17px] ">
        <ul className="flex space-x-6">
          {getLinks.map((link) => (
            <li key={link.path} className="relative">
              <a
                href={link.path}
                className={`dark:hover:text-gray-300 hover:text-gray-900 cursor-pointer ${
                  activeLink === link.path ? 'dark:text-gray-300 text-black' : ''
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
              </a>
              {activeLink === link.path && (
                <motion.div
                  className="absolute bottom-0 left-0 dark:bg-white bg-black h-1 w-0"
                  animate={controls}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
