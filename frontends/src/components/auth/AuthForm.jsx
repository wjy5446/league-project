import React from "react";
import styled from "styled-components";

function AuthForm({ email, password, onSubmit }) {
  return (
    <AuthFormBlock>
      <h2>Login</h2>
      <AuthLoginForm
        onSumbit={(e) => {
          e.preventDefault();
          onSubmit(email, password);
        }}
      >
        <label for="email">Email Address</label>
        <input type="email" id="email" value={email} />

        <label for="password">Password</label>
        <input type="password" name="" id="password" value={password} />
        <button>Sign In</button>
      </AuthLoginForm>
    </AuthFormBlock>
  );
}

const AuthFormBlock = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 50px;
  }
`;
const AuthLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    font-weight: 700;
    margin-bottom: 5px;
  }
  input {
    height: 2.5rem;
    border: none;
    background: #f1f3f5;
    margin-bottom: 30px;
    padding: 2px 5px;
    border-radius: 5px;
  }
  button {
    height: 2.5rem;
    border: none;
    font-weight: 700;
    border-radius: 5px;
    background-color: #21c997;
    color: white;
  }
`;

export default AuthForm;
