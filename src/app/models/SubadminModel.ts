export class SubAdminModel {
  id: number;
  name: string;
  email: string;
  access: number[] | null;
  passwordHash: string;
  roleId: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}
export class SubAdminModelCreate {
  displayName: string;
  email: string;
  access: number[] | null;
  password: string;
}
