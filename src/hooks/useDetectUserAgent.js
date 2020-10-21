import { useEffect } from 'react';

const getUserAgent = (userAgent) => {
  const isAndroid = Boolean(userAgent.match(/Android/i));
  const isIOS = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = Boolean(userAgent.match(/IEMobile/i));
  const isSSR = Boolean(userAgent.match(/SSR/i));
  const isIE = Boolean(/MSIE|Trident/.test(userAgent));

  const isMobile = Boolean(isAndroid || isIOS || isOpera || isWindows);
  const isDesktop = Boolean(!isMobile && !isSSR);

  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIOS,
    isSSR,
    isIE,
  };
};

const useDetectUserAgent = () => {
  useEffect(() => {}, []);
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  return getUserAgent(userAgent);
};

export default useDetectUserAgent;
