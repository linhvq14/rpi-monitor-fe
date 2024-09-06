'use client';

import { createContext, useState } from 'react';

type AppState = {
  isLoading?: boolean;
};

interface AppContext {
  appState: AppState;
  setAppLoading: (state: boolean) => void;
}

export const AppContext = createContext<AppContext>({} as AppContext);

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [appState, setAppState] = useState({
    isLoading: false,
  });

  const setAppLoading = (state: boolean) => {
    setAppState({ ...appState, isLoading: state });
  };

  return <AppContext.Provider value={{ appState, setAppLoading }}>{children}</AppContext.Provider>;
};
