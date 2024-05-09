export class UserModel{
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  role: string;
}
export interface User {
  email:       string;
  displayName: string;
  token:       string;
  status:      number;
  message:     string;
  roleId:      number;
  access:      number[];
}
