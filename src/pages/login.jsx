import React, { useEffect } from "react";
import AuthLayouts from "../components/layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import Input from "../components/Elements/Input/Input";
import Label from "../components/Elements/Input/Label";
import { Link } from "react-router-dom";

export default function LoginPage() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/product";
    }
   
  }, []);
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <AuthLayouts title="Login" type="login">
          <FormLogin>
            <div className="flex items-start mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Input classess="w-4 h-4 rounded-sm me-2" type="checkbox" />
                </div>
                <Label>Remember me</Label>
              </div>
              <Link to="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                Lost Password?
              </Link>
            </div>
          </FormLogin>
        </AuthLayouts>
      </div>
    </>
  );
}
