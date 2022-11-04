import React from "react";

import { useMediaQuery } from "react-responsive";
export default function Mq({ mq, children }) {
  const mediaType =
    mq === "tablet"
      ? "(min-width: 600px)"
      : mq === "pc"
      ? "(min-width: 1025px)"
      : undefined;
  const RequireMq = useMediaQuery({
    query: mq,
  });
  return RequireMq && <>{children}</>;
}
