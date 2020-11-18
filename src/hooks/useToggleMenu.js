import { useContext } from 'react';
import { AppContext } from '../context';
import { toggleMenuState } from '../context/actions';

const useToggleMenu = () => {
  const { state, dispatch } = useContext(AppContext);

  // Menu Toggle Handler
  const handleMenuToggle = () => {
    if (state.toggleMenuState === null) {
      dispatch(toggleMenuState('on'));
    } else {
      dispatch(toggleMenuState(state.toggleMenuState === 'off' ? 'on' : 'off'));
    }
  };

  return {
    toggleMenuState: state?.toggleMenuState,
    handleMenuToggle
  };
};

export default useToggleMenu;
