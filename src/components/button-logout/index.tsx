import * as React from "react";
import RButton from "../elements/button";
import { useDispatch } from "react-redux";
import { signOut } from "../../stores/auth/slice";
import { useNavigate } from "react-router-dom";

export interface IButtonLoginProps {}

export default function ButtonLogout(props: IButtonLoginProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
    navigate("/");
  };
  return (
    <>
      <RButton type="primary" onClick={handleLogout}>
        Logout
      </RButton>
    </>
  );
}
