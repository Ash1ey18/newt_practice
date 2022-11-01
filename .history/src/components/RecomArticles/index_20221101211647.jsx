import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SectionWraper,
  ArticlesWraper,
  ArticleWraper,
  ImageWraper,
  Title,
  // kokkara
} from "./style";

export default function RecomArticles() {
  return (
    <SectionWraper>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
        {for (let i = 0; i >= 6; i++ {
          return(<div>aaa</div>)
        })}
        <ArticleWraper>
          <ImageWraper>
            <Image
              src="/img/img04.jpg"
              alt="heiyoo"
              layout="fill"
              objectFit="contain"
            />
          </ImageWraper>
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
      </ArticlesWraper>
    </SectionWraper>
  );
}
