import { useContext } from 'react';
import { AppContext } from '../context';
import useScrollPosition from './useScrollPosition';
import useDetectUserAgent from './useDetectUserAgent';
import { visibleHeader } from '../context/actions';

const useHideHeader = () => {
  const { state, dispatch } = useContext(AppContext);
  const { isMobile } = useDetectUserAgent();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const visible = prevPos.y > currPos.y || isMobile;
      dispatch(visibleHeader(visible));
    },
    [isMobile]
  );

  return {
    visibleHeader: state?.visibleHeader
  };
};

export default useHideHeader;
