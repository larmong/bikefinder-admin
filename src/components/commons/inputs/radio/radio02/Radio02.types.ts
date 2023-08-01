export type IRadioDataClick = (radioNum: number) => void;

export interface IPropsRadio02 {
  radioData: IRadioData[];
  radioName: string;
  onClickRadio: IRadioDataClick;
}

export interface IRadioData {
  id: number;
  name: string;
  checkedState: boolean;
}
