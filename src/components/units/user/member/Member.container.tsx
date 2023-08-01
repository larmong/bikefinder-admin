import * as S from "../../dashboard/Dashboard.style";
import MemberBoard from "./board/Board.container";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { IFetchMember } from "./board/Board.types";

export default function Member() {
  const PAYMENT_DATE_TYPE = [
    {
      id: 0,
      name: "전체",
      checkedState: true,
    },
    {
      id: 1,
      name: "1주일",
      checkedState: false,
    },
    {
      id: 2,
      name: "1개월",
      checkedState: false,
    },
    {
      id: 3,
      name: "3개월",
      checkedState: false,
    },
    {
      id: 4,
      name: "6개월",
      checkedState: false,
    },
  ];

  const [fetchBoard, setFetchBoard] = useState<IFetchMember[]>([]);

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const boardCollection = collection(db, "user");
        let boardQuery = query(boardCollection, orderBy("date", "desc"));
        const data = await getDocs(boardQuery);
        const result = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IFetchMember[];

        setFetchBoard(result);
      } catch (error) {}
    };
    void getBoardData();
  }, []);

  return (
    <S.Wrapper>
      <S.Contents>
        <S.Title>
          <span>일반회원</span>
        </S.Title>
        <S.Content>
          <MemberBoard boardData={fetchBoard} />
        </S.Content>
      </S.Contents>
    </S.Wrapper>
  );
}
