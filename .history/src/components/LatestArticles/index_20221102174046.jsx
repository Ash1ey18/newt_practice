import React from "react";
import Link from "next/link";

import SectionWraper from "src/components/SectionWraper";
import ArticleImg from "src/components/ArticleImg";
import { ArticlesWraper, ArticleWraper, Title, Location } from "./style";

export default function LatesetArticles() {
  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticlesWraper>
        <ArticleWraper>
          <ArticleImg srcNo="10" alt="heiyoo" />
          <Title>
            <Link href="/">
              記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
            </Link>
          </Title>
          <Location>
            <div>AAA → BBB</div>
          </Location>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="11" alt="heiyoo" />
          <Title>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </Title>
          <Location>
            <Link href="">
              <div>AAA → BBB</div>
            </Link>
          </Location>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="12" alt="heiyoo" />
          <Title>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </Title>
          <Location>
            <Link href="">AAA → BBB</Link>
          </Location>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="13" alt="heiyoo" />
          <Title>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </Title>
          <Location>
            <Link href="">
              <div>AAA → BBB</div>
            </Link>
          </Location>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="14" alt="heiyoo" />
          <Title>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </Title>
          <Location>
            <Link href="">
              <div>AAA → BBB</div>
            </Link>
          </Location>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="02" alt="heiyoo" />
          <Title>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </Title>
          <Location>
            <Link href="">
              <div>AAA → BBB</div>
            </Link>
          </Location>
        </ArticleWraper>
      </ArticlesWraper>
    </SectionWraper>
  );
}
