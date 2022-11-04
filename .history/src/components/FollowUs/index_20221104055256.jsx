import React from "react";
import Image from "next/image";

export default function FollowUs() {
  return (
    <aside>
      <h1>Follow Us</h1>
      <p>
        最新の渡航ニュースやおすすめスポットなど、海外旅行の情報をお届けします✈️
      </p>
      <div>
        <Image
          src="/img/linelogo.svg"
          alt="ラインリンク"
          width={40}
          height={40}
        />
      </div>
    </aside>
  );
}
