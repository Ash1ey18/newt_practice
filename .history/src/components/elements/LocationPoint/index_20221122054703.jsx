/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationDiv } from "./style";
import { useMediaQuery } from "react-responsive";

export default function LoctionPoint({ isTop, areaList }) {
  const newAreaList = [...areaList];
  // console.log(newAreaList);
  const area1 = { ...newAreaList[0] };
  const area2 = { ...newAreaList[1] };
  console.log(area2);
  const area1Name = area1.name;
  const area1Id = area1.id;
  const area2Name = area2.name;
  const area2Id = area2.id;
  const [hydrated, setHydrated] = useState(false);
  const isTablet = useMediaQuery(
    { query: "(min-width: 640px)" },
    hydrated ? undefined : { deviceWidth: 1600 }
  );
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <LocationDiv isTop={isTop}>
      <Image
        src="/img/mappoint.svg"
        alt="Mapポインター"
        width={14}
        height={14}
      />
      <Link href={`/${area1Id}`}>
        <a>{area1Name}</a>
      </Link>
      {area2Id && (
        <Image
          src="/img/pointer.svg"
          alt=">"
          width={isTablet ? (isTop ? 16 : 14) : 14}
          height={isTablet ? (isTop ? 16 : 14) : 14}
        />
      )}
      <Link href={`/${area2Id}`}>
        <a>{area2Name}</a>
      </Link>
    </LocationDiv>
  );
}
