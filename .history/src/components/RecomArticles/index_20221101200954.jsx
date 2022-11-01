import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RecomArticle, ArticleImageWraper } from "./style";

export default function RecomArticles() {
  return (
    <RecomArticle>
      <h2>おすすめの記事</h2>
      <div>
        <ArticleImageWraper
          style={{ positon: "relative", width: "100%", height: "200px" }}
        >
          <Image
            src="/img/img04.jpg"
            alt="heiyoo"
            layout="fill"
            objectFit="contain"
          />
        </ArticleImageWraper>
        <div>
          <h1>
            <Link href="">ここにタイトル</Link>
          </h1>
        </div>
      </div>
    </RecomArticle>
  );
}
