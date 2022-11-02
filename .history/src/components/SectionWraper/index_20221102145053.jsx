import React from "react";
import { Section } from "./style";

export default function SectionWraper({ where, children }) {
  return <Section where={where}>{children}</Section>;
}
