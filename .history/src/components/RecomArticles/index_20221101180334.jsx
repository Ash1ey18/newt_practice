import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecomArticles() {
  return (
    <section>
      <h2>おすすめの記事</h2>
      <div>
        <Image src="/img/img04.jpg" alt="heiyoo" width={10} height={10} />
        <div>
          <h1>
            <Link href="">ここにタイトル</Link>
          </h1>
        </div>
      </div>
    </section>
  );
}
