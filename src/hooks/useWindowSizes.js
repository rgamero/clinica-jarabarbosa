import { useContext } from 'react';
import { AppContext } from '../context';

const useWindowSizes = () => {
  const [state, setState] = useContext(AppContext);

  // Window size handler
  const handleResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setState(state => ({ ...state, width: w, height: h }));
  };

  return {
    width: state.width,
    height: state.height,
    handleResize
  };
};

export default useWindowSizes;
