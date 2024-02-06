
import { SoftwareProduct } from "./software.model";
import { UserModel } from "./user.model";

export class LicenseModel {
  id : string;
  licenseKey : string;
  activationStatus : string;
  quantity: number;
  expirationDate: Date;
  assignedUsers: UserModel[];
  softwareProduct: SoftwareProduct;
  AgreementStartDate : string;
  AgreementEndDate : string;
}
