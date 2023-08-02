import * as S from "../../../../commons/boards/Board.style";
import { getDate } from "../../../../commons/utils/utils";
import { IFetchNotice, IPropsNoticeBoard } from "./Board.types";
import {
  IBoardDetail,
  IBoardDetailTitleType,
} from "../../../../commons/boards/Board.types";
import Radio02 from "../../../../commons/inputs/radio/radio02/Radio02.container";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";
import { useEffect, useState } from "react";
import Button02 from "../../../../commons/buttons/button02/Button02.container";

export default function NoticeBoard(props: IPropsNoticeBoard) {
  const BOARD_DETAIL: IBoardDetail = {
    title: ["날짜", "제목", "답변상태", "상세보기"],
    columns: "1fr 3fr 1fr 1fr",
  };

  const [filteredData, setFilteredData] = useState<IFetchNotice[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.fetchData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchNotice[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const onClickNoticeStateType = (radioNum: number) => {
    props.setNoticeStateType(Number(radioNum));
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
            <S.SearchHead>공지상태</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickNoticeStateType}
                radioData={props.NOTICE_STATE_TYPE}
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
              {paginatedData?.map((el: IFetchNotice) => (
                <S.BoardItemWrapper
                  key={el.id}
                  isColumns={BOARD_DETAIL.columns}
                >
                  <S.BoardItem>{getDate(el.date)}</S.BoardItem>
                  <S.BoardItem className="board-item-left">
                    {el.title}
                  </S.BoardItem>
                  <S.BoardItem>
                    <S.BoardItemState className={el.top ? "on" : ""}>
                      {el.top ? "상위공지" : "일반공지"}
                    </S.BoardItemState>
                  </S.BoardItem>
                  <S.BoardItem>
                    <Button02
                      btnId={el.id}
                      onClickButton={props.onClickNoticeDetail}
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
