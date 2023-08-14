import { Col, Row } from "antd";
import ButtonLogin from "../../components/button-login";
import avatar from "../../images/logo.png";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import ButtonLogout from "../../components/button-logout";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/use-debounce";
import {
  getAllVideosRequest,
  setKeywordSearch,
} from "../../stores/videos/slice";
import { Link } from "react-router-dom";
import InputSearch from "../../components/elements/input-search";

export interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [keyword, setKeyword] = useState<string>("");
  const searchDebounceValue = useDebounce(keyword, 300);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setKeywordSearch({ newKeyword: searchDebounceValue?.trim() }));
  }, [dispatch, searchDebounceValue]);

  return (
    <div className={style.header}>
      <Row gutter={30} align="middle">
        <Col flex={2} className="gutter-row">
          <div>
            <Link to="/">
              <img src={avatar} alt="avatar" width={150} height={50} />
            </Link>
          </div>
        </Col>
        <Col flex={4} className="gutter-row">
          <div>
            <InputSearch
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
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
