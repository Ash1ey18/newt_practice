import React from "react";
import Image from "next/image";
import { ImgWrapper } from "./style";
import LocationPoint from "src/components/elements/LocationPoint";
import Signature from "src/components/elements/Signature";
import { Header } from "./style";
export default function Blog({ blog }) {
  const imgUrl = blog.main_img.url;
  const areaList = blog.areas;
  const title = blog.title;
  const description = blog.description;
  const publishedUtcDate = blog.publishedAt;
  return (
    <article>
      <ImgWrapper>
        <Image
          src={imgUrl}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </ImgWrapper>
      <Header>
        <LocationPoint areaList={areaList} />
        <h1>{title}</h1>
        <p>{description}</p>
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
