import axios from "axios";

export const login = (payload: any) => {
  const config = {
    method: "POST",
    url: "http://localhost:5000/api/auth/login",
    data: payload,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export const register = (payload: any) => {
  const config = {
    method: "POST",
    url: "http://localhost:5000/api/user",
    data: payload,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};
