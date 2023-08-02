import styled from "@emotion/styled";
import { IIsColumns } from "./Board.types";

export const Wrapper = styled.div``;
export const BoardWrapper = styled.div`
  width: 100%;
`;
export const BoardContainer = styled.div`
  width: 100%;
`;
export const Board = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
export const BoardHead = styled.div`
  height: 58px;
  display: grid;
  grid-template-columns: ${(props: IIsColumns) => props.isColumns};
  text-align: center;
  align-items: center;
  background: #f9f9f9;
  font-weight: 700;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
`;

export const BoardBody = styled.div``;
export const BoardItemWrapper = styled.div`
  height: auto;
  min-height: 50px;
  text-align: center;
  display: grid;
  grid-template-columns: ${(props: IIsColumns) => props.isColumns};
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  color: #666666;
`;
export const BoardItem = styled.span`
  padding: 0 20px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &.board-item-left {
    text-align: left;
  }
  span {
    cursor: pointer;
  }
  strong {
    font-weight: 500;
    &.on {
      font-weight: 700;
      color: #0d8f68;
    }
  }
`;
export const BoardItemState = styled.span`
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

// SearchWrapper
export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  border-top: 1px solid #e9e9e9;
`;
export const Search = styled.div`
  display: flex;
  border: 1px solid #e9e9e9;
  margin-top: -1px;
`;
export const SearchHead = styled.div`
  width: 139px;
  padding: 18px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: #666666;
  background: #f9f9f9;
  border-right: 1px solid #e9e9e9;
`;
export const SearchBody = styled.div`
  width: calc(100% - 139px);
  padding: 18px 30px;
`;
export const BoardTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #444444;
  margin-bottom: 20px;
`;

// DashBoard
export const DashBoardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 558px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #999999;
  }
`;
export const DashBoardItem = styled.span`
  padding: 0 20px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &.board-item-left {
    text-align: left;
  }
  strong {
    font-weight: 500;
    &.on {
      font-weight: 700;
      color: #0d8f68;
    }
  }
`;
