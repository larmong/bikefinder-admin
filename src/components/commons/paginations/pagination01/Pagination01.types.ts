import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IIsActive {
  isActive?: boolean;
}

export interface IPropsPagination01 {
  noticeLength: number;
  pageSize: number;
  handlePageChange: (event: number) => void;
}

export interface IPropsPagination01UI {
  nowPage: number;
  startPage: number;
  totalPages: number;
  onClickPagination: (event: CustomMouseEvent) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
