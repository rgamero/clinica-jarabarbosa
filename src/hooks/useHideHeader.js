import { useContext } from 'react';
import { AppContext } from '../context';
import useScrollPosition from './useScrollPosition';
import useDetectUserAgent from './useDetectUserAgent';

const useHideHeader = () => {
  const [state, setState] = useContext(AppContext);
  const { isMobile } = useDetectUserAgent();

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
