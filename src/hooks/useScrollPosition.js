import { useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: Math.abs(window.scrollX), y: Math.abs(window.scrollY) }
    : { x: Math.abs(position.left), y: Math.abs(position.top) };
};

const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = useRef(getScrollPosition({ useWindow }));
  const pageYOffset = isBrowser ? window.pageYOffset : null;

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos, pageYOffset });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
};

export default useScrollPosition;
