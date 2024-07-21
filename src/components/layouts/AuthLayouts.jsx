import React from "react";
import { Link } from "react-router-dom";
export default function AuthLayouts(props) {
  const { title, children, type } = props;

  return (
    <>
      <div className="w-full max-w-xs xl:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3xl font-medium text-blue-600">{title}</h1>
        <p className="font-medium text-slate-400 mb-6">
          Welcome, please fill the form
        </p>
        {children}
        <NavigateAuth type={type} />
      </div>
    </>
  );
}

const NavigateAuth = (props) => {
  const { type } = props;

  if (type == "login") {
    return (
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300 my-2">
        Not registered?{" "}
        <Link
          to="/register"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Create account
        </Link>
      </div>
    );
  } else {
    return (
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300 my-2">
        Have an Account?{" "}
        <Link
          to="/login"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Login
        </Link>
      </div>
    );
  }
};
