import styled from "@emotion/styled";
import { Fragment } from "react";

interface ILayoutProps {
  children: JSX.Element;
}

const Page = styled.div``;

export default function Layout(props: ILayoutProps) {
  return (
    <Fragment>
      <Page>{props.children}</Page>
    </Fragment>
  );
}
