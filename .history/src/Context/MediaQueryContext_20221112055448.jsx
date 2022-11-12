import React, { useEffect, useState, useContext, createContext } from "react";
import { useMediaQuery } from "react-responsive";
import { tabletWidth } from "src/variables";

export const MediaQueryContext = createContext();

export function MediaQueryProvider({ children }) {
  const [hydrated, setHydrated] = useState(false);
  const isTablet = useMediaQuery(
    { query: `(min-width: ${tabletWidth})` },
    hydrated ? undefined : { deviceWidth: 600 }
  );
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <MediaQueryContext.Provider value={isTablet}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useTabletMqContext() {
  return useContext(MediaQueryContext);
}
