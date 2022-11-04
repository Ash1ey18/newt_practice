import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { Container } from "./style";
import Link from "next/link.js";

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  return (
    <Container>
      <Image src="/img/newtlogo1.svg" alt="newt" width={140} height={27} />
      {isDesktopOrLaptop && (
        <>
          <div>fadsjf</div>
          <div>fadsjf</div>
        </>
      )}
    </Container>
  );
}
