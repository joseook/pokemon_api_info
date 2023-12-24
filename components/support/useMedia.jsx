// useMedia.jsx
import { useState, useEffect } from 'react';

const useMedia = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const isClient = typeof window === 'object';

    const updateMatches = () => {
      setMatches(mediaQuery.matches);
    };

    let mediaQuery;

    if (isClient) {
      mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      mediaQuery.addListener(updateMatches);

      return () => {
        mediaQuery.removeListener(updateMatches);
      };
    }
  }, [query]);

  return matches;
};

export default useMedia;
