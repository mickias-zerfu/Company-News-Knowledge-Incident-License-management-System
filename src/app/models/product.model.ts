import { CategoryModel } from "./category.model";

export interface Resource {
  id: number;
  title: string;
  description: string;
  category:CategoryModel;
  filename: string;
  size: number;
  isFeatured:boolean;
  created_at : string;
  updated_at : string;
}
