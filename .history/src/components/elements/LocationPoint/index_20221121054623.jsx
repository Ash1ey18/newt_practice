/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationDiv } from "./style";
import { useMediaQuery } from "react-responsive";

export default function LoctionPoint({ isTop, categoryList, areaList }) {
  const newCategoryList = { ...categoryList };
  const category = { ...newCategoryList[0] };
  const newAreaList = { ...areaList };
  const area = { ...newAreaList[0] };

  const categoryName = category.name;
  const categoryId = category.id;
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
        width={isTablet ? (isTop ? 16 : 14) : 14}
        height={isTablet ? (isTop ? 16 : 14) : 14}
      />
      <Link href={`/${categoryId}`}>
        <a>{categoryName}</a>
      </Link>

      {areaList && (
        <Image
          src="/img/pointer.svg"
          alt=">"
          width={isTablet ? (isTop ? 16 : 14) : 14}
          height={isTablet ? (isTop ? 16 : 14) : 14}
        />
      )}
      <Link href={`/${areaId}`}>
        <a>{areaName}</a>
      </Link>
    </LocationDiv>
  );
}
