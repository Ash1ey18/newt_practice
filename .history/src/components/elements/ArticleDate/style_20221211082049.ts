import { lh_md, marginTop, tabletWidth } from "src/variables";
import styled from "styled-components";
type ArticleDate_StyledTime_Props = {
  isTop?: boolean;
};
export const StyledTime = styled.time`
  width: 100%;
  font-size: 12px;
  opacity: 0.7;
  margin-top: ${(props) => (props.isTop ? 0 : marginTop)};
  @media only screen and (min-width: ${tabletWidth}) {
    line-height: ${lh_md};
    letter-spacing: 0.05em;
  }
`;
