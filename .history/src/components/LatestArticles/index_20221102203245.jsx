import React from "react";
import Link from "next/link";

import SectionWraper from "src/components/SectionWraper";
import ArticleImg from "src/components/ArticleImg";
import {
  ArticlesWraper,
  ArticleWraper,
  Title,
  Location,
  StyledLink,
} from "./style";

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
            <svg
              src="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                fill="#00CD67"
                d="M7 1.167A4.08 4.08 0 002.917 5.25C2.917 8.313 7 12.833 7 12.833s4.083-4.52 4.083-7.583A4.08 4.08 0 007 1.167zm0 5.541a1.459 1.459 0 110-2.917 1.459 1.459 0 010 2.917z"
              ></path>
            </svg>
            <Link href="">AAA</Link>
            <Link href="">BBB</Link>
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
            <svg
              src="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                fill="#00CD67"
                d="M7 1.167A4.08 4.08 0 002.917 5.25C2.917 8.313 7 12.833 7 12.833s4.083-4.52 4.083-7.583A4.08 4.08 0 007 1.167zm0 5.541a1.459 1.459 0 110-2.917 1.459 1.459 0 010 2.917z"
              ></path>
            </svg>
            <StyledLink href="">AAA</StyledLink> {">"} <Link href="">BBB</Link>{" "}
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
