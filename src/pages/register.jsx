import React from "react";
import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

export default function RegisterPage() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <AuthLayouts title="Register" type="register">
          <FormRegister />
        </AuthLayouts>
      </div>
    </>
  );
}
