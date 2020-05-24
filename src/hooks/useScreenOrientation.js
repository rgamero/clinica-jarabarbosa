import { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const useScreenOrientation = () => {
  let isNewOrientation;
  const [state, setState] = useContext(AppContext);

  // Screen orientation handler
  const handleOrientation = () => {
    const orientation = window.screen.orientation.type;
    isNewOrientation = state.prevScrollpos !== orientation;

    setState(state => ({
      ...state,
      orientation,
      isNewOrientation
    }));

    setTimeout(() => {
      setState(state => ({
        ...state,
        isNewOrientation: false
      }));
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientation);
    return () => {
      window.removeEventListener('orientationchange', handleOrientation);
    };
  });

  return {
    prevOrientation: state.prevOrientation,
    isNewOrientation: state.isNewOrientation
  };
};

export default useScreenOrientation;
