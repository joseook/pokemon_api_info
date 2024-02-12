import React from 'react';
import Link from 'next/link';

import { Github, Linkedin, Twitter} from 'lucide-react';

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

const socialLinks = [
  {
    icon: <Github size={25} />,
    url: 'https://github.com/joseook/pokemon_api_info',
  },
  {
    icon: <Twitter size={25} />,
    url: 'https://twitter.com/seuprojeto',
  },
  {
    icon: <Linkedin size={25} />,
    url: 'https://www.linkedin.com/in/seuprojeto',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto xl:flex flex-wrap justify-between">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {getLinks.map((link) => (
            <Link key={link.name} href={link.path} className="hover:text-gray-500">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p>&copy; 2023 Joseok. Todos os direitos reservados.</p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.icon}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
