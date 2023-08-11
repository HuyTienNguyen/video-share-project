import { LoginPayload, RegisterPayload } from "../models/auth";
import {
  IUserLoginResponse,
  IUserRegisterResponse,
} from "../stores/response.type";
import axiosClient from "./axiosClient";

export const authApi = {
  login(payload: LoginPayload): Promise<IUserLoginResponse> {
    return axiosClient.post("/auth/login", payload);
  },

  register(payload: RegisterPayload): Promise<IUserRegisterResponse> {
    return axiosClient.post("/auth/register", payload);
  },

  logout() {
    return axiosClient.post("/logout");
  },
};
