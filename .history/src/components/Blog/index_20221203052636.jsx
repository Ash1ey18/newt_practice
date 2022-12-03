import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import {
  TopImgWrapper,
  Header,
  Title,
  Description,
  Article,
  LeadSentence,
  BlogContents,
} from "./style";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";
import Banner from "src/components/Banner";

import Toc from "src/components/Toc";

export default function Blog({ blog }) {
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedUtcDate = blog.publishedAt;
  useEffect(() => {
    const root = ReactDOM.createRoot(document.getElementById("blog_contents"));
    const BlogAddDom = () => {
      root.render(<p>HELLO WORLD!!</p>);
    };
    BlogAddDom();
    console.log();
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
      <Header>
        <LocationPoint areaList={areaList} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Signature publishedUtcDate={publishedUtcDate} />
      </Header>
      <Banner />
      <LeadSentence>{description}</LeadSentence>
      <Toc />
      {/* {areaList.map((_area) => {
        return <li key={_area.id}>{_area.name}</li>;
      })} */}

      <BlogContents id="blog_contents"></BlogContents>
    </Article>
  );
}
