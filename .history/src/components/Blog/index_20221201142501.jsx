import React from "react";
import Image from "next/image";
import { TopImgWrapper, Header, Title, Description } from "./style";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";

export default function Blog({ blog }) {
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedUtcDate = blog.publishedAt;
  return (
    <article>
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
      {/* {areaList.map((_area) => {
          return <li key={_area.id}>{_area.name}</li>;
        })}
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        ></div> */}
    </article>
  );
}
