import { DefaultBtn } from "./Button01.style";
import { IPropsButton01 } from "./Button01.types";

export default function Button01(props: IPropsButton01) {
  return (
    <DefaultBtn
      onClick={props.onClickButton}
      className={props.btnClass}
      btnWidth={props.btnWidth}
    >
      {props.btnText}
    </DefaultBtn>
  );
}
