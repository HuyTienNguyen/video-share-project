import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/auth/slice";
import { RootState } from "../../store";
const { Title } = Typography;

interface Values {
  username: string;
  password: string;
  remember: boolean;
}

const LoginForm: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onFinish = (values: Values) => {
    const { username, password } = values;
    if (username && password) {
      const data = dispatch(signIn({ username, password }));
      if (data) router.push("/");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card hoverable style={{ width: 500 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Title level={3}>Login Account </Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            username: "1111",
            password: "1111111",
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
            <div style={{ paddingTop: "5px" }}>
              Don't have an account{" "}
              <Link href="/register" style={{ color: "#1677ff" }}>
                sign up
              </Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
