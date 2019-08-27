import { useContext } from 'react';
import { AppContext } from '../context';

const useResetMenuToggle = () => {
  const [state, setState] = useContext(AppContext);

  // Restart Menu Toggle Handler
  const handleResetMenuToggle = () => {
    setState(state => ({
      ...state,
      toggleMenuState: null
    }));
  };

  return {
    toggleMenuState: state.toggleMenuState,
    handleResetMenuToggle
  };
};

export default useResetMenuToggle;
