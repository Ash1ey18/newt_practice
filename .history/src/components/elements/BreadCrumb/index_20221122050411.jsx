import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import { WrapperNav } from "./style";
export default function BreadCrumb({ areaList, categoryList }) {
  const isTablet = useTabletMqContext();
  const area = { ...areaList[0] };
  const areaName = area.name;
  const category = { ...categoryList[0] };
  const categoryName = category.name;
  console.log(areaName);
  console.log(categoryName);
  return (
    <WrapperNav>
      <Link href="/">
        <a>トップ</a>
      </Link>
      <Image
        src="/img/pointerBlack.svg"
        alt=">"
        width={isTablet ? 16 : 14}
        height={isTablet ? 16 : 14}
      />
      <Link href="/">
        <a>ドイツ</a>
      </Link>
    </WrapperNav>
  );
}
