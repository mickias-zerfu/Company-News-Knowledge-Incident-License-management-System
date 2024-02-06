import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationModel } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = '/api/notifications'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<NotificationModel[]> {
    return this.http.get<NotificationModel[]>(this.baseUrl);
  }

  getNotificationById(id: number): Observable<NotificationModel> {
    return this.http.get<NotificationModel>(`${this.baseUrl}/${id}`);
  }

  createNotification(notification: Notification): Observable<NotificationModel> {
    return this.http.post<NotificationModel>(this.baseUrl, notification);
  }

  updateNotification(id: number, notification: Notification): Observable<NotificationModel> {
    return this.http.put<NotificationModel>(`${this.baseUrl}/${id}`, notification);
  }

  deleteNotification(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
