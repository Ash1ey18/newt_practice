import React, { useEffect, useState, useContext, createContext } from "react";
import { useMediaQuery } from "react-responsive";
import { tabletWidth, laptopWidth } from "src/variables";

export const TabletQueryContext = createContext();
export const LaptopQueryContext = createContext();

export function MediaQueryProvider({ children }) {
  const [hydrated, setHydrated] = useState(false);
  const isTablet = useMediaQuery(
    { query: `(min-width: ${tabletWidth})` },
    hydrated ? undefined : { deviceWidth: 1600 }
  );
  const isLaptop = useMediaQuery(
    { query: `(min-width: ${laptopWidth})` },
    hydrated ? undefined : { deviceWidth: 1600 }
  );
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <TabletQueryContext.Provider value={isTablet}>
      <LaptopQueryContext.Provider value={isLaptop}>
        {children}
      </LaptopQueryContext.Provider>
    </TabletQueryContext.Provider>
  );
}

export function useTabletMqContext() {
  return useContext(TabletQueryContext);
}
export function useLaptopMqContext() {
  return useContext(LaptopQueryContext);
}
