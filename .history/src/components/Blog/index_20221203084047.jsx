import parse from "html-react-parser";
import Image from "next/image";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Banner from "src/components/Banner";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";
import Toc from "src/components/Toc";

import {
  Article,
  BlogContents,
  ContentsWrapper,
  Description,
  Header,
  LeadSentence,
  Title,
  TopImgWrapper,
} from "./style";

export default function Blog({ blog }) {
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedUtcDate = blog.publishedAt;
  useEffect(() => {
    // const root = ReactDOM.createRoot(document.getElementById("blog_contents"));
    const BlogAddDom = (blog) => {
      const reactElm = parse(blog);
      // root.render(reactElm);
    };
    // BlogAddDom(blog.body);
  }, [blog.body]);
  return (
    <Article>
      <TopImgWrapper>
        <Image
          src={imgUrl}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </TopImgWrapper>
      <ContentsWrapper>
        <Header>
          <LocationPoint areaList={areaList} />
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Signature publishedUtcDate={publishedUtcDate} />
        </Header>
        <Banner />
        <LeadSentence>{description}</LeadSentence>
        <Toc />
        <BlogContents id="blog_contents"></BlogContents>
      </ContentsWrapper>
    </Article>
  );
}
