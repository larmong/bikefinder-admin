import styled from "@emotion/styled";
import { mediaQuery } from "../../../../commons/style/mediaQuery.style";

export const AuthNumBtn = styled.button`
  position: absolute;
  right: -100px;
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.07em;
  color: #ffffff;
  background: #333333;
  border-radius: 5px;
  z-index: 1;
  ${mediaQuery[2]} {
    width: 60px;
    position: initial;
    font-size: 11px;
    margin-left: 10px;
  }
`;
