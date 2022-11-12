import styled from "styled-components";
import { TabletWidth } from "src/variables";

export const Section = styled.section`
  padding: 24px 0 32px;
  width: 100%;
  letter-spacing: 0.05em;
  background-color: ${(props) =>
    props.type === "recomArti" ? "#FAFAFA" : undefined};
  @media only screen and (min-width: ${TabletWidth}) {
    padding: 32px 0 64px;
  }
  > h2 {
    font-size: 20px;
    margin: 0 20px;
    @media only screen and (min-width: ${TabletWidth}) {
      text-align: center;
      font-size: 28px;
    }
  }
`;
