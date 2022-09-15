import React from "react";
import {RegisterForm} from "../components/forms/RegisterForm";

type UserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPage = () => {

  const onSubmit = (data: UserRegister) => {
    console.log(data);
  };

  return (
    <RegisterForm onSubmit={onSubmit} />
  )
}