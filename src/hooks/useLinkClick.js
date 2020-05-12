import { useContext } from 'react';
import TweenLite from 'TweenLite';
import ScrollToPlugin from 'ScrollToPlugin';
import { AppContext } from '../context';

const plugins = [ScrollToPlugin];

const useLinkClick = ref => {
  const [state, setState] = useContext(AppContext);

  // Link Scroll Handler
  const toScroll = () => {
    setState(state => ({
      ...state,
      toggleMenuState: 'off'
    }));
    TweenLite.to(window, 0.8, {
      scrollTo: { y: ref.current, autoKill: false },
      delay: 0.65,
      ease: 'Power4.easeOut'
    });
  };

  return {
    toggleMenuState: state.toggleMenuState,
    toScroll
  };
};

export default useLinkClick;
