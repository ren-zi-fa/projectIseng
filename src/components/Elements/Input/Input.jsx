import React, { forwardRef } from "react";


const Input = forwardRef((props,ref) => {
  const {
    type = "text",
    placeholder,
    id,
    classess = "block w-full p-2.5 rounded-lg",
    name,
  } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        className={`${classess} bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500  focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        id={id}
        ref={ref}
      />
    </>
  );
});

export default Input;
