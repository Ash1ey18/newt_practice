import React from "react";

import { Section } from "./style";

export default function SectionWraper({ type, children }) {
  return <Section type={type}>{children}</Section>;
}
