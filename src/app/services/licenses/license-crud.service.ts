import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { License } from 'src/app/models/license/license.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseCrudService {
  private baseUrl = '/api/licenses'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getLicenses(): Observable<License[]> {
    return this.http.get<License[]>(this.baseUrl);
  }
  getLicenseById(id: number): Observable<License> {
    return this.http.get<License>(`${this.baseUrl}/${id}`);
  }
  createLicense(license: License): Observable<License> {
    return this.http.post<License>(this.baseUrl, license);
  }

  updateLicense(id: number, license: License): Observable<License> {
    return this.http.put<License>(`${this.baseUrl}/${id}`, license);
  }

  deleteLicense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
