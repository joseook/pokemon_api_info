'use client';
import { motion } from 'framer-motion';
import useScrollProgress from '@/hooks/useScrollProgress';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}>
        {children}
      </motion.main>
      <div 
        role="progressbar" 
        aria-valuenow={completion} 
        aria-valuemin={0} 
        aria-valuemax={100} 
        style={{ height: `${completion}%` }} 
        className="fixed z-50 bg-primary w-1 top-0 right-0 transition-all duration-700">
      </div>
      
    </>
  );
};

export default Template;
