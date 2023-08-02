import { CustomMouseEvent } from "../../../../../commons/types/global.types";

export interface IFetchHelped {
  id?: string;
  date: string;
  title: string;
  content: string;
  company: string;
}

export interface IPropsHelpedBoard {
  fetchData: IFetchHelped[];
  onClickHelpedDetail: (event: CustomMouseEvent) => void;
}
