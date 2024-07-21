import React from "react";

export default function Button(props) {
  const {
    children,
    type = "button",
    onClick = () => {},
    classess = "rounded-md px:4 py:2 lg:px-5 lg:py-2.5 text-xs lg:text-lg font-normal tracking-wide",
  } = props;
  return (
    <>
      <button
        onClick={onClick}
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  ${classess} text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        type={type}
      >
        {children}
      </button>
    </>
  );
}
