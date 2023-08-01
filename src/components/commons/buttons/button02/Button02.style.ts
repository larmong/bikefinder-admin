import styled from "@emotion/styled";
import { IPropsBtnWidth } from "./Button02.types";

export const SmallBtn = styled.button`
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props: IPropsBtnWidth) => props.btnWidth};
  height: 30px;
  background: #0d8f68;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.07em;
  color: #ffffff;
  &.disabled {
    cursor: initial;
    color: #b0b0b0;
    background: #e9e9e9;
  }
`;
