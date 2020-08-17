import React from "react";
import AuthForm from "../../components/auth/AuthForm";
import AuthModal from "../../components/auth/AuthModal";

function AuthModalContainer() {
  return (
    <AuthModal>
      <AuthForm></AuthForm>
    </AuthModal>
  );
}

export default AuthModalContainer;
