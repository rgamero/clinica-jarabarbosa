import useDetectUserAgent from '../hooks/useDetectUserAgent';

const theme = (height, width, menuOn) => {
  const { isIOS } = useDetectUserAgent();
  return {
    fontRegular: 'Coco Reg',
    fontBold: 'Coco Bold',
    primaryColor: '#9b4091',
    secondaryColor: '#4dbdc6',
    vh: `${height}px`,
    vw: `${width}px`,
    fontSize: {
      xsm: '2.5rem',
      sm: '3rem',
      med: '3.75rem',
      big: '5rem',
    },
    ...(menuOn && !isIOS && { overflow: 'hidden' }),
  };
};

export default theme;
