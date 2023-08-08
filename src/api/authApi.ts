import { LoginPayload, RegisterPayload } from "../models/auth";
import { IUserLoginResponse } from "../stores/response.type";
import axiosClient from "./axiosClient";

export const authApi = {
  login(payload: LoginPayload): Promise<IUserLoginResponse> {
    return axiosClient.post("/login", payload);
  },

  register(payload: RegisterPayload) {
    return axiosClient.post("/register", payload);
  },

  logout() {
    return axiosClient.post("/logout");
  },
};
