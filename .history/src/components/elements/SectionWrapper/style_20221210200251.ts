import { SectionWraper_Section_Props } from "src/types/style-type";
import { tabletWidth } from "src/variables";
import styled from "styled-components";

export const Section = styled.section<SectionWraper_Section_Props>`
  padding: 24px 0 32px;
  width: 100%;
  background-color: ${(props) =>
    props.isRecomArti === "recomArti" ? "#FAFAFA" : undefined};
  @media only screen and (min-width: ${tabletWidth}) {
    padding: 32px 0 64px;
  }
  > h2 {
    font-size: 20px;
    margin: 0 20px;
    @media only screen and (min-width: ${tabletWidth}) {
      letter-spacing: 0.05em;
      text-align: center;
      font-size: 28px;
    }
  }
`;
