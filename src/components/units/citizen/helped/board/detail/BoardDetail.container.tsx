import * as S from "../../../../../commons/boards/detail/BoardDetail.style";
import { useEffect, useState } from "react";
import { getDate } from "../../../../../commons/utils/utils";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Button01 from "../../../../../commons/buttons/button01/Button01.container";
import { db } from "../../../../../../commons/libraries/firebase/firebase.config";
import { IPropsBoardDetail } from "../../../../../commons/boards/detail/BoardDetail.types";
import { IFetchHelped } from "../Board.types";

export default function HelpedBoardDetail(props: IPropsBoardDetail) {
  const boardId = props.boardId;
  const [fetchBoard, setFetchBoard] = useState<IFetchHelped>();

  const onClickHelpedSave = async () => {
    // 변경하고 저장
  };

  useEffect(() => {
    if (boardId) {
      const getBoard = async () => {
        const data = await query(
          collection(db, "helped"),
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
        <S.TableItem className="t-head">회사</S.TableItem>
        <S.TableItem>{fetchBoard?.company}</S.TableItem>
        <S.TableItem className="t-head">제목</S.TableItem>
        <S.TableItem>{fetchBoard?.title}</S.TableItem>
        <S.TableItem className="t-head">내용</S.TableItem>
        <S.TableItem>{fetchBoard?.content}</S.TableItem>
      </S.Table>
      <Button01
        onClickButton={onClickHelpedSave}
        btnWidth="200px"
        btnText="저장하기"
      />
    </S.Wrapper>
  );
}
