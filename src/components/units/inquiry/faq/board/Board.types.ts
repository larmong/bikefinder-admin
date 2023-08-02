// export interface IPropsBoardItem {
//   titleIcon: IIsHead;
//   title: string | undefined;
//   content: string | undefined;
//   company: string | undefined;
//   date: string | undefined;
// }

// export type IIsHead = boolean;

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
