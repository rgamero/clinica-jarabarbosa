import React, { useState } from 'react';

export const AppContext = React.createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    toggleMenuState: null,
    prevScrollpos: window.pageYOffset,
    visible: true
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
