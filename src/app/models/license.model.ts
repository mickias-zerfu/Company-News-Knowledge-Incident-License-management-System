import { SoftwareModel } from "./software.model";
import { UserModel } from "./user.model";

export class LicenseModel {
  licenseID : string;
  licenseKey : string;
  activationStatus : string;
  quantity: number;
  expirationDate: Date;
  assignedUsers: UserModel[];
  softwareProduct: SoftwareModel;
  AgreementStartDate : string;
  AgreementEndDate : string;
}
