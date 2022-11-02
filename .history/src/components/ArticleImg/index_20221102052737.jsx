import React from "react";
import Image from "next/image";
import { Wraper } from "./style";

export default function ArticleImg({ srcNo, alt }) {
  return (
    <Wraper>
      <Image
        src={`/img/img${srcNo}.jpg`}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
    </Wraper>
  );
}
