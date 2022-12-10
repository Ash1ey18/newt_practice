import React, { FC } from "react";
import { SectionWraper_Props } from "src/types/article-type";

import { Section } from "./style";

const SectionWraper: FC<SectionWraper_Props> = ({ type, children }) => {
  return <Section type={type}>{children}</Section>;
};

export default SectionWraper;
