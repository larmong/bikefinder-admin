import * as S from "./Radio01.style";
import { IPropsRadio01, IRadioData } from "./Radio01.types";

export default function Radio01(props: IPropsRadio01) {
  const onClickRadio = (value: number) => () => {
    props.onClickRadio(value);
  };

  return (
    <S.Radio>
      {props.radioData?.map((el: IRadioData, index: number) => (
        <S.RadioLabel key={index} onClick={onClickRadio(el.price)}>
          <S.RadioBtn
            type="radio"
            value={el.price}
            name={props.radioName}
            id={props.radioName + index}
          />
          <S.RadioName>{el.name}</S.RadioName>
        </S.RadioLabel>
      ))}
    </S.Radio>
  );
}
