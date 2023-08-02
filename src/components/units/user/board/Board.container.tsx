import * as S from "../../../commons/boards/Board.style";
import { useEffect, useState } from "react";
import Radio02 from "../../../commons/inputs/radio/radio02/Radio02.container";
import Pagination01 from "../../../commons/paginations/pagination01/Pagination01.container";
import {
  IBoardDetail,
  IBoardDetailTitleType,
} from "../../../commons/boards/Board.types";
import { IFetchMember, IPropsMemberBoard } from "./Board.types";
import Button02 from "../../../commons/buttons/button02/Button02.container";
import { getPhone } from "../../../commons/utils/utils";
import Modal01 from "../../../commons/modals/modal01/Modal01.container";
import MemberBoardDetail from "./detail/BoardDetail.container";

export default function MemberBoard(props: IPropsMemberBoard) {
  const BOARD_DETAIL: IBoardDetail = {
    title: ["아이디", "이름", "핸드폰", "회원상태", "상세보기"],
    columns: "1.5fr 1fr 1fr 1fr 1fr",
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

  const onClickUserStateType = (radioNum: number) => {
    props.setUserStateType(Number(radioNum));
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
            <S.SearchHead>회원상태</S.SearchHead>
            <S.SearchBody>
              <Radio02
                onClickRadio={onClickUserStateType}
                radioData={props.USER_STATE_TYPE}
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
              {paginatedData?.map((el: IFetchMember) => (
                <S.BoardItemWrapper
                  key={el.id}
                  isColumns={BOARD_DETAIL.columns}
                >
                  <S.BoardItem>{el.email}</S.BoardItem>
                  <S.BoardItem>{el.name}</S.BoardItem>
                  <S.BoardItem>{getPhone(String(el.phone))}</S.BoardItem>
                  <S.BoardItem>
                    <S.BoardItemState className={el.state ? "" : "red"}>
                      {el.state ? "정상" : "정지"}
                    </S.BoardItemState>
                  </S.BoardItem>
                  <S.BoardItem>
                    <Button02
                      btnId={el.id}
                      onClickButton={props.onClickUserDetail}
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
        modalIcon={props.modalTitle.icon}
        modalTitle={props.modalTitle.title}
        isModal={props.isModal}
        modalCurrentTarget={props.modalCurrentTarget}
        modalToggle={props.modalToggle}
        modalDetail={<MemberBoardDetail boardId={props.boardId} />}
      />
    </S.Wrapper>
  );
}
