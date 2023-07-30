import * as S from "../../dashboard/Dashboard.style";
import DashboardFaq from "../../dashboard/board/Board.container";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { IFetchFaq } from "../../dashboard/Dashboard.types";
import { useRouter } from "next/router";

export default function Member() {
  const router = useRouter();
  const [fetchBoard, setFetchBoard] = useState<IFetchFaq[]>([]);

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const boardCollection = collection(db, "user");
        let boardQuery = query(boardCollection, orderBy("date", "desc"));
        const data = await getDocs(boardQuery);
        const result = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

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
          <DashboardFaq boardData={fetchBoard} />
        </S.Content>
      </S.Contents>
    </S.Wrapper>
  );
}
