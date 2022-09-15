import {LoginForm} from "../components/forms/LoginForm";
import {FC} from "react";

type LoginFormData = {
    email: string;
    password: string;
}
export const LoginPage: FC = () => {
    const onSubmit = (data: LoginFormData) => {
    };
    return (
        <LoginForm onSubmit={onSubmit}/>
    )
}
