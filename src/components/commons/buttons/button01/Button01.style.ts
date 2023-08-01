import styled from "@emotion/styled";
import { IPropsBtnWidth } from "./Button01.types";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const DefaultBtn = styled.button`
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props: IPropsBtnWidth) => props.btnWidth};
  height: 50px;
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
    width: 170px;
    height: 45px;
    font-weight: 500;
    font-size: 15px;
  }
`;
