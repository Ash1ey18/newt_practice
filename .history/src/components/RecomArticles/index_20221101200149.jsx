import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecomArticles() {
  return (
    <section>
      <h2>おすすめの記事</h2>
      <div>
        <div style={{ positon: "relative", width: "100%", height: "200px" }}>
          <Image
            src="/img/img04.jpg"
            alt="heiyoo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <h1>
            <Link href="">ここにタイトル</Link>
          </h1>
        </div>
      </div>
    </section>
  );
}
