import { IRadioDataClick } from "../radio02/Radio02.types";

export interface IPropsRadio01 {
  radioData: IRadioData[];
  radioName: string;
  onClickRadio: IRadioDataClick;
}

export interface IRadioData {
  name: string;
  price: number;
}
