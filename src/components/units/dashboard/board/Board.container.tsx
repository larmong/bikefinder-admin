import * as S from "../../../commons/boards/Board.style";
import { getDate } from "../../../../components/commons/utils/utils";
import { IPropsDashboardFaq } from "../Dashboard.types";
import { IFetchDashboard } from "./Board.types";
import { IBoardDetail } from "../../../commons/boards/Board.types";

export default function DashboardFaq(props: IPropsDashboardFaq) {
  const BOARD_DETAIL: IBoardDetail = {
    title: ["제목", "상태", "날짜"],
    columns: "5fr 1fr 1fr",
  };

  return (
    <S.DashBoardWrapper>
      <S.BoardHead isColumns={BOARD_DETAIL.columns}>
        {BOARD_DETAIL.title.map((el: string, index: number) => (
          <S.DashBoardItem key={index}>{el}</S.DashBoardItem>
        ))}
      </S.BoardHead>
      <S.BoardBody>
        {props.boardData?.map((el: IFetchDashboard) => (
          <S.BoardItemWrapper key={el.id} isColumns={BOARD_DETAIL.columns}>
            <S.DashBoardItem className="board-item-left">
              {el.title}
            </S.DashBoardItem>
            <S.DashBoardItem>
              {el.state ? (
                <strong className="on">답변완료</strong>
              ) : (
                <strong>미답변</strong>
              )}
            </S.DashBoardItem>
            <S.DashBoardItem>{getDate(el.date)}</S.DashBoardItem>
          </S.BoardItemWrapper>
        ))}
      </S.BoardBody>
    </S.DashBoardWrapper>
  );
}
