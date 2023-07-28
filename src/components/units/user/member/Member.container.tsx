import * as S from "../../dashboard/Dashboard.style";

export default function Member() {
  return (
    <S.Wrapper>
      <S.Contents>
        <S.Title>
          <span>일반회원</span>
        </S.Title>
        <S.Content>{/*<DashboardFaq boardData={fetchBoard} />*/}</S.Content>
      </S.Contents>
    </S.Wrapper>
  );
}
