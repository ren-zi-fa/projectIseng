import React from "react";
import Label from "./Label";
import Input from "./Input";

export default function InputForm(props) {
  const { type, label, name, placeholder, id, classess } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        classess={classess}
      />
    </div>
  );
}
