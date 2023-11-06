import { CategoryModel } from "./category.model";

export class ProductModel {
  id: number;
  name  : string;
  description : string;
  image_url:string;
  price : string;
  manufacturer : string;
  category:CategoryModel;
  instock : number;
  isFeatured:boolean;
  created_at : string;
  updated_at : string;
}
