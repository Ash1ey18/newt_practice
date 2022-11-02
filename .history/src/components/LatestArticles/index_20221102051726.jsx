import React from "react";
import Image from "next/image";

export default function LatesetArticles() {
  return (
    <section>
      <h2>最新の記事</h2>
      <div>
        <div>
          <div>
            <Image src="/img/img10.jpg" alt="" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
}
