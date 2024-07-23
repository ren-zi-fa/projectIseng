import React, { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";


const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };
  const emailRef = useRef(null)
  useEffect(()=>{
    emailRef.current.focus()
  },[])
  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="email"
          type="email"
          placeholder="@example.com"
          name="email"
          id="your_email"
          ref={emailRef}
        />
        <InputForm
          label="password"
          type="passsword"
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
