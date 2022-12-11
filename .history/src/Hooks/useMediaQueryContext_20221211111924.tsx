import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { laptopWidth, tabletWidth } from "src/variables";

export const TabletQueryContext = createContext(false);
export const LaptopQueryContext = createContext(false);

export const useMediaQueryContext = () => {
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
  return { isTablet, isLaptop };
};
