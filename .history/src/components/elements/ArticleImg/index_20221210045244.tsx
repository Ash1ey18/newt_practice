import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { ArticleImg_Props } from "src/types/article-type";

import { Wraper } from "./style";

const ArticleImg: FC<ArticleImg_Props> = ({ src, alt, priority, id }) => {
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
