import styled from "styled-components";
import { lh_md } from "src/variables";
export const WrapperDiv = styled.div`
  text-align: center;
  height: 24px;
  & > span {
    line-height: ${lh_md};
  }
`;
