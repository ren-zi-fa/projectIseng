import React from "react";

export default function Label(props) {
  const { htmlFor, children } = props;
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {children}
      </label>
    </>
  );
}
