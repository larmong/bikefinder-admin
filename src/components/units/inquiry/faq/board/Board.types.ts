import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import { IPropsModalTitle } from "../../../../commons/modals/modal01/Modal01.types";

export interface IPropsInquiryFaqBoard {
  fetchData: IFetchFaq[];
  onClickFaqDetail: (event: CustomMouseEvent) => void;
  boardId: string;
  isModal: boolean;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
  modalToggle: (event: CustomMouseEvent) => void;
  modalTitle: IPropsModalTitle;
}

export interface IFetchFaq {
  id?: string;
  date: string;
  title: string;
  content: string;
  type: string;
}
