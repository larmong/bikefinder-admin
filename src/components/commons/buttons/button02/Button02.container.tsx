import { SmallBtn } from "./Button02.style";
import { IPropsButton02 } from "./Button02.types";

export default function Button02(props: IPropsButton02) {
  return (
    <SmallBtn
      id={props.btnId}
      onClick={props.onClickButton}
      btnWidth={props.btnWidth}
      className={props.btnClass}
    >
      {props.btnText}
    </SmallBtn>
  );
}
