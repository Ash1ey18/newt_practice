/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wraper } from "./style";

export default function ArticleImg({ src, alt, priority, id }) {
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
}
