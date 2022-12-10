import React, { FC } from "react";
import { SectionWraper_Props } from "src/types/article-type";

import { Section } from "./style";

const SectionWraper: FC<SectionWraper_Props> = ({ isRecomArti, children }) => {
  return <Section isRecomArti={isRecomArti}>{children}</Section>;
};

export default SectionWraper;
