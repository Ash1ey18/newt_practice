import React from "react";
import Image from "next/image";
// import { Test } from "./style";

export default function IntroApp() {
  return (
    <aside>
      <div>
        <h2>{`NEWT（ニュート）\n スマートに海外旅行`}</h2>
        <Image src="/img/newtAppIcon.svg" alt="" width={48} height={48} />
      </div>
      <Image src="/img/img26.png" alt="" width={100} height={100} />
    </aside>
  );
}
