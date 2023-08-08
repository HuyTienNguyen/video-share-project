import RButton from "../elements/button";

import { useNavigate } from "react-router-dom";
export default function ButtonLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <RButton type="primary" onClick={handleLogin}>Login</RButton>
    </>
  );
}
