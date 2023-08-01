import * as S from "./Pagination01.style";
import { IPropsPagination01UI } from "./Pagination01.types";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function Pagination01UI(props: IPropsPagination01UI) {
  return (
    <S.Pagination>
      <S.PagePrevBtn onClick={props.onClickPrevPage}>
        <MdArrowBackIosNew />
      </S.PagePrevBtn>
      <S.PageBtn>
        {new Array(5).fill(1).map(
          (_, index) =>
            props.totalPages >= index + props.startPage && (
              <S.Page
                key={index + props.startPage}
                id={String(index + props.startPage)}
                isActive={props.startPage + index === props.nowPage}
                onClick={props.onClickPagination}
              >
                {index + props.startPage}
              </S.Page>
            )
        )}
      </S.PageBtn>
      <S.PageNextBtn onClick={props.onClickNextPage}>
        <MdArrowForwardIos />
      </S.PageNextBtn>
    </S.Pagination>
  );
}
