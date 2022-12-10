import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Wraper } from "./style";

const ArticleImg = ({ src, alt, priority, id }) => {
  return (
    <Link href={`/blog/${id}`}>
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
};

export default ArticleImg;
