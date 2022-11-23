import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import { WrapperNav } from "./style";
export default function BreadCrumb({ areaObj }) {
  const isTablet = useTabletMqContext();
  const newAreaObj = { ...areaObj };
  const areaName = newAreaObj.name;
  const areaId = newAreaObj.id;
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
      <Link href={`/areas/${areaId}`}>
        <a>{areaName}</a>
      </Link>
    </WrapperNav>
  );
}
