import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import { IRadioData } from "../../../../commons/inputs/radio/radio02/Radio02.types";

export interface IFetchContact {
  id?: string;
  date: string;
  state: boolean;
  title: string;
  content: string;
  answer: string;
  userId: string;
}

export interface IPropsContactBoard {
  fetchData: IFetchContact[];
  FAQ_STATE_TYPE: IRadioData[];
  setFaqStateType: (radioNum: number) => void;
  onClickFaqDetail: (event: CustomMouseEvent) => void;
}
