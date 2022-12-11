import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";
import { laptopWidth, tabletWidth } from "src/variables";

export const useMediaQuery = () => {
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

// export const TabletQueryContext = createContext(false);
// export const LaptopQueryContext = createContext(false);

// export const MediaQueryProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [hydrated, setHydrated] = useState(false);
//   const isTablet = useMediaQuery(
//     { query: `(min-width: ${tabletWidth})` },
//     hydrated ? undefined : { deviceWidth: 1600 }
//   );
//   const isLaptop = useMediaQuery(
//     { query: `(min-width: ${laptopWidth})` },
//     hydrated ? undefined : { deviceWidth: 1600 }
//   );
//   useEffect(() => {
//     setHydrated(true);
//   }, []);
//   return (
//     <TabletQueryContext.Provider value={isTablet}>
//       <LaptopQueryContext.Provider value={isLaptop}>
//         {children}
//       </LaptopQueryContext.Provider>
//     </TabletQueryContext.Provider>
//   );
// };

// export function useTabletMqContext() {
//   return useContext(TabletQueryContext);
// }
// export function useLaptopMqContext() {
//   return useContext(LaptopQueryContext);
// }
