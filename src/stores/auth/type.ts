import { EActionStatus } from "../type";

export interface IAuthState {
  status: EActionStatus;
  jwtAuth: string | null;
  isAuthenticated: boolean;
}

export interface ISignInAction {
  username: string;
  password: string;
}
