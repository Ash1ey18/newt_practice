import React from "react";
import Image from "next/image";
import { Wraper } from "./style";

export default function ArticleImg() {
  return (
    <Wraper>
      <Image src="/img/img04.jpg" alt="" layout="fill" objectFit="contain" />
    </Wraper>
  );
}
