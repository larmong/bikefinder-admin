import * as S from "../../dashboard/Dashboard.style";
import DashboardFaq from "../../dashboard/board/Board.container";

export default function Member() {
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
