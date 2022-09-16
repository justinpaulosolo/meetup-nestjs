import { LoginForm } from "../components/forms/LoginForm";
import { login } from "../utils/services/userServices";
import AuthContext from "../utils/context/AuthProvider";
import { useContext } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  // @ts-ignore
  const { setAuth } = useContext(AuthContext);
  const onSubmit = (data: LoginFormData) => {
    login(data)
      .then((res) => {
        console.log(res);
        const access_token = res.data.access_token;
        const user = res.data.user;
        setAuth({ access_token, user });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};
