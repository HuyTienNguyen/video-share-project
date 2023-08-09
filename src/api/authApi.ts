import { LoginPayload, RegisterPayload } from "../models/auth";
import { IUserLoginResponse } from "../stores/response.type";
import axiosClient from "./axiosClient";

export const authApi = {
  login(payload: LoginPayload): Promise<IUserLoginResponse> {
    console.log("data", payload);
    return axiosClient.post("/auth/login", payload);
  },

  register(payload: RegisterPayload) {
    return axiosClient.post("/auth/register", payload);
  },

  logout() {
    return axiosClient.post("/logout");
  },
};
