import React from "react";
import Image from "next/image";
import { ImgWrapper } from "./style";
export default function Blog({ blog }) {
  console.log(blog);

  const imgUrl = blog.main_img.url;
  return (
    <article>
      <div style={{ width: "200px", height: "200px", position: "relative" }}>
        <Image
          src={imgUrl}
          alt={"トップ画像"}
          layout="fill"
          sizes="(min-width:640px) 50vw"
          priority
        />
      </div>
      <p>{blog.publishedAt}</p>
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
