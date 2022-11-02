import React from "react";
import { Section } from "./style";

export default function SectionWraper({ backcolor, children }) {
  return <Section backcolor>{children}</Section>;
}
