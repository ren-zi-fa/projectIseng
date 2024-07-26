import React, { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href="/products"
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <>
      <form onSubmit={handleLogin}>
        {loginFailed && <p className="text-red-500">{loginFailed}</p>}
        <InputForm
          label="username"
          type="username"
          placeholder="John Doe"
          name="username"
          id="your_username"
          ref={usernameRef}
        />
        <InputForm
          label="password"
          type="password"
          placeholder="*****"
          name="password"
          id="your_password"
        />
        <Button classess="mb-6 rounded-md text-sm px-5 py-2" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
