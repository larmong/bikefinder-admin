import { AuthNumBtn } from "./button03.style";
import { IButton03 } from "./button03.types";

export default function Button03(props: IButton03) {
  return <AuthNumBtn onClick={props.onClickButton}>{props.btnText}</AuthNumBtn>;
}
