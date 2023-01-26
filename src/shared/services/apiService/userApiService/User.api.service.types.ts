export interface ISignUpData {
  email: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpResponse {
  email: string;
}

export interface ISignInResponse {
  access_token: string;
}

export interface IUser {
  email: string;
}
