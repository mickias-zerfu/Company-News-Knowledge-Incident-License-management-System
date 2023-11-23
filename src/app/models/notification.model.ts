import { UserModel } from "./user.model";

export class NotificationModel {
  id: number;
  user: UserModel;
  eventType: string;
  notificationMethod: string;
  frequency: string;
}
