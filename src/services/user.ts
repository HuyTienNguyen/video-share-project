import { Cookies } from "react-cookie";
import axiosClient from "../api/axiosClient";
import { IUserLoginResponse } from "../stores/response.type";

const cookies = new Cookies();

const serviceUser = {
  getAccessToken: () => {
    const userInfo = cookies.get("JWT_TOKEN");
    return userInfo ? userInfo : null;
  },

  storeAccessToken: (token: string | null) => {
    if (token) {
      cookies.set("JWT_TOKEN", token);
      return;
    }
    cookies.remove("JWT_TOKEN");
  },

  login: async (username: string, password: string) => {
    const response = await axiosClient.post<IUserLoginResponse>("/login", {
      username,
      password,
    });
    return response;
  },
};

export default serviceUser;
