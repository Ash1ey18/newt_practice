import React from "react";
import Image from "next/image";
import { RcmContainer } from "./styled.js";

export default function Reccomend() {
  return (
    <RcmContainer>
      <div style={{ width: "100%", height: "60%", position: "relative" }}>
        <Image
          src="/img/img02.jpg"
          alt="there are many ships on the river."
          layout="fill"
          objectFit={"contain"}
        />
      </div>
    </RcmContainer>
  );
}
