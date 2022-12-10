import Image from "next/image";
import Link from "next/link";
import React from "react";

import { WrapperNav } from "./style";
const BreadCrumb = ({ navObj }) => {
  const newNavObj = { ...navObj };
  const name = newNavObj.name;
  const id = newNavObj.id;
  return (
    <WrapperNav>
      <Link href="/">
        <a>トップ</a>
      </Link>
      <Image src="/img/pointerBlack.svg" alt=">" width={14} height={14} />
      <Link href={`/areas/${id}`}>
        <a>{name}</a>
      </Link>
    </WrapperNav>
  );
};
export default BreadCrumb;
