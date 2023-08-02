import * as S from "../../../../../commons/boards/detail/BoardDetail.style";
import { useEffect, useState } from "react";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { IPropsBoardDetail } from "../../../../../commons/boards/detail/BoardDetail.types";
import { getDate } from "../../../../../commons/utils/utils";
import Button01 from "../../../../../commons/buttons/button01/Button01.container";
import { db } from "../../../../../../commons/libraries/firebase/firebase.config";
import { IFetchFaq } from "../Board.types";

export default function FaqBoardDetail(props: IPropsBoardDetail) {
  const boardId = props.boardId;
  const [fetchBoard, setFetchBoard] = useState<IFetchFaq>();

  const onClickFaqSave = async () => {
    // 변경하고 저장
  };

  useEffect(() => {
    if (boardId) {
      const getBoard = async () => {
        const data = await query(
          collection(db, "inquiry"),
          where(documentId(), "==", boardId)
        );
        const getBoard = await getDocs(data);
        const result: any = getBoard.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchBoard(result[0]);
      };
      void getBoard();
    }
  }, [boardId]);

  return (
    <S.Wrapper>
      <S.Table>
        <S.TableItem className="t-head">등록일</S.TableItem>
        <S.TableItem>{fetchBoard && getDate(fetchBoard?.date)}</S.TableItem>
        <S.TableItem className="t-head">종류</S.TableItem>
        <S.TableItem>
          {fetchBoard?.type === "0"
            ? "대여 및 반납"
            : fetchBoard?.type === "1"
            ? "자전거 추가 배치"
            : fetchBoard?.type === "2"
            ? "대여소(개설/폐쇄)"
            : fetchBoard?.type === "3"
            ? "결제/환불/마일리지"
            : fetchBoard?.type === "4"
            ? "자전거 및 시설 관리"
            : fetchBoard?.type === "5"
            ? "앱 또는 홈페이지 문의"
            : ""}
        </S.TableItem>
        <S.TableItem className="t-head">제목</S.TableItem>
        <S.TableItem>{fetchBoard?.title}</S.TableItem>
        <S.TableItem className="t-head">내용</S.TableItem>
        <S.TableItem>{fetchBoard?.content}</S.TableItem>
      </S.Table>
      <Button01
        onClickButton={onClickFaqSave}
        btnWidth="200px"
        btnText="저장하기"
      />
    </S.Wrapper>
  );
}
