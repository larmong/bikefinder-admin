export interface IBoardDetail {
  title: string[];
  columns: string;
}

export interface IIsColumns {
  isColumns?: string;
}

export interface IFetchFaq {
  date: string;
  userId: string;
  title: string;
  content: string;
  answer: string;
  state: boolean;
  id: string;
}

export interface IPropsDashboardFaq {
  boardData: IFetchFaq[];
}
