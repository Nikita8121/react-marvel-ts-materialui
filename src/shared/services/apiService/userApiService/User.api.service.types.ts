export interface IRegisterData {
  email: string;
  password: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
}
