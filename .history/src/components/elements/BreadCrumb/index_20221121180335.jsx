import Link from "next/link";
import React from "react";

export default function BreadCrumb({ areaList }) {
  const newAreaList = { ...areaList[0] };
  return (
    <>
      <Link href={`/${categoryId}`}>
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
      </Link>
    </>
  );
}
