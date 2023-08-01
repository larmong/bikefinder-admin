import styled from "@emotion/styled";
import { IIsActive } from "./Pagination01.types";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;
export const PageBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const Page = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 3px;
  color: ${(props: IIsActive) => (props.isActive ? "#ffffff" : "#666666")};
  background: ${(props: IIsActive) => (props.isActive ? "#0D8F68" : "#ffffff")};
  cursor: pointer;
`;

export const PageNextBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  color: #666666;
  svg {
    width: 15px;
    height: 15px;
  }
`;
export const PagePrevBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  color: #666666;
  svg {
    width: 15px;
    height: 15px;
  }
`;
