import React from "react";
import { RegisterForm } from "../components/forms/RegisterForm";
import { register } from "../utils/services/userServices";

type UserRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const RegisterPage = () => {
  const onSubmit = (data: UserRegister) => {
    register(data)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return <RegisterForm onSubmit={onSubmit} />;
};
