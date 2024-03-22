import { CategoryModel } from "./category.model";

export class ResourceUploadModel {
  id: number;
  fileTitle: string;
  fileDescription: string;
  FileDetails: File | Blob;
  fileType: number;
}

export interface Resource {
  id: number;
  fileTitle: string;
  fileDescription: string;
  fileName: string;
  fileData: string;
  fileType: number;
  created_at: string;
  updated_at: string;
}
