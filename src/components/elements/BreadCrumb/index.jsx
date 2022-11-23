import Link from "next/link";
import React from "react";
import Image from "next/image";
import { WrapperNav } from "./style";
export default function BreadCrumb({ areaObj }) {
  const newAreaObj = { ...areaObj };
  const areaName = newAreaObj.name;
  const areaId = newAreaObj.id;
  return (
    <WrapperNav>
      <Link href="/">
        <a>トップ</a>
      </Link>
      <Image src="/img/pointerBlack.svg" alt=">" width={14} height={14} />
      <Link href={`/areas/${areaId}`}>
        <a>{areaName}</a>
      </Link>
    </WrapperNav>
  );
}
