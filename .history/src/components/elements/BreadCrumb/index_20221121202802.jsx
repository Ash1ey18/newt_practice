import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
export default function BreadCrumb({ areaList, categoryList }) {
  const isTablet = useTabletMqContext();
  const area = { ...areaList[0] };
  const areaName = area.name;
  const category = { ...categoryList[0] };
  const categoryName = category.name;
  console.log(areaName);
  console.log(categoryName);
  return (
    <div>
      <div>
        <span>トップ</span>
        <Image
          src="/img/pointer.svg"
          alt=">"
          width={isTablet ? 16 : 14}
          height={isTablet ? 16 : 14}
        />
      </div>
    </div>
  );
}
