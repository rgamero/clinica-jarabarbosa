import { useState, useEffect } from 'react';

const useClientRect = ref => {
  const [rect, setRect] = useState({});

  const set = () =>
    setRect(ref && ref.current ? ref.current.getBoundingClientRect() : {});

  useEffect(() => {
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  return [rect, ref];
};

export default useClientRect;
