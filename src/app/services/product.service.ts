import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceUploadModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:5195/api/SharedResource';
  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getFileById(FileId: number): Observable<any> {
    const url = `${this.apiUrl}/${FileId}`;
    return this.http.get<any>(url);
  }

  searchFiles(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}`;
    return this.http.get<any>(url);
  }

  addResource(File: any): Observable<any> {
    console.log(File);
    return this.http.post<any>(this.apiUrl, File);
  }
  updateFile(FileId: number, File: any): Observable<any> {
    const url = `${this.apiUrl}/${FileId}`;
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set content type to JSON
    return this.http.put<any>(url, File);
  }

  downloadFile(FileId: number): Observable<any> {
    const url = `${this.apiUrl}/DownloadFile/${FileId}`;
    return this.http.get<any>(url);
  }
  shareFile(fileId: any, recipientEmail: string, message: string): Observable<any> {
    const url = `${this.apiUrl}/SharedResource/ShareFile/${fileId}`;
    const body = { recipientEmail, message };
    return this.http.post<any>(url, body);
  }
  deleteFile(FileId: number): Observable<any> {
    const url = `${this.apiUrl}/${FileId}`;
    return this.http.delete<any>(url);
  }
}
