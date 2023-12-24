import React from 'react';
import Link from 'next/link';

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
    name: 'GitHub',
    url: 'https://github.com/seuprojeto',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/seuprojeto',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/seuprojeto',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="flex items-center space-x-4">
          {getLinks.map((link) => (
            <Link key={link.name} href={link.path} className="hover:text-gray-500">
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <p>&copy; 2023 Seu Projeto. Todos os direitos reservados.</p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              {socialLink.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
