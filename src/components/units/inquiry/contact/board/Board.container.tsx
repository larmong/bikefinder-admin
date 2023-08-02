import * as S from "../../../../commons/boards/Board.style";
import { getDate } from "../../../../commons/utils/utils";
import { useEffect, useState } from "react";
import Modal01 from "../../../../commons/modals/modal01/Modal01.container";
import Radio02 from "../../../../commons/inputs/radio/radio02/Radio02.container";
import Button02 from "../../../../commons/buttons/button02/Button02.container";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";
import ContactBoardDetail from "./detail/BoardDetail.container";
import { IFetchContact, IPropsContactBoard } from "./Board.types";
import {
  IBoardDetail,
  IBoardDetailTitleType,
} from "../../../../commons/boards/Board.types";

export default function ContactBoard(props: IPropsContactBoard) {
  const BOARD_DETAIL: IBoardDetail = {
    title: ["날짜", "제목", "답변상태", "상세보기"],
    columns: "1fr 3fr 1fr 1fr",
  };

  const [filteredData, setFilteredData] = useState<IFetchContact[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.fetchData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchContact[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const onClickUserStateType = (radioNum: number) => {
    props.setFaqStateType(Number(radioNum));
  };

  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  useEffect(() => {
    setFilteredData(props.fetchData);
    setCurrentPage(1);
  }, [props.fetchData]);

  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.SearchWrapper>
          <S.Search>
            <S.SearchHead>답변상태</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickUserStateType}
                radioData={props.FAQ_STATE_TYPE}
                radioName="userStateType"
              />
            </S.SearchBody>
          </S.Search>
        </S.SearchWrapper>
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
              {paginatedData?.map((el: IFetchContact) => (
                <S.BoardItemWrapper
                  key={el.id}
                  isColumns={BOARD_DETAIL.columns}
                >
                  <S.BoardItem>{getDate(el.date)}</S.BoardItem>
                  <S.BoardItem className="board-item-left">
                    {el.title}
                  </S.BoardItem>
                  <S.BoardItem>
                    <S.BoardItemState className={el.state ? "on" : ""}>
                      {el.state ? "답변완료" : "미답변"}
                    </S.BoardItemState>
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
      <Modal01
        modalTitle="자주묻는질문 상세페이지"
        isModal={props.isModal}
        modalCurrentTarget={props.modalCurrentTarget}
        modalToggle={props.modalToggle}
        modalDetail={
          <ContactBoardDetail
            boardId={props.boardId}
            onChangeContent={props.onChangeContent}
          />
        }
      />
    </S.Wrapper>
  );
}
