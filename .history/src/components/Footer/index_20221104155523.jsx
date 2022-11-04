import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <div>
        <h2>NEWTについて</h2>
        <ul>
          <li>NEWTとは</li>
          <li>NEWT Brand</li>
        </ul>
      </div>
      <div>
        <Image
          src="/img/twitterlogo2.svg"
          alt="twitterIcon"
          width={40}
          height={40}
        />
      </div>
    </footer>
  );
}
