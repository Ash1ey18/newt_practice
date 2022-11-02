import React from "react";
import { Section } from "./style";

export default function SectionWraper({ where, children }) {
  console.log(where);
  return <Section>{children}</Section>;
}
