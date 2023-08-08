import { Col, Row } from "antd";
import ButtonLogin from "../../components/button-login";
import InputSearch from "../../components/input-search";
import avatar from "../../images/logo.png";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import ButtonLogout from "../../components/button-logout";

export interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <div className={style.header}>
      <Row gutter={30} align="middle">
        <Col flex={2} className="gutter-row">
          <div>
            <img src={avatar} alt="avatar" width={150} height={50} />
          </div>
        </Col>
        <Col flex={4} className="gutter-row">
          <div>
            <InputSearch />
          </div>
        </Col>
        <Col flex={2} className="gutter-row">
          {!isAuthenticated ? <ButtonLogin /> : <ButtonLogout />}
        </Col>
      </Row>
    </div>
  );
};

export default Header;
