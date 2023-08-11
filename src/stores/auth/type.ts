import { EActionStatus } from "../type";

export interface IAuthState {
  status: EActionStatus;
  statusSignUp: EActionStatus;
  jwtAuth: string | null;
  isAuthenticated: boolean;
}
