import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  let width, height, scrollY;

  useEffect(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    scrollY = window.pageYOffset;
  }, []);

  const [state, setState] = useState({
    width,
    height,
    toggleMenuState: null,
    prevScrollpos: scrollY,
    visible: false
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
