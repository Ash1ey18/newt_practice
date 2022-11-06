import styled from "styled-components";

export const Styledaside = styled.aside`
  border-top: 1px solid #eeee;
  padding: 24px 24px 20px 24px;
  text-align: center;
  font-size: 30px;
`;
export const Styledh1 = styled.h1`
  font-family: "Hiragino Kaku Gothic ProN";
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3em;
  margin: 0;
`;
export const Styledp = styled.p`
  font-size: 14px;
  white-space: pre-wrap;
  margin: 16px 0 0 0;
  letter-spacing: 0.1em;
`;

export const SnsListul = styled.ul`
  list-style: none;
  margin: 16px 0 0 0;
  display: flex;
  justify-content: center;
  gap: 24px;
  & a:hover {
    opacity: 0.6;
  }
`;
