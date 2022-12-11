// import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import { laptopWidth, tabletWidth } from "src/variables";

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

export default useMediaQuery;

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
