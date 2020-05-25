import { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const useWindowSizes = () => {
  const [state, setState] = useContext(AppContext);

  // Window size handler
  const handleResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setState(state => ({ ...state, width: w, height: h }));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width: state.width,
    height: state.height
  };
};

export default useWindowSizes;
