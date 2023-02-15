import React, { useState } from "react";
import { Alert, Button, Card, Checkbox, Form, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import authApi from "apis/auth";
import { isValidEmail, isValidPhoneNumber } from "utils/validate";
import { LoginData } from "constants/types/auth.type";
import { useNavigate } from "react-router-dom";
import { DEFAULT } from "routes/route.constant";
import styles from "pages/Login/Login.module.css";
import appStore from "pages/App/store";
import { useHookstate } from "@hookstate/core";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormLoginData = {
  accessValue: string;
  password: string;
};

const loginSchema = z.object({
  accessValue: z.string().trim().min(1),
});

const Login = () => {
  const navigate = useNavigate();
  const appState = useHookstate(appStore);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({
    resolver: zodResolver(loginSchema),
  });
  // self state
  const [loginError, setLoginError] = useState<string>("");

  const login = async (data: FormLoginData) => {
    const loginData: LoginData = {
      password: data.password,
    };
    if (isValidEmail(data.accessValue)) {
      loginData.email = data.accessValue;
    } else if (isValidPhoneNumber(data.accessValue)) {
      loginData.phone = data.accessValue;
    } else {
      loginData.username = data.accessValue;
    }

    try {
      await authApi.login(loginData);
      appState.isLogged.set(true);
      navigate(DEFAULT);
    } catch (error: any) {
      setLoginError(error.response.data.errors);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <span className={styles.logo}>
          <img src="https://preview.pro.ant.design/logo.svg" alt="logo" />
        </span>
        <span className={styles.header}>Darwin Base Admin</span>
      </div>
      <div className={styles.description}>
        <span>Darwin Shuttle Bus là website quản lý vận hành xe khách.</span>
      </div>
      <div className={styles.form}>
        <Card>
          {loginError && (
            <Alert message={loginError} type="error" className="mb-4" />
          )}
          <Form onFinish={handleSubmit(login)}>
            <Form.Item
              help={errors.accessValue?.message}
              validateStatus={errors.accessValue?.message && "error"}
            >
              <Controller
                name="accessValue"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                    {...field}
                  />
                )}
              />
            </Form.Item>
            <Form.Item>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input placeholder="Mật khẩu" type="password" {...field} />
                )}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <Button block type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form>
        </Card>
      </div>
      <div className={styles.copyright}>
        <span>© 2022 Developed by Darwin Technology</span>
      </div>
    </section>
  );
};

export default Login;
