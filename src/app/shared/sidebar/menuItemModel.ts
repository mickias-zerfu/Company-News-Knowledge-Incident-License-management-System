
export class MenuItemModel {
  id!: number;
  name!: string;
  url!: string;
  icon!: string;
  order!: number;
  description!: string;
  code!: string;
  isActive: boolean = false;
}
