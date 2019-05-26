import { useContext } from 'react';
import { AppContext } from '../context';

const useWindowWidth = () => {
  const [state, setState] = useContext(AppContext);

  // Window size handler
  const handleResize = () => {
    setState(state => ({ ...state, width: window.innerWidth }));
  };

  return {
    width: state.width,
    handleResize
  };
};

export default useWindowWidth;
