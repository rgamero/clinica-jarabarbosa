import React, { useState } from 'react';

export const AppContext = React.createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    width: window.innerWidth,
    tracks: [
      {
        id: 1,
        name: 'Lost Chameleon - Genesis'
      },
      {
        id: 2,
        name: 'The Hipsta - Shaken Soda'
      },
      {
        id: 3,
        name: 'Tobu - Such Fun'
      }
    ],
    currentTrackIndex: null,
    isPlaying: false
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
