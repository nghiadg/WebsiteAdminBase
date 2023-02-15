import { request } from "apis/base";
import { LoginData } from "constants/types/auth.type";

const authApi = {
  login: (data: LoginData) => {
    return request("/auth/login", {
      method: "POST",
      data,
    });
  },
  checkToken: () => {
    return request("/auth/check-token", {
      method: "GET",
    });
  },
  logout: () => {
    return request("/auth/logout", {
      method: "GET",
    });
  },
};

export default authApi;
