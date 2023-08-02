import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPropsModal01 {
  modalIcon: any;
  modalTitle: string;
  isModal: boolean;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
  modalToggle: (event: CustomMouseEvent) => void;
  modalDetail: JSX.Element;
}

export interface IPropsModalTitle {
  icon: any;
  title: string;
}
