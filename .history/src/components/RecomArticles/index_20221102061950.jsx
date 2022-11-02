import React from "react";
import Link from "next/link";
import { ArticlesWraper, ArticleWraper, Title } from "./style";
import SectionWraper from "src/components/SectionWraper";
import ArticleImg from "src/components/ArticleImg";

export default function RecomArticles() {
  return (
    <SectionWraper where={"recomArti"}>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
        <ArticleWraper>
          <ArticleImg srcNo="04" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="05" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="06" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="07" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="08" alt="heiyo" />
          <div>
            <Title>
              <Link href="">ここにタイトル</Link>
            </Title>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="09" alt="heiyo" />
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
