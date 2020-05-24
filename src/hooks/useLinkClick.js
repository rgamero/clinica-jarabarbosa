import { useContext } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { AppContext } from '../context';

gsap.registerPlugin(ScrollToPlugin);

const useLinkClick = ref => {
  const [state, setState] = useContext(AppContext);

  // Link Scroll Handler
  const toScroll = () => {
    setState(state => ({
      ...state,
      toggleMenuState: 'off'
    }));

    gsap.to(window, {
      duration: 0.8,
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
