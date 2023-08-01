import { TableBtn } from "./button04.style";
import { IPropsButton04 } from "./button04.types";

export default function Button04(props: IPropsButton04) {
  return (
    <TableBtn onClick={props.onClickButton} className={props.btnClass}>
      {props.btnText}
    </TableBtn>
  );
}
