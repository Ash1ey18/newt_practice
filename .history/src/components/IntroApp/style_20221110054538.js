import styled from "styled-components";
import Image from "next/image";

export const Styledaside = styled.aside`
  border-top: 1px solid #eeeeee;
  padding: 24px 24px 20px 24px;
  @media only screen and (min-width: 640px) {
    display: grid;
    grid-template:
      "img areaA" auto
      "img areaA" auto
      / auto auto;
    justify-content: space-between;
  }
`;

export const StyledWrapperdiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
export const StyledSpan = styled.span`
  white-space: pre-wrap;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.29em;
`;
export const ImgWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: 245px !important;
  }
`;
export const StyledImage = styled(Image)`
  grid-area: img;
`;

export const BtnDiv = styled.div`
  margin-top: 24px;
  padding: 10px 0;
  background-color: #34cd68;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
`;
