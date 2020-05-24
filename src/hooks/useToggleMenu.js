import { useContext } from 'react';
import { AppContext } from '../context';

const useToggleMenu = () => {
  const [state, setState] = useContext(AppContext);

  // Menu Toggle Handler
  const handleMenuToggle = () => {
    if (state.toggleMenuState === null) {
      setState(state => ({ ...state, toggleMenuState: 'on' }));
    } else {
      setState(state => ({
        ...state,
        toggleMenuState: state.toggleMenuState === 'off' ? 'on' : 'off'
      }));
    }
  };

  return {
    toggleMenuState: state.toggleMenuState,
    handleMenuToggle
  };
};

export default useToggleMenu;
