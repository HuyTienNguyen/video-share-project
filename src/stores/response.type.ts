export interface IUserLoginResponse {
  access_token: string;
  expired_at: any;
}

export interface IUserRegisterResponse {
  id: number;
  username: string;
  email: string;
  password: string;
  refresh_token: string;
  date_of_birth: string | null;
  phone_number: string | null;
  createdAt: string;
}
