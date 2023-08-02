import { CustomMouseEvent } from "../../../../../commons/types/global.types";

export interface IPropsInquiryFaqBoard {
  fetchData: IFetchFaq[];
  onClickFaqDetail: (event: CustomMouseEvent) => void;
}

export interface IFetchFaq {
  id?: string;
  date: string;
  title: string;
  content: string;
  type: string;
}