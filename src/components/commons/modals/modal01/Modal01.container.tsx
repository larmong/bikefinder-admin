import * as S from "./Modal01.style";
import { IPropsModal01 } from "./Modal01.types";

export default function Modal01(props: IPropsModal01) {
  return (
    <>
      {props.isModal && (
        <S.Wrapper onClick={props.modalCurrentTarget}>
          <S.Modal>
            <S.ModalTop>
              <S.ModalTitle>{props.modalTitle}</S.ModalTitle>
              <S.CloseBtn onClick={props.modalToggle}>X</S.CloseBtn>
            </S.ModalTop>
            <S.Contents>{props.modalDetail}</S.Contents>
          </S.Modal>
        </S.Wrapper>
      )}
    </>
  );
}
