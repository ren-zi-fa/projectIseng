import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";


export default function FormRegister() {
  return (
    <>
      <form action="">
        <InputForm label="full name" type="text" placeholder="John Doe" name="name" id="your_name" />
        <InputForm label="Age" type="number" placeholder="22" name="age" id="age" />
        <InputForm label="email" type="email" placeholder="@example.com" name="email" id="your_email" />
        <InputForm label="password" type="passsword" placeholder="••••••••" name="password" id="your_password" />
        <Button classess="rounded-full text-sm px-8 py-2 w-full">Register</Button>
       
      </form>
    </>
  );
}
