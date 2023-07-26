import styled from "@emotion/styled";
import { IIsOpen } from "../Nav.types";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: IIsOpen) => (props.isOpen ? "center" : "initial")};
  justify-content: center;
  width: 100%;
`;

export const SubMenuIcon = styled.div<IIsOpen>`
  width: 20px;
  height: 20px;
  margin-left: auto;
  display: ${(props) => (props.isOpen ? "none" : "block")};
  transform: ${(props) => (props.isMenuOpen ? "scaleY(-1)" : "")};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SubMenuContainer = styled.div<IIsOpen>`
  display: ${(props) => (props.isOpen ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
`;

export const SubMenu = styled.div<IIsOpen>`
  position: relative;
  display: flex;
  align-items: center;
  height: 45px;
  span {
    position: absolute;
    width: calc(100% + 60px);
    margin-left: -30px;
    padding: 12px 0 12px 65px;
    color: ${(props) => (props.isSubOpen ? "#0d8f68" : "#7a797d")};
    background: ${(props) => (props.isSubOpen ? "rgb(232,255,246)" : "#fff")};
    cursor: pointer;
    //color: #7a797d;
  }
`;

export const MenuName = styled.div<IIsOpen>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 0;
  span {
    cursor: pointer;
    display: ${(props) => (props.isOpen ? "none" : "block")};
    color: ${(props) => (props.isMenuOn ? "#0d8f68" : "#7a797d")};
    font-weight: ${(props) => (props.isMenuOn ? "900" : "400")};
  }
`;
export const MenuIcon = styled.div`
  cursor: pointer;
  width: ${(props: IIsOpen) => (props.isOpen ? "30px" : "28px")};
  height: ${(props: IIsOpen) => (props.isOpen ? "30px" : "28px")};
  color: ${(props) => (props.isMenuOn ? "#0d8f68" : "#7a797d")};
  svg {
    width: 100%;
    height: 100%;
  }
`;
