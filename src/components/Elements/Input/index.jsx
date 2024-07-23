import Label from "./Label";
import Input from "./Input";
import React, { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
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
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
