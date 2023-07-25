import * as S from "./Nav.style";
import MenuUI from "./menu/Menu.container";
import { BiArrowFromRight } from "react-icons/bi";
import { IDashboardMenuType, IPropsNavUI } from "./Nav.types";

export default function NavUI(props: IPropsNavUI) {
  return (
    <S.Nav isOpen={props.isNavOpen}>
      <S.NavTop isOpen={props.isNavOpen}>
        <S.LogoWrapper onClick={props.onClickMoveToHome}>
          <S.LogoImage
            isOpen={props.isNavOpen}
            src="https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Flogo1.svg?alt=media&token=be710d93-e9ae-4712-b118-beb15d94e599"
            alt="BikeFinder"
          />
          <S.LogoName
            isOpen={props.isNavOpen}
            src="https://firebasestorage.googleapis.com/v0/b/bike-finder-1121a.appspot.com/o/bikefinder%2Flogo2.svg?alt=media&token=dfa463d4-67ca-442b-83e0-579c3d47755a"
            alt="BikeFinder"
          />
        </S.LogoWrapper>
        <S.Close isOpen={props.isNavOpen} onClick={props.onClickNavOpen}>
          <BiArrowFromRight />
        </S.Close>
      </S.NavTop>
      <S.NavMenu isOpen={props.isNavOpen}>
        {props.DASHBOARD_MENU.map((el: IDashboardMenuType, index: number) => (
          <MenuUI key={index} el={el} index={index} isOpen={props.isNavOpen} />
        ))}
      </S.NavMenu>
      <S.NavBottom>
        <span>BIKE FINDER - ADMIN</span>
        <S.Copy isOpen={props.isNavOpen}>
          Copyright ⓒ 2023 larmong All rights reserved.
        </S.Copy>
      </S.NavBottom>
    </S.Nav>
  );
}
