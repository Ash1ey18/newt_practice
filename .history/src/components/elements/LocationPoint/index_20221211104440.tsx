/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { useTabletMqContext } from "src/Hooks/useMediaQueryContext";
import { LocationPoint_Props } from "src/types/article-type";

import { AreaDiv, LocationDiv } from "./style";
const LocationPoint: FC<LocationPoint_Props> = ({ isTop, areaList }) => {
  const newAreaList = [...areaList];
  const isTablet = useTabletMqContext();
  return (
    <div>
      <LocationDiv isTop={isTop}>
        <Image
          src="/img/mappoint.svg"
          alt="Mapポインター"
          width={14}
          height={14}
        />
        {newAreaList.map((area, i) => {
          return (
            <AreaDiv key={area.id}>
              <Link href={`/areas/${area.id}`}>
                <a>{area.name}</a>
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
    </div>
  );
};
export default LocationPoint;
