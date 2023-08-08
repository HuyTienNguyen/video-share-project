import * as React from "react";
import ListVideo from "../../components/list-video";
import MainLayout from "../../layout/main-layout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";

export default function HomePage() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <MainLayout>
      <>
        <h1>Hello</h1>
        {isAuthenticated && (
          <Link to={"/shared-video"}>Go to shared video page</Link>
        )}
        <ListVideo />
      </>
    </MainLayout>
  );
}
