import React from "react";
import Image from "next/image";
import { Wraper } from "./style";

export default function ArticleImg({ src, alt, priority }) {
  return (
    <Wraper>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        // objectFit="contain"
        objectFit="cover"
        priority={priority ? "ture" : undefined}
      />
    </Wraper>
  );
}
