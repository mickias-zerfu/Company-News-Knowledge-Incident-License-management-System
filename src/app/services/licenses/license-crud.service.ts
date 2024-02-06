import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LicenseModel } from 'src/app/models/license.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseCrudService {
  private baseUrl = '/api/licenses'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getLicenses(): Observable<LicenseModel[]> {
    return this.http.get<LicenseModel[]>(this.baseUrl);
  }

  getLicenseById(id: number): Observable<LicenseModel> {
    return this.http.get<LicenseModel>(`${this.baseUrl}/${id}`);
  }

  createLicense(license: LicenseModel): Observable<LicenseModel> {
    return this.http.post<LicenseModel>(this.baseUrl, license);
  }

  updateLicense(id: number, license: LicenseModel): Observable<LicenseModel> {
    return this.http.put<LicenseModel>(`${this.baseUrl}/${id}`, license);
  }

  deleteLicense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
