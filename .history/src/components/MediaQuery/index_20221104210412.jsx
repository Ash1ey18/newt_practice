import React from "react";

import { useMediaQuery } from "react-responsive";
export default function Mq() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  return isDesktopOrLaptop && <div>test</div>;
}
