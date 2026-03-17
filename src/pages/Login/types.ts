import { AuthCredentials } from "../../types/auth";

export type IFormLogin = AuthCredentials;

export const defaultValues: IFormLogin = {
  email: "",
  password: "",
};
