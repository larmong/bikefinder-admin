import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const TableBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  background: #0d8f68;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.07em;
  color: #ffffff;
  &.line {
    color: #0d8f68;
    background: #ffffff;
    border: 1px solid #0d8f68;
  }
  ${mediaQuery[0]} {
    width: auto;
    padding: 0 14px;
    height: 38px;
    font-weight: 500;
    font-size: 15px;
  }
  ${mediaQuery[2]} {
    width: 100%;
    height: 38px;
    font-size: 14px;
  }
`;
