import React from "react";

import { Section } from "./style";

const SectionWraper = ({ type, children }) => {
  return <Section type={type}>{children}</Section>;
};
