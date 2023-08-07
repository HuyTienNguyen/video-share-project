import { LoginPayload, RegisterPayload } from "../models/auth";
import axiosClient from "./axiosClient";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  },

  register(payload: RegisterPayload) {
    return axiosClient.post("/register", payload);
  },

  logout() {
    return axiosClient.post("/logout");
  },

  getProfile() {
    return axiosClient.get("/profile");
  },
};
