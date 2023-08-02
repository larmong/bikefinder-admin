import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Tab = styled.ul`
  display: flex;
  height: 50px;
  margin-bottom: 30px;
`;

export const Manus = styled.li`
  width: 16.66%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e9e9e9;
  margin-left: -1px;
  font-size: 16px;
  line-height: 20px;
  color: #999999;
  cursor: pointer;
  &:first-of-type {
    margin-left: 0;
  }
  &.target {
    background: #0d8f68;
    color: #ffffff;
  }
`;
