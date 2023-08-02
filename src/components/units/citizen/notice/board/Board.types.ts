import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import { IRadioData } from "../../../../commons/inputs/radio/radio02/Radio02.types";
import { IPropsModalTitle } from "../../../../commons/modals/modal01/Modal01.types";

export interface IFetchNotice {
  id?: string;
  top: boolean;
  date: string;
  title: string;
  content: string;
}

export interface IPropsNoticeBoard {
  fetchData: IFetchNotice[];
  NOTICE_STATE_TYPE: IRadioData[];
  setNoticeStateType: (radioNum: number) => void;
  onClickNoticeDetail: (event: CustomMouseEvent) => void;
  boardId: string;
  isModal: boolean;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
  modalToggle: (event: CustomMouseEvent) => void;
  modalTitle: IPropsModalTitle;
}
