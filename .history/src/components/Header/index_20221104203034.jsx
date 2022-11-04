import React from "react";
import Image from "next/image";

import { Container } from "./style";

export default function Header() {
  return (
    <Container>
      <Image src="/img/newtlogo1.svg" alt="newt" width={140} height={27} />
    </Container>
  );
}
