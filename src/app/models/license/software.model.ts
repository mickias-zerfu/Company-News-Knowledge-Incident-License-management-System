import { License } from "./license.model";

export class SoftwareProduct {
  id: number;
  name: string;
  version: string;
  description: string;
  vendor: string;
  releaseDate: Date;
  licenses: License[];
}
