/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationDiv, AreaDiv } from "./style";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
export default function LocationPoint({ isTop, areaList }) {
  const newAreaList = [...areaList];
  const isTablet = useTabletMqContext();
  return (
    <LocationDiv isTop={isTop}>
      <Image
        src="/img/mappoint.svg"
        alt="Mapポインター"
        width={14}
        height={14}
      />
      {newAreaList.map((area, i) => {
        const areaName = area.name;
        const areaId = area.id;
        return (
          <AreaDiv key={areaId}>
            <Link href={`/areas/${areaId}`}>
              <a>{areaName}</a>
            </Link>
            {i < 1 && newAreaList.length === 2 && (
              <Image
                src="/img/pointer.svg"
                alt=">"
                width={isTablet ? (isTop ? 16 : 14) : 14}
                height={isTablet ? (isTop ? 16 : 14) : 14}
              />
            )}
          </AreaDiv>
        );
      })}
    </LocationDiv>
  );
}
