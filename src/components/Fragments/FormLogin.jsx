import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormLogin({ children }) {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm label="email" type="email" placeholder="@example.com" name="email" id="your_email" />
        <InputForm label="password" type="passsword" placeholder="*****" name="password" id="your_password" />
        {children}
        <Button classess="mb-6 rounded-md text-sm px-5 py-2" type="submit">
          Login
        </Button>
      </form>
    </>
  );
}
