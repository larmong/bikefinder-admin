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
import { IFetchContact } from "../Board.types";
import { getDate } from "../../../../../commons/utils/utils";
import Button01 from "../../../../../commons/buttons/button01/Button01.container";
import { db } from "../../../../../../commons/libraries/firebase/firebase.config";

export default function ContactBoardDetail(props: IPropsBoardDetail) {
  const boardId = props.boardId;
  const [fetchBoard, setFetchBoard] = useState<IFetchContact>();

  const onClickContactSave = async () => {
    // 변경하고 저장
  };

  useEffect(() => {
    if (boardId) {
      const getBoard = async () => {
        const data = await query(
          collection(db, "faq"),
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
        <S.TableItem className="t-head">답변상태</S.TableItem>
        <S.TableItem className={fetchBoard?.state ? "on" : ""}>
          {fetchBoard?.state ? "답변완료" : "미답변"}
        </S.TableItem>
        <S.TableItem className="t-head">회원아이디</S.TableItem>
        <S.TableItem>{fetchBoard?.userId}</S.TableItem>
        <S.TableItem className="t-head">제목</S.TableItem>
        <S.TableItem>{fetchBoard?.title}</S.TableItem>
        <S.TableItem className="t-head">내용</S.TableItem>
        <S.TableItem
          dangerouslySetInnerHTML={{
            __html: String(fetchBoard?.content),
          }}
        ></S.TableItem>
        <S.TableItem className="t-head">답변</S.TableItem>
        <S.TableItem className="editor">
          <S.Editor onChange={props.onChangeContent} />
        </S.TableItem>
      </S.Table>
      <Button01
        onClickButton={onClickContactSave}
        btnWidth="200px"
        btnText="저장하기"
      />
    </S.Wrapper>
  );
}
