import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash'; 

function useScrollProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = debounce(() => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      const newCompletion = scrollHeight 
        ? (currentProgress / scrollHeight) * 100 
        : 0;

      setCompletion(Math.min(100, Math.max(0, newCompletion)));
    }, 100);

    window.addEventListener('scroll', updateScrollCompletion);

    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return completion;
}

export default useScrollProgress;
