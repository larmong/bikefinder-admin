import * as S from "../../../../commons/boards/Board.style";
import { useEffect, useState } from "react";
// import { getPrice } from "../../../../../commons/utils/utils";
import Radio02 from "../../../../commons/inputs/radio/radio02/Radio02.container";
import Pagination01 from "../../../../commons/paginations/pagination01/Pagination01.container";
import {
  IBoardDetail,
  IBoardDetailTitleType,
} from "../../../../commons/boards/Board.types";
import { IFetchMember } from "./Board.types";

export default function MemberBoard(props) {
  const BOARD_DETAIL: IBoardDetail = {
    title: ["신청일자", "환불금액", "결제상품", "상태", "비고"],
    columns: "1fr 1fr 1fr 1fr 2fr",
  };

  const [filteredData, setFilteredData] = useState<IFetchMember[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;
  const noticeLength: number = props.boardData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;
  const paginatedData: IFetchMember[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const onClickPaymentDateType = (radioNum: number) => {
    props.setPaymentDateType(Number(radioNum));
  };

  const handlePageChange = (selectedPage: number) => {
    void setCurrentPage(selectedPage);
  };

  useEffect(() => {
    setFilteredData(props.boardData);
    setCurrentPage(1);
  }, [props.boardData]);

  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.SearchWrapper>
          <S.Search>
            <S.SearchHead>신청일자</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickPaymentDateType}
                radioData={props.PAYMENT_DATE_TYPE}
                radioName="paymentMethodType"
              />
            </S.SearchBody>
          </S.Search>
        </S.SearchWrapper>
        <S.BoardContainer>
          <S.Board widthValue="700px">
            <S.BoardHead isColumns={BOARD_DETAIL.columns}>
              {BOARD_DETAIL.title.map(
                (el: IBoardDetailTitleType, index: number) => (
                  <S.BoardItem key={index}>{el}</S.BoardItem>
                )
              )}
            </S.BoardHead>
            <S.BoardBody>
              {paginatedData.length === 0 ? (
                <S.BoardBody>
                  <S.BoardItemWrapper>환불내역이 없습니다.</S.BoardItemWrapper>
                </S.BoardBody>
              ) : (
                paginatedData?.map((el: IFetchMember) => (
                  <S.BoardItemWrapper
                    key={el.id}
                    isColumns={BOARD_DETAIL.columns}
                  >
                    <S.BoardItem>{el.date}</S.BoardItem>
                  </S.BoardItemWrapper>
                ))
              )}
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
