import * as S from "../../../../commons/boards/Board.style";
import { useState } from "react";
import Button02 from "../../../../commons/buttons/button02/Button02.container";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";
import {
  IBoardDetail,
  IBoardDetailTitleType,
} from "../../../../commons/boards/Board.types";
import { IFetchFaq, IPropsInquiryFaqBoard } from "./Board.types";
import { getDate } from "../../../../commons/utils/utils";

export default function InquiryFaqBoard(props: IPropsInquiryFaqBoard) {
  const BOARD_DETAIL: IBoardDetail = {
    title: ["등록일자", "제목", "상세보기"],
    columns: "1fr 4fr 1fr",
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.fetchData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchFaq[] = props.fetchData.slice(
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
              {paginatedData?.map((el: IFetchFaq) => (
                <S.BoardItemWrapper
                  key={el.id}
                  isColumns={BOARD_DETAIL.columns}
                >
                  <S.BoardItem>{getDate(el.date)}</S.BoardItem>
                  <S.BoardItem className="board-item-left">
                    {el.title}
                  </S.BoardItem>
                  <S.BoardItem>
                    <Button02
                      btnId={el.id}
                      onClickButton={props.onClickFaqDetail}
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
    </S.Wrapper>
  );
}
