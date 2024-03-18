import { License } from "./license.model";

export interface LicenseManager {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
  registrationDate: Date;
  phoneNumber: string;
  profilePictureUrl: string;
  licenseId: number;
  license: License;
}
