import * as S from "./Board.style";
import { getDate } from "../../../../components/commons/utils/utils";

export default function DashboardFaq(props) {
  const BOARD_DETAIL = {
    title: ["제목", "상태", "날짜"],
    columns: "5fr 1fr 1fr",
  };

  return (
    <S.Wrapper>
      <S.BoardContainer>
        <S.Board widthValue="700px">
          <S.BoardHead isColumns={BOARD_DETAIL.columns}>
            {BOARD_DETAIL.title.map((el: any, index: number) => (
              <S.BoardItem key={index}>{el}</S.BoardItem>
            ))}
          </S.BoardHead>
          <S.BoardBody>
            {props.boardData?.map((el: any) => (
              <S.BoardItemWrapper key={el.id} isColumns={BOARD_DETAIL.columns}>
                <S.BoardItem className="board-item-left">
                  <span id={el.id} onClick={props.onClickBoardDetail}>
                    {el.title}
                  </span>
                </S.BoardItem>
                <S.BoardItem>
                  {el.state ? (
                    <strong className="on">답변완료</strong>
                  ) : (
                    <strong>미답변</strong>
                  )}
                </S.BoardItem>
                <S.BoardItem>{getDate(el.date)}</S.BoardItem>
              </S.BoardItemWrapper>
            ))}
          </S.BoardBody>
        </S.Board>
      </S.BoardContainer>
    </S.Wrapper>
  );
}
