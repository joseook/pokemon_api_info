'use client';
import { Button } from '@/components/ui/button';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onClick={toggleTheme} className="relative">
      <motion.div
        animate={{ opacity: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <MoonStar className="absolute top-[24%] h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <motion.div
        animate={{ opacity: theme === 'light' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
    </Button>
  );
};

export default ThemeToggler;
