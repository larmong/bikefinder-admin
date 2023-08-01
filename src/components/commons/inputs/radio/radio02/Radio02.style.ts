import styled from "@emotion/styled";
import { mediaQuery } from "../../../../../commons/style/mediaQuery.style";

export const Radio = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  ${mediaQuery[2]} {
    gap: 12px 0;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  ${mediaQuery[2]} {
    width: 50%;
    gap: 4px;
  }
  ${mediaQuery[3]} {
    width: 100%;
  }
`;

export const RadioName = styled.span`
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.07em;
  color: #666666;
  ${mediaQuery[2]} {
    font-size: 14px;
    line-height: 10px;
  }
`;

export const RadioBtn = styled.input`
  &[type="radio"] {
    position: relative;
    cursor: pointer;
    appearance: none;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 2px solid #e9e9e9;
  }
  &[type="radio"]:checked {
    position: relative;
    border: 2px solid #0d8f68;
  }
  &[type="radio"]:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #0d8f68;
  }
  ${mediaQuery[2]} {
    &[type="radio"] {
      width: 17px;
      height: 17px;
    }
    &[type="radio"]:checked::before {
      width: 8px;
      height: 8px;
    }
  }
`;
