import styled from "@emotion/styled";
import { Fragment } from "react";
import Nav from "../../components/commons/layout/nav/Nav.container";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div``;

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <Nav />
      <div>
        <Page>{props.children}</Page>
      </div>
    </Fragment>
  );
}
