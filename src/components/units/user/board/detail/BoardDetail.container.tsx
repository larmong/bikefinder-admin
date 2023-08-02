import * as S from "./BoardDetail.style";
import { useEffect, useState } from "react";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../../commons/libraries/firebase/firebase.config";
import { IPropsMemberBoardDetail } from "./BoardDetail.types";
import { IFetchMember } from "../Board.types";
import { getBirth, getDate, getPhone } from "../../../../commons/utils/utils";
import Button01 from "../../../../commons/buttons/button01/Button01.container";

export default function MemberBoardDetail(props: IPropsMemberBoardDetail) {
  const boardId = props.boardId;
  const [fetchBoard, setFetchBoard] = useState<IFetchMember>();
  const [userStateType, setUserStateType] = useState<number>(0);

  const onClickUserSave = async () => {
    // user 상태, 등급 변경하고 저장
  };

  const onClickUserStateType = (radioNum: number) => {
    setUserStateType(Number(radioNum));
  };

  useEffect(() => {
    if (boardId) {
      const getBoard = async () => {
        const data = await query(
          collection(db, "user"),
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
        <S.TableItem className="t-head">가입일</S.TableItem>
        <S.TableItem>{fetchBoard && getDate(fetchBoard?.date)}</S.TableItem>
        <S.TableItem className="t-head">상태</S.TableItem>
        <S.TableItem className={fetchBoard?.state ? "" : "red"}>
          {fetchBoard?.state ? "정상" : "정지"}
        </S.TableItem>
        <S.TableItem className="t-head">등급</S.TableItem>
        <S.TableItem>
          {fetchBoard?.level === 10 ? "관리자" : "일반회원"}
        </S.TableItem>
        <S.TableItem className="t-head">아이디</S.TableItem>
        <S.TableItem>{fetchBoard?.email}</S.TableItem>
        <S.TableItem className="t-head">이름</S.TableItem>
        <S.TableItem>{fetchBoard?.name}</S.TableItem>
        <S.TableItem className="t-head">핸드폰</S.TableItem>
        <S.TableItem>{fetchBoard && getPhone(fetchBoard?.phone)}</S.TableItem>
        <S.TableItem className="t-head">생년월일</S.TableItem>
        <S.TableItem>{fetchBoard && getBirth(fetchBoard?.birth)}</S.TableItem>
        <S.TableItem className="t-head">주소</S.TableItem>
        <S.TableItem>
          ({fetchBoard?.address.zipcode})&nbsp;
          {fetchBoard?.address.addressFirst}
          ,&nbsp;
          {fetchBoard?.address.addressSecond}
        </S.TableItem>
        <S.TableItem className="t-head">총 이용시간</S.TableItem>
        <S.TableItem>{fetchBoard?.use.minute} 분</S.TableItem>
        <S.TableItem className="t-head">총 이용거리</S.TableItem>
        <S.TableItem>{fetchBoard?.use.distance} km</S.TableItem>
      </S.Table>
      <Button01
        onClickButton={onClickUserSave}
        btnWidth="200px"
        btnText="저장하기"
      />
    </S.Wrapper>
  );
}
