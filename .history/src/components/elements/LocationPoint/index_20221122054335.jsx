/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationDiv } from "./style";
import { useMediaQuery } from "react-responsive";

export default function LoctionPoint({ isTop, areaList }) {
  // const newAreaList = { ...areaList };
  // console.log(newAreaList);
  const area = { ...newAreaList[0] };
  const areaName = area.name;
  const areaId = area.id;
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
      {areaList.map((area, i) => {
        return <></>;
      })}
      <Link href={`/${areaId}`}>
        <a>{areaName}</a>
      </Link>
      {i < 1 && (
        <Image
          src="/img/pointer.svg"
          alt=">"
          width={isTablet ? (isTop ? 16 : 14) : 14}
          height={isTablet ? (isTop ? 16 : 14) : 14}
        />
      )}
    </LocationDiv>
  );
}