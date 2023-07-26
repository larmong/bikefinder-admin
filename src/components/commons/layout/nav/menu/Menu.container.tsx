import * as S from "./Menu.style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CustomMouseEvent } from "../../../../../commons/types/global.types";
import { IPropsMenuUI, ISubMenuType } from "../Nav.types";

export default function MenuUI(props: IPropsMenuUI) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMoveToMenu = (event: CustomMouseEvent) => {
    setIsMenuOpen((prov: boolean) => !prov);
    void router.push(`${event.currentTarget.id}`);
  };
  const onClickMoveToSubMenu = (event: CustomMouseEvent) => {
    void router.push(`${event.currentTarget.id}`);
  };

  useEffect(() => {
    // 메뉴가 선택되어있으면 메뉴 열려있기
  });

  return (
    <S.Menu key={props.index} isOpen={props.isOpen}>
      <S.MenuName isOpen={props.isOpen} isMenuOn={props.el.isOpen}>
        <S.MenuIcon
          isOpen={props.isOpen}
          isMenuOn={props.el.isOpen}
          id={props.el.route}
          onClick={onClickMoveToMenu}
        >
          {props.el.icon}
        </S.MenuIcon>
        <span id={props.el.route} onClick={onClickMoveToMenu}>
          {props.el.name}
        </span>
        {props.el.subMenu.length !== 0 ? (
          <S.SubMenuIcon isOpen={props.isOpen} isMenuOpen={isMenuOpen}>
            <MdKeyboardArrowDown />
          </S.SubMenuIcon>
        ) : (
          ""
        )}
      </S.MenuName>
      {isMenuOpen && props.el.subMenu.length !== 0
        ? props.el.subMenu.map((item: ISubMenuType, index: number) => (
            <S.SubMenu key={index} isOpen={props.isOpen}>
              <span id={item.route} onClick={onClickMoveToSubMenu}>
                {item.name}
              </span>
            </S.SubMenu>
          ))
        : ""}
    </S.Menu>
  );
}
