import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTabletMqContext } from "src/Context/MediaQueryContext";
import { WrapperDiv } from "./style";
export default function BreadCrumb({ areaList, categoryList }) {
  const isTablet = useTabletMqContext();
  const area = { ...areaList[0] };
  const areaName = area.name;
  const category = { ...categoryList[0] };
  const categoryName = category.name;
  console.log(areaName);
  console.log(categoryName);
  return (
    <WrapperDiv>
      <ContainerDiv>
        <span>トップ</span>
        <Image
          src="/img/pointerBlack.svg"
          alt=">"
          width={isTablet ? 16 : 14}
          height={isTablet ? 16 : 14}
        />
        <span>ドイツ</span>
      </ContainerDiv>
    </WrapperDiv>
  );
}
