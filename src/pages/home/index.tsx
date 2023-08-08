import * as React from "react";
import ListVideo from "../../components/list-video";
import LayoutPublic from "../../layout/layout-public";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <LayoutPublic>
      <>
        <h1>Hello</h1>
        <ListVideo />
      </>
    </LayoutPublic>
  );
}
