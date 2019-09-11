import { useContext } from 'react';
import { AppContext } from '../context';

const useHideHeader = () => {
  const [state, setState] = useContext(AppContext);

  // Window scroll handler
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = state.prevScrollpos > currentScrollPos;
    setState(state => ({ ...state, prevScrollpos: currentScrollPos, visible }));
  };

  return {
    visible: state.visible,
    handleScroll
  };
};

export default useHideHeader;
