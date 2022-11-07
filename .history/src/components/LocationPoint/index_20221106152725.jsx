/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationDiv } from "./style";
import { useMediaQuery } from "react-responsive";

export default function LoctionPoint() {
  const [hydrated, setHydrated] = useState(false);
  const isTablet = useMediaQuery(
    { query: "(min-width: 640px)" },
    hydrated ? undefined : { deviceWidth: 1600 }
  );

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <LocationDiv>
      <Image
        src="/img/mappoint.svg"
        alt="⏉"
        width={isTablet ? 16 : 14}
        height={isTablet ? 16 : 14}
      />
      <Link href="">
        <a>アジア</a>
      </Link>
      <Image
        src="/img/pointer.svg"
        alt=">"
        width={isTablet ? 16 : 14}
        height={isTablet ? 16 : 14}
      />
      <Link href="">
        <a>台湾</a>
      </Link>
    </LocationDiv>
  );
}
