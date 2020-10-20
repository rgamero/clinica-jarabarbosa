import { useContext } from 'react';
import { isMobile } from 'react-device-detect';
import { AppContext } from '../context';
import useScrollPosition from './useScrollPosition';

const useHideHeader = () => {
  const [state, setState] = useContext(AppContext);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const visible = prevPos.y > currPos.y || isMobile;
      setState(state => ({ ...state, visible }));
    },
    [isMobile]
  );

  return {
    visible: state.visible
  };
};

export default useHideHeader;
