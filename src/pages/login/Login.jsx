
import React, { useState } from "react";
import axios from "../../api/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form, Input, message } from "antd";
import Regester from "../../companents/regester/regester";




const Login = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const [show, setShow] = useState(false);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values) => {
    setLoading(true);

    axios
      .post("/admins/sign-in", values)
      .then((res) => {
        console.log(res.data.payload.token);
        navigete("/");
        messageApi.success("Log in!");
        dispatch({ type: "LOGIN", payload: res.data.payload.token });
        console.log(res);
      })
      .catch((err) => {
        messageApi.error("username or password in incorrect!");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
     <div className="flex h-screen items-center justify-center">
      {contextHolder}
      <div className=" w-[400px]">
        <h3 className="text-center text-3xl mb-3">Login</h3>
        <Form
          className=""
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* <Form.Item
            label="Ismnigiz"
            name="name"
            rules={[
              {
                required: true,
                message: "Ism kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Ism kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button disabled={loading} className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <button onClick={() => setShow(true)}> Register</button>
        </Form>
        <Regester show={show} setShow={setShow} />
      </div>
    </div>
  );
};
export default Login;
