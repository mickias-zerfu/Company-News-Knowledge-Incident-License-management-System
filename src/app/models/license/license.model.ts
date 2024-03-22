import { SoftwareProduct } from "./software.model";

export interface License {
  id: number;
  issuedTo: string;
  issuedBy: string;
  creationDate: Date;
  activationDate?: Date;
  expirationDate: Date;
  maxUsers: number;
  activated: boolean;
  licenseType: LicenseType;
  notes: string;
  softwareProductId: number;
  softwareProduct: SoftwareProduct;
}
export enum LicenseType {
  SingleUserSubscription,
  MultiUserSubscription,
  SingleUserLifeTimeAccess,
  MultiUserLifeTimeAccess
}
