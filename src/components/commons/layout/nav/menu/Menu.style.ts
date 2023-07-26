import styled from "@emotion/styled";
import { IIsOpen } from "../Nav.types";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: IIsOpen) => (props.isOpen ? "center" : "initial")};
  gap: 10px;
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

export const SubMenu = styled.div`
  display: ${(props: IIsOpen) => (props.isOpen ? "none" : "flex")};
  height: 30px;
  align-items: center;
  gap: 7px;
  padding-left: 35px;
  span {
    cursor: pointer;
    color: #7a797d;
  }
`;

export const MenuName = styled.div<IIsOpen>`
  display: flex;
  height: 30px;
  align-items: center;
  gap: 7px;
  span {
    cursor: pointer;
    display: ${(props) => (props.isOpen ? "none" : "block")};
    color: ${(props) => (props.isMenuOn ? "#0d8f68" : "#7a797d")};
    font-weight: ${(props) => (props.isMenuOn ? "700" : "400")};
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
