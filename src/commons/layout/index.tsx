import styled from "@emotion/styled";
import Nav from "../../components/commons/layout/nav/Nav.container";
import { useRecoilState } from "recoil";
import { isNavOpenState } from "../store/store";
import { IIsOpen } from "../../components/commons/layout/nav/Nav.types";
import Header from "../../components/commons/layout/header/Header.container";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;
const Contents = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f8f8f8;
  width: 100%;
  padding: ${(props: IIsOpen) =>
    props.isOpen ? "30px 30px 30px 120px" : "30px 30px 30px 330px"};
`;
const Page = styled.div`
  min-width: 1000px;
  height: 100%;
`;

export default function Layout(props: ILayoutProps) {
  const [isNavOpen] = useRecoilState(isNavOpenState);

  return (
    <Wrapper>
      <Nav />
      <Contents isOpen={isNavOpen}>
        <Header />
        <Page>{props.children}</Page>
      </Contents>
    </Wrapper>
  );
}
