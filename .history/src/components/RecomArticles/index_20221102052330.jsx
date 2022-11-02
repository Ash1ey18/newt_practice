import React from "react";
import Link from "next/link";
import { SectionWraper, ArticlesWraper, ArticleWraper, Title } from "./style";
import ArticleImg from "src/components/ArticleImg";

export default function RecomArticles() {
  return (
    <SectionWraper>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg src="/img/img04.jpg" alt="heiyo" />
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
