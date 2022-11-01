import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SectionWraper,
  ArticlesWraper,
  ArticleWraper,
  ImageWraper,
  Title,
} from "./style";

export default function RecomArticles() {
  return (
    <SectionWraper>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
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
        <ArticleWraper>
          <ImageWraper>
            <Image
              src="/img/img05.jpg"
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
        <ArticleWraper>
          <ImageWraper>
            <Image
              src="/img/img06.jpg"
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
        <ArticleWraper>
          <ImageWraper>
            <Image
              src="/img/img07.jpg"
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
        <ArticleWraper>
          <ImageWraper>
            <Image
              src="/img/img08.jpg"
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
        <ArticleWraper>
          <ImageWraper>
            <Image
              src="/img/img09.jpg"
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
