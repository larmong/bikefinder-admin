import * as S from "./Radio02.style";
import { IPropsRadio02, IRadioData } from "./Radio02.types";

export default function Radio02(props: IPropsRadio02) {
  const onClickRadio = (value: number) => () => {
    props.onClickRadio(value);
  };

  return (
    <S.Radio>
      {props.radioData?.map((el: IRadioData) => (
        <S.RadioLabel key={el.id} onClick={onClickRadio(el.id)}>
          <S.RadioBtn
            type="radio"
            value={el.id}
            name={props.radioName}
            id={props.radioName + el.id}
            defaultChecked={el.checkedState}
          />
          <S.RadioName>{el.name}</S.RadioName>
        </S.RadioLabel>
      ))}
    </S.Radio>
  );
}
