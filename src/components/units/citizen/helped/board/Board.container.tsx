import * as S from "../../../../commons/boards/Board.style";
import { getDate } from "../../../../commons/utils/utils";
import { useState } from "react";
import Button02 from "../../../../commons/buttons/button02/Button02.container";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";
import { IFetchHelped, IPropsHelpedBoard } from "./Board.types";
import {
  IBoardDetail,
  IBoardDetailTitleType,
} from "../../../../commons/boards/Board.types";
import Modal01 from "../../../../commons/modals/modal01/Modal01.container";
import HelpedBoardDetail from "./detail/BoardDetail.container";

export default function HelpedBoard(props: IPropsHelpedBoard) {
  const BOARD_DETAIL: IBoardDetail = {
    title: ["날짜", "회사", "제목", "상세보기"],
    columns: "1fr 1fr 3fr 1fr",
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.fetchData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchHelped[] = props.fetchData.slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.BoardContainer>
          <S.Board>
            <S.BoardHead isColumns={BOARD_DETAIL.columns}>
              {BOARD_DETAIL.title.map(
                (el: IBoardDetailTitleType, index: number) => (
                  <S.BoardItem key={index}>{el}</S.BoardItem>
                )
              )}
            </S.BoardHead>
            <S.BoardBody>
              {paginatedData?.map((el: IFetchHelped) => (
                <S.BoardItemWrapper
                  key={el.id}
                  isColumns={BOARD_DETAIL.columns}
                >
                  <S.BoardItem>{getDate(el.date)}</S.BoardItem>
                  <S.BoardItem>{getDate(el.company)}</S.BoardItem>
                  <S.BoardItem className="board-item-left">
                    {el.title}
                  </S.BoardItem>
                  <S.BoardItem>
                    <Button02
                      btnId={el.id}
                      onClickButton={props.onClickHelpedDetail}
                      btnWidth="80%"
                      btnText="상세보기"
                    />
                  </S.BoardItem>
                </S.BoardItemWrapper>
              ))}
            </S.BoardBody>
          </S.Board>
        </S.BoardContainer>
        {paginatedData.length === 0 ? (
          ""
        ) : (
          <Pagination01
            noticeLength={noticeLength}
            pageSize={pageSize}
            handlePageChange={handlePageChange}
          />
        )}
      </S.BoardWrapper>
      <Modal01
        modalTitle="협력업체 상세페이지"
        isModal={props.isModal}
        modalCurrentTarget={props.modalCurrentTarget}
        modalToggle={props.modalToggle}
        modalDetail={<HelpedBoardDetail boardId={props.boardId} />}
      />
    </S.Wrapper>
  );
}
