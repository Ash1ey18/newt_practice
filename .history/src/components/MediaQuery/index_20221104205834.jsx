import React from "react";
import { useMediaQuery } from "react-responsive";

const Mq = function () {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
};
