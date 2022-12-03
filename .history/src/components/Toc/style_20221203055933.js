import styled from "styled-components";

export const TocSection = styled.section`
  background-color: #fafafa;
  padding: 20px;
  border-radius: 8px;
  color: #1f1f1f;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 12px;
  border-bottom: 1px solid #cbcbcb;
`;

export const ListTilte = styled.h3`
  position: relative;
  line-height: 24px;
  font-weight: 600;
  font-size: 15px;
  margin: 0;
  letter-spacing: 0.05em;
  padding-left: 32px;
  &::before {
    content: "1";
    position: absolute;
    top: 11px;
    left: 0;
    font-size: 12px;
    display: flex;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid #1f1f1f;
    border-radius: 20px;
  }
`;

export const TocContents = styled.div`
  margin-top: 12px;
`;

export const List = styled.ul`
  margin: 0;
`;
export const ListItem = styled.li`
  margin-top: 12px;
  font-size: 15px;
  list-style: none;
  letter-spacing: 0.08em;
  line-height: 28px;
`;
export const BtnContainer = styled.div`
  margin-top: 20px;
`;
export const TocBtn = styled.button`
  display: block;
  width: 240px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #1f1f1f;
  border-radius: 20px;
  background-color: #fafafa;
  font-size: 14px;
  font-weight: 700;
`;
