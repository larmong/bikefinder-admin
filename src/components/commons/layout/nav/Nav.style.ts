import styled from "@emotion/styled";
import { IIsOpen } from "./Nav.types";

export const Nav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
  width: ${(props: IIsOpen) => (props.isOpen ? "90px" : "300px")};
  padding: ${(props: IIsOpen) => (props.isOpen ? "30px 20px" : "30px")};
`;

export const NavTop = styled.div`
  display: flex;
  flex-direction: ${(props: IIsOpen) => (props.isOpen ? "column" : "row")};
  gap: ${(props: IIsOpen) => (props.isOpen ? "20px" : "0px")};
  align-items: center;
  justify-content: space-between;
  padding-bottom: 35px;
  padding-top: 5px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  height: 40px;
  cursor: pointer;
`;
export const LogoImage = styled.img`
  height: 100%;
  width: ${(props: IIsOpen) => (props.isOpen ? "49px" : "auto")};
`;
export const LogoName = styled.img`
  height: 30px;
  display: ${(props: IIsOpen) => (props.isOpen ? "none" : "block")};
`;

export const Close = styled.div`
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-bottom: 10px;
  position: ${(props: IIsOpen) => (props.isOpen ? "absolute" : "relative")};
  bottom: ${(props: IIsOpen) => (props.isOpen ? "160px" : "0")};
  transform: ${(props: IIsOpen) => (props.isOpen ? "scaleX(-1)" : "")};
  svg {
    width: 100%;
    height: 100%;
    color: rgb(55, 87, 105);
  }
`;

export const NavMenu = styled.div<IIsOpen>`
  height: 90%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  gap: ${(props) => (props.isOpen ? "30px" : "20px")};
`;

export const NavBottom = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  span {
    font-weight: 700;
    margin: 5px;
    font-size: 13px;
    text-align: center;
  }
`;
export const Copy = styled.p`
  text-align: center;
  font-size: 10px;
  color: #7a797d;
  display: ${(props: IIsOpen) => (props.isOpen ? "none" : "block")};
`;
