import { useContext } from 'react';
import { TweenLite } from 'gsap';
import 'gsap/ScrollToPlugin';
import { AppContext } from '../context';

const useLinkClick = ref => {
  const [state, setState] = useContext(AppContext);

  // Link Scroll Handler
  const toScroll = () => {
    setState(state => ({
      ...state,
      toggleMenuState: 'off'
    }));
    TweenLite.to(window, 0.8, {
      scrollTo: ref.current,
      delay: 0.65,
      ease: 'Power4.easeOut',
      autoKill: false
    });
  };

  return {
    toggleMenuState: state.toggleMenuState,
    toScroll
  };
};

export default useLinkClick;
