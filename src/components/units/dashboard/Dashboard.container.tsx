import * as S from "./Dashboard.style";
import { BsFillPlusSquareFill } from "react-icons/bs";
import UserChart from "./chart/UserChart.container";
import PaymentChart from "./chart/PaymentChart.container";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../commons/libraries/firebase/firebase.config";
import DashboardFaq from "./board/Board.container";
import { Content } from "./Dashboard.style";
import { CustomMouseEvent } from "../../../commons/types/global.types";

export default function Dashboard() {
  const router = useRouter();

  const [fetchBoard, setFetchBoard] = useState([]);

  const onClickBoardDetail = (event: CustomMouseEvent) => {
    void router.push(`/faq/${event.currentTarget.id}`);
  };

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const boardCollection = collection(db, "faq");
        let boardQuery = query(
          boardCollection,
          orderBy("date", "desc"),
          limit(5)
        );

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
      <S.PageSection>
        <S.FlexContents>
          <S.ChartContainer>
            <S.Title>
              <span>전체회원</span>
              <S.TitleIcon>
                <BsFillPlusSquareFill />
              </S.TitleIcon>
            </S.Title>
            <S.Chart>
              <UserChart />
            </S.Chart>
          </S.ChartContainer>
          <S.ChartContainer>
            <S.Title>
              <span>정기권결제</span>
              <S.TitleIcon>
                <BsFillPlusSquareFill />
              </S.TitleIcon>
            </S.Title>
            <S.Chart>
              <PaymentChart />
            </S.Chart>
          </S.ChartContainer>
        </S.FlexContents>
        {/* 콘텐츠2 */}
        <S.Contents>
          <S.Title>
            <span>문의내역</span>
            <S.TitleIcon>
              <BsFillPlusSquareFill />
            </S.TitleIcon>
          </S.Title>
          <S.Content>
            <DashboardFaq
              boardData={fetchBoard}
              onClickBoardDetail={onClickBoardDetail}
            />
          </S.Content>
        </S.Contents>
      </S.PageSection>
    </S.Wrapper>
  );
}
