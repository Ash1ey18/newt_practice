import React from "react";
import Image from "next/image";
import { Wraper } from "./style";

export default function ArticleImg({ src, alt, priority }) {
  return (
    <Link href={`/${id}`}>
      <a>
        <Wraper>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            priority={priority ? "ture" : undefined}
          />
        </Wraper>
      </a>
    </Link>
  );
}
