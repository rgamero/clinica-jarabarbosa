import { useContext } from 'react';
import { isMobile } from 'react-device-detect';
import { AppContext } from '../context';

const useHideHeader = () => {
  const [state, setState] = useContext(AppContext);

  // Window scroll handler
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = state.prevScrollpos > currentScrollPos || isMobile;
    setState(state => ({ ...state, prevScrollpos: currentScrollPos, visible }));
  };

  return {
    visible: state.visible,
    handleScroll
  };
};

export default useHideHeader;
