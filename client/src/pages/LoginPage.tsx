import { LoginForm } from "../components/forms/LoginForm";
import { login } from "../utils/services/userServices";

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const onSubmit = (data: LoginFormData) => {
    login(data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};
