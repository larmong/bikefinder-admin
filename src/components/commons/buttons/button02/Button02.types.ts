import { CustomMouseEvent } from "../../../../commons/types/global.types";

export interface IPropsButton02 {
  onClickButton?: (event: CustomMouseEvent) => void;
  btnClass?: string;
  btnText: string;
  btnWidth: string;
  btnId?: string;
}

export interface IPropsBtnWidth {
  btnWidth: string;
}
