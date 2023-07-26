import * as S from "./Dashboard.style";
import { BsFillPlusSquareFill } from "react-icons/bs";
import UserChart from "./chart/UserChart.container";
import PaymentChart from "./chart/PaymentChart.container";

export default function Dashboard() {
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
          <div>콘텐츠</div>
        </S.Contents>
      </S.PageSection>
    </S.Wrapper>
  );
}
