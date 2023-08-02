import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  border-left: 1px solid #e9e9e9;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.05em;
  border-top: 1px solid #e9e9e9;
  margin-bottom: 30px;
`;
export const TableItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  &.t-head {
    background: #f9f9f9;
    justify-content: center;
  }
  &.red {
    color: #dc1919;
  }
  &.blue {
    color: #1938dc;
  }
  &.on {
    color: #0d8f68;
  }
`;
