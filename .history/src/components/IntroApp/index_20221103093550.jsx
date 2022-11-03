import React from "react";
import Image from "next/image";
import { StyledWrapperdiv, Styledh2 } from "./style";

export default function IntroApp() {
  return (
    <aside>
      <StyledWrapperdiv>
        <Image src="/img/newtAppIcon.svg" alt="" width={48} height={48} />
        <Styledh2>{`NEWT（ニュート\nスマートに海外旅行`}</Styledh2>
      </StyledWrapperdiv>
      <Image src="/img/img26.png" alt="" width={100} height={100} />
    </aside>
  );
}
