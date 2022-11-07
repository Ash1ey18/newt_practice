import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LocationDiv } from "./style";

export default function LoctionPoint() {
  return     (


  
  <LocationDiv>
  <Image
    src="/img/mappoint.svg"
    alt="⏉"
    width={isTablet ? 16 : 14}
    height={isTablet ? 16 : 14}
  />
  <Link href="">
    <a>アジア</a>
  </Link>
  <Image
    src="/img/pointer.svg"
    alt=">"
    width={isTablet ? 16 : 14}
    height={isTablet ? 16 : 14}
  />
  <Link href="">
    <a>台湾</a>
  </Link>
</LocationD>;
  )
  
}
