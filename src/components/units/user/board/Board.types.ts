import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { IRadioData } from "../../../commons/inputs/radio/radio02/Radio02.types";

export interface IFetchMember {
  id?: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
  date: string;
  state: boolean;
  level: number;
  rentalPassword: string;
  address: IAddressType;
  cardInfo: ICardInfoType;
  use: IUseType;
}

export interface IAddressType {
  zipcode: string;
  addressFirst: string;
  addressSecond: string;
}

export interface ICardInfoType {
  type: string;
  number: string;
}

export interface IUseType {
  distance: string;
  minute: string;
}

export interface IPropsMemberBoard {
  boardData: IFetchMember[];
  USER_STATE_TYPE: IRadioData[];
  setUserStateType: (radioNum: number) => void;
  onClickUserDetail: (event: CustomMouseEvent) => void;
  boardId: string;
  isModal: boolean;
  modalToggle: (event: CustomMouseEvent) => void;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
}
