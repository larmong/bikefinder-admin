import styled from "@emotion/styled";
import Nav from "../../components/commons/layout/nav/Nav.container";
import { useRecoilState } from "recoil";
import { isNavOpenState } from "../store/store";
import { IIsOpen } from "../../components/commons/layout/nav/Nav.types";

interface ILayoutProps {
  children: JSX.Element;
}

const Wrapper = styled.div`
  display: flex;
`;
const Contents = styled.div`
  background: #f8f8f8;
  width: ${(props: IIsOpen) =>
    props.isOpen ? "calc(100% - 90px)" : "calc(100% - 300px)"};
`;
const Page = styled.div`
  min-width: 1000px;
  max-width: 1200px;
`;

export default function Layout(props: ILayoutProps) {
  const [isNavOpen] = useRecoilState(isNavOpenState);

  return (
    <Wrapper>
      <Nav />
      <Contents isOpen={isNavOpen}>
        <Page>{props.children}</Page>
      </Contents>
    </Wrapper>
  );
}
