import Link from "next/link";
import React from "react";

export default function BreadCrumb({ areaList, categoryList }) {
  const area = areaList[0];
  const areaName = area.name;
  //   const area = newAreaList;
  console.log(areaList[0]);
  console.log(categoryList[0]);
  return (
    <>
      test
      {/* <Link href={`/${categoryId}`}>
        <a>{categoryName}</a>
      </Link>

      {areaName && (
        <Image
          src="/img/pointer.svg"
          alt=">"
          width={isTablet ? (isTop ? 16 : 14) : 14}
          height={isTablet ? (isTop ? 16 : 14) : 14}
        />
      )}
      <Link href={`/${areaId}`}>
        <a>{areaName}</a>
      </Link> */}
    </>
  );
}
